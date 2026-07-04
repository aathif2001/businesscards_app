"use client";
import { useState } from "react";
import { X, Copy, Check } from "lucide-react";

const paymentDetails: Record<string, { title: string; subtitle: string; fields: { label: string; value: string; copyable: boolean }[]; note?: string }> = {
  "Bank Transfer": {
    title: "Bank Transfer",
    subtitle: "Transfer directly to our salon account. Please use your name as the payment reference.",
    fields: [
      { label: "Bank Name", value: "Commercial Bank of Ceylon", copyable: false },
      { label: "Account Name", value: "Glow Beauty Lounge (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "8001234567", copyable: true },
      { label: "Branch", value: "Negombo Branch", copyable: false },
      { label: "SWIFT Code", value: "CCEYLKLX", copyable: true },
    ],
    note: "Please send your payment slip to bookings@glowbeauty.lk to confirm your booking.",
  },
  "Google Pay": {
    title: "Google Pay",
    subtitle: "Pay via Google Pay using our registered mobile number.",
    fields: [
      { label: "GPay Number", value: "+94 77 222 3344", copyable: true },
      { label: "Registered Name", value: "Glow Beauty Lounge", copyable: false },
    ],
    note: "Include your name and service in the GPay note.",
  },
  "Visa / Mastercard": {
    title: "Visa / Mastercard",
    subtitle: "We accept debit and credit card payments at the salon on the day of your appointment.",
    fields: [
      { label: "Accepted Cards", value: "Visa, Mastercard", copyable: false },
      { label: "Payment Point", value: "In-salon only", copyable: false },
    ],
  },
  "Cash": {
    title: "Cash Payment",
    subtitle: "Cash payments are accepted in-salon. Please bring the exact amount when possible.",
    fields: [
      { label: "Location", value: "67, Lewis Place, Negombo", copyable: false },
      { label: "Hours", value: "Mon–Sat 9AM–7PM, Sun 10AM–4PM", copyable: false },
    ],
  },
  "Online Banking": {
    title: "Online Banking",
    subtitle: "Transfer via internet banking using the details below.",
    fields: [
      { label: "Bank", value: "Commercial Bank of Ceylon", copyable: false },
      { label: "Account Name", value: "Glow Beauty Lounge (Pvt) Ltd", copyable: true },
      { label: "Account No.", value: "8001234567", copyable: true },
    ],
    note: "Email your payment confirmation to bookings@glowbeauty.lk.",
  },
  "Gift Vouchers": {
    title: "Gift Vouchers",
    subtitle: "Purchase salon gift vouchers for your loved ones — perfect for birthdays, anniversaries, or any occasion.",
    fields: [
      { label: "Available", value: "LKR 2,500 / 5,000 / 10,000", copyable: false },
      { label: "Validity", value: "6 months from purchase date", copyable: false },
      { label: "Purchase", value: "In-salon or via WhatsApp", copyable: false },
    ],
    note: "Gift vouchers can be personalised with a handwritten message.",
  },
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div><p className="text-gray-400 text-xs mb-0.5">{label}</p><p className="text-white text-sm font-medium break-all">{value}</p></div>
      <button onClick={copy} className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: copied ? "#22c55e22" : "rgba(217,180,143,0.18)" }} title="Copy">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} style={{ color: "#D9B48F" }} />}
      </button>
    </div>
  );
}

function StaticField({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <p className="text-gray-400 text-xs mb-0.5">{label}</p>
      <p className="text-white text-sm font-medium">{value}</p>
    </div>
  );
}

export function PaymentModal({ method, onClose }: { method: string; onClose: () => void }) {
  const detail = paymentDetails[method];
  if (!detail) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(36,19,30,0.93)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl overflow-hidden" style={{ backgroundColor: "#3A2232" }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <p style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Payment Details</p>
            <h3 className="text-white">{detail.title}</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <X size={16} className="text-white" />
          </button>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{detail.subtitle}</p>
          {detail.fields.map(field => field.copyable
            ? <CopyField key={field.label} label={field.label} value={field.value} />
            : <StaticField key={field.label} label={field.label} value={field.value} />
          )}
          {detail.note && (
            <div className="rounded-xl px-4 py-3 mt-2" style={{ backgroundColor: "rgba(217,180,143,0.12)", borderLeft: "3px solid #D9B48F" }}>
              <p className="text-gray-300 text-xs leading-relaxed">{detail.note}</p>
            </div>
          )}
        </div>
        <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <button onClick={onClose} className="w-full py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D9B48F" }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
