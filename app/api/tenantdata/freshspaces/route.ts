import { NextRequest, NextResponse } from 'next/server';
import { TENANT_REGISTRY } from '../tenants';
import twilio from 'twilio';

// Initialize Twilio client with credentials from environment variables
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    const tenant = TENANT_REGISTRY['freshspaces'];

    // Guard: tenant must exist
    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    // Guard: ensure all required env vars are set
    const from = process.env.TWILIO_WHATSAPP_FROM;
    const to = tenant.whatsappTo;
    const templateSid = process.env.TWILIO_WHATSAPP_TEMPLATE_SID;

    if (!from || !to) {
      console.error('Missing Twilio environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Send via Twilio WhatsApp
    await client.messages.create({
      from,
      to,
      contentSid: templateSid,
      contentVariables: JSON.stringify({
        "1": name,
        "2": email,
        "3": phone || 'Not provided',
        "4": message,
      }),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: unknown) {
    console.error('Twilio WhatsApp error:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      { error: `Failed to send notification: ${errorMessage}` },
      { status: 500 }
    );
  }
}
