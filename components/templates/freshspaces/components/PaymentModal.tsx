'use client';
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface PaymentField {
  label: string;
  value: string;
  copyable?: boolean;
}

interface PaymentDetail {
  title: string;
  subtitle: string;
  note?: string;
  fields: PaymentField[];
}

export const paymentDetails: Record<string, PaymentDetail> = {
  "Bank Transfer": {
    title: "Bank Transfer",
    subtitle: "Transfer directly to our account and send proof of payment to clean@freshspaces.lk",
    fields: [
      { label: "Bank", value: "Commercial Bank of Ceylon", copyable: false },
      { label: "Branch", value: "Nugegoda", copyable: false },
      { label: "Account Name", value: "FreshSpaces Sri Lanka (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "8001 2345 6789 0", copyable: true },
      { label: "Branch Code", value: "053", copyable: true },
      { label: "SWIFT / BIC", value: "CCEYLKLX", copyable: true },
    ],
  },
  "Google Pay": {
    title: "Google Pay",
    subtitle: "Send payment to the GPay ID below and include your name and invoice number in the note.",
    fields: [
      { label: "GPay UPI ID", value: "freshspaces@okaxis", copyable: true },
      { label: "Merchant Name", value: "FreshSpaces Sri Lanka", copyable: true },
      { label: "Contact Number", value: "+94 77 123 4567", copyable: true },
    ],
    note: "Screenshot your payment confirmation and send to clean@freshspaces.lk",
  },
  "Visa / Mastercard": {
    title: "Visa / Mastercard",
    subtitle: "Card payments are processed manually by our accounts team. Contact us to arrange.",
    fields: [
      { label: "Accounts Team", value: "+94 77 123 4567", copyable: true },
      { label: "Email", value: "clean@freshspaces.lk", copyable: true },
      { label: "Working Hours", value: "Mon – Fri, 8:00am – 6:00pm", copyable: false },
    ],
    note: "Our team will securely process your card payment over the phone.",
  },
  "Apple Pay": {
    title: "Apple Pay",
    subtitle: "Send payment via Apple Pay to the details below and include your invoice reference.",
    fields: [
      { label: "Apple Pay ID", value: "freshspaces@icloud.com", copyable: true },
      { label: "Merchant Name", value: "FreshSpaces Sri Lanka", copyable: true },
      { label: "Contact Number", value: "+94 77 123 4567", copyable: true },
    ],
    note: "Share your payment receipt to clean@freshspaces.lk to confirm.",
  },
  "Cheque": {
    title: "Cheque Payment",
    subtitle: "Make your cheque payable to the details below and deliver to our Nugegoda office.",
    fields: [
      { label: "Payable To", value: "FreshSpaces Sri Lanka (Pvt) Ltd", copyable: true },
      { label: "Delivery Address", value: "12/A, High Level Road, Nugegoda", copyable: true },
      { label: "Office Hours", value: "Mon – Sat, 8:00am – 5:30pm", copyable: false },
    ],
  },
  "Cash": {
    title: "Cash Payment",
    subtitle: "Cash payments are accepted at our office or arranged with our service team.",
    fields: [
      { label: "Office Address", value: "12/A, High Level Road, Nugegoda", copyable: true },
      { label: "Office Hours", value: "Mon – Fri: 8:00am – 6:00pm", copyable: false },
      { label: "Saturday", value: "8:00am – 1:00pm", copyable: false },
      { label: "Contact", value: "+94 77 123 4567", copyable: true },
    ],
    note: "Always request an official receipt from our team upon payment.",
  },
  "Monthly Invoice": {
    title: "Monthly Invoice",
    subtitle: "Corporate clients receive a consolidated monthly invoice with full service breakdown.",
    fields: [
      { label: "Applications Email", value: "clean@freshspaces.lk", copyable: true },
      { label: "Required", value: "Company Reg. No. + Business Name", copyable: false },
      { label: "Payment Terms", value: "Net 30 days from invoice date", copyable: false },
      { label: "Processing Time", value: "2 – 3 business days", copyable: false },
    ],
  },
  "Online Banking": {
    title: "Online Banking",
    subtitle: "Log in to your internet banking portal and transfer to our account using the details below.",
    fields: [
      { label: "Bank", value: "Commercial Bank of Ceylon", copyable: false },
      { label: "Account Name", value: "FreshSpaces Sri Lanka (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "8001 2345 6789 0", copyable: true },
      { label: "Branch Code", value: "053", copyable: true },
      { label: "Reference", value: "Your Name + Invoice No.", copyable: false },
    ],
    note: "Send your transaction confirmation to clean@freshspaces.lk after transfer.",
  },
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="min-w-0">
        <p className="text-gray-400 text-xs mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium break-all">{value}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: copied ? "#C5A88022" : "rgba(197,168,128,0.18)" }}
        title="Copy to clipboard"
      >
        {copied
          ? <Check size={14} className="text-green-400" />
          : <Copy size={14} style={{ color: "#C5A880" }} />
        }
      </button>
    </div>
  );
}

function StaticField({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
    >
      <p className="text-gray-400 text-xs mb-0.5">{label}</p>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}

interface PaymentModalProps {
  method: string;
  onClose: () => void;
}

export function PaymentModal({ method, onClose }: PaymentModalProps) {
  const detail = paymentDetails[method];
  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(26,32,30,0.93)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#1A201E" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">
              Payment Details
            </p>
            <h3 className="text-white">{detail.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-3">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{detail.subtitle}</p>

          {detail.fields.map((field) =>
            field.copyable ? (
              <CopyField key={field.label} label={field.label} value={field.value} />
            ) : (
              <StaticField key={field.label} label={field.label} value={field.value} />
            )
          )}

          {detail.note && (
            <div
              className="rounded-xl px-4 py-3 mt-2"
              style={{ backgroundColor: "rgba(197,168,128,0.1)", borderLeft: "3px solid #C5A880" }}
            >
              <p className="text-gray-300 text-xs leading-relaxed">{detail.note}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #C5A880, #C5A880)" }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
