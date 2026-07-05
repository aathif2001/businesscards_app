"use client";
import { useState } from "react";
import { X, Copy, Check } from "lucide-react";

const paymentDetails: Record<string, { title: string; subtitle: string; fields: { label: string; value: string; copyable: boolean }[]; note?: string }> = {
  "Bank Transfer": {
    title: "Bank Transfer",
    subtitle: "Transfer the 50% retainer to secure your date. Use your full name and shoot date as the reference.",
    fields: [
      { label: "Bank Name", value: "Sampath Bank PLC", copyable: false },
      { label: "Account Name", value: "Lens & Light Studios (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "1037 2300 5678", copyable: true },
      { label: "Branch", value: "Moratuwa Branch", copyable: false },
      { label: "SWIFT Code", value: "BSAMLKLX", copyable: true },
    ],
    note: "Please email your transfer receipt to shoot@lensandlight.lk to confirm your booking.",
  },
  "Google Pay": {
    title: "Google Pay",
    subtitle: "Send the retainer via Google Pay to our registered number.",
    fields: [
      { label: "GPay Number", value: "+94 70 111 2233", copyable: true },
      { label: "Registered Name", value: "Lens & Light Studios", copyable: false },
    ],
    note: "Include your name and shoot type in the GPay note.",
  },
  "Visa / Mastercard": {
    title: "Visa / Mastercard",
    subtitle: "Card payments are accepted in-studio on the day of your session.",
    fields: [
      { label: "Accepted Cards", value: "Visa, Mastercard", copyable: false },
      { label: "Payment Point", value: "In-studio only", copyable: false },
      { label: "Studio Location", value: "12, Rawathawatta, Moratuwa", copyable: false },
    ],
  },
  "Cash Deposit": {
    title: "Cash Deposit",
    subtitle: "Cash deposits are accepted at our studio by appointment.",
    fields: [
      { label: "Location", value: "12, Rawathawatta, Moratuwa", copyable: false },
      { label: "Hours", value: "Mon–Sat 9AM–6PM", copyable: false },
    ],
  },
  "Online Banking": {
    title: "Online Banking",
    subtitle: "Transfer via internet banking using the details below.",
    fields: [
      { label: "Bank", value: "Sampath Bank PLC", copyable: false },
      { label: "Account Name", value: "Lens & Light Studios (Pvt) Ltd", copyable: true },
      { label: "Account No.", value: "1037 2300 5678", copyable: true },
    ],
    note: "Email your confirmation slip to shoot@lensandlight.lk after transfer.",
  },
  "Session Deposit": {
    title: "Session Deposit / Retainer",
    subtitle: "All bookings require a 50% non-refundable retainer to hold your date. The balance is due on shoot day.",
    fields: [
      { label: "Retainer", value: "50% of agreed package fee", copyable: false },
      { label: "Balance", value: "Due on shoot day", copyable: false },
      { label: "Validity", value: "Booking held for 72hrs after quote", copyable: false },
    ],
    note: "Retainers are non-refundable but transferable (reschedule within 6 months) with 7-days notice.",
  },
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div><p className="text-gray-500 text-xs mb-0.5">{label}</p><p className="text-white text-sm font-medium break-all">{value}</p></div>
      <button onClick={copy} className="shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: copied ? "#22c55e22" : "rgba(229,169,106,0.15)" }} title="Copy">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} style={{ color: "#4c4c4e" }} />}
      </button>
    </div>
  );
}

function StaticField({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
      <p className="text-white text-sm font-medium">{value}</p>
    </div>
  );
}

export function PaymentModal({ method, onClose }: { method: string; onClose: () => void }) {
  const detail = paymentDetails[method];
  if (!detail) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(13,13,13,0.93)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div className="w-full max-w-md rounded-sm overflow-hidden" style={{ backgroundColor: "#000000" }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div>
            <p style={{ color: "#4c4c4e" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Payment Details</p>
            <h3 className="text-white">{detail.title}</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors">
            <X size={16} className="text-white" />
          </button>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{detail.subtitle}</p>
          {detail.fields.map(field => field.copyable
            ? <CopyField key={field.label} label={field.label} value={field.value} />
            : <StaticField key={field.label} label={field.label} value={field.value} />
          )}
          {detail.note && (
            <div className="rounded-sm px-4 py-3 mt-3" style={{ backgroundColor: "rgba(229,169,106,0.1)", borderLeft: "3px solid #4c4c4e" }}>
              <p className="text-gray-400 text-xs leading-relaxed">{detail.note}</p>
            </div>
          )}
        </div>
        <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button onClick={onClose} className="w-full py-2.5 rounded-sm text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: "#4c4c4e" }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
