'use client';
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface PaymentField { label: string; value: string; copyable?: boolean; }
interface PaymentDetail { title: string; subtitle: string; note?: string; fields: PaymentField[]; }

export const paymentDetails: Record<string, PaymentDetail> = {
  "Bank Transfer": {
    title: "Bank Transfer",
    subtitle: "Transfer to our account and send proof to sales@lankatradelink.lk",
    fields: [
      { label: "Bank", value: "Hatton National Bank (HNB)", copyable: false },
      { label: "Branch", value: "Pettah", copyable: false },
      { label: "Account Name", value: "Lanka Trade Link (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "0023 4567 8901 234", copyable: true },
      { label: "Branch Code", value: "042", copyable: true },
      { label: "SWIFT / BIC", value: "HBLILKLX", copyable: true },
    ],
  },
  "Google Pay": {
    title: "Google Pay",
    subtitle: "Send payment to the GPay ID and include your order reference.",
    fields: [
      { label: "GPay ID", value: "lankatradelink@okaxis", copyable: true },
      { label: "Merchant Name", value: "Lanka Trade Link (Pvt) Ltd", copyable: true },
      { label: "Contact", value: "+94 11 4 567 890", copyable: true },
    ],
    note: "Screenshot confirmation and email to sales@lankatradelink.lk",
  },
  "Visa / Mastercard": {
    title: "Visa / Mastercard",
    subtitle: "Card payments processed by our accounts team. Call to arrange.",
    fields: [
      { label: "Accounts Team", value: "+94 11 4 567 890", copyable: true },
      { label: "Email", value: "sales@lankatradelink.lk", copyable: true },
      { label: "Working Hours", value: "Mon – Fri, 8:00am – 5:30pm", copyable: false },
    ],
    note: "Our team will process your card payment securely over the phone.",
  },
  "Cheque": {
    title: "Cheque Payment",
    subtitle: "Make cheques payable to Lanka Trade Link and deliver to our Pettah office.",
    fields: [
      { label: "Payable To", value: "Lanka Trade Link (Pvt) Ltd", copyable: true },
      { label: "Office Address", value: "150, 4th Cross Street, Pettah, Colombo 11", copyable: true },
      { label: "Office Hours", value: "Mon – Sat, 7:30am – 5:00pm", copyable: false },
    ],
  },
  "Cash": {
    title: "Cash Payment",
    subtitle: "Cash accepted at our Pettah warehouse or as Cash on Delivery for COD orders.",
    fields: [
      { label: "Office Address", value: "150, 4th Cross Street, Pettah, Colombo 11", copyable: true },
      { label: "COD Available", value: "Yes — for first 3 orders", copyable: false },
      { label: "Contact", value: "+94 11 4 567 890", copyable: true },
    ],
    note: "Always obtain an official receipt from our delivery team.",
  },
  "Monthly Invoice": {
    title: "Monthly Invoice (Net-30)",
    subtitle: "Available for established wholesale partners after initial period.",
    fields: [
      { label: "Applications Email", value: "sales@lankatradelink.lk", copyable: true },
      { label: "Required Docs", value: "Business Reg. + 3 months trading history", copyable: false },
      { label: "Payment Terms", value: "Net 30 days from invoice date", copyable: false },
      { label: "Processing Time", value: "3 – 5 business days", copyable: false },
    ],
  },
  "Online Banking": {
    title: "Online Banking",
    subtitle: "Transfer via your bank's internet banking portal using the details below.",
    fields: [
      { label: "Bank", value: "Hatton National Bank (HNB)", copyable: false },
      { label: "Account Name", value: "Lanka Trade Link (Pvt) Ltd", copyable: true },
      { label: "Account Number", value: "0023 4567 8901 234", copyable: true },
      { label: "Branch Code", value: "042", copyable: true },
      { label: "Reference", value: "Your Name + Order No.", copyable: false },
    ],
    note: "Email your transfer confirmation to sales@lankatradelink.lk",
  },
  "Apple Pay": {
    title: "Apple Pay",
    subtitle: "Send payment via Apple Pay and include your order reference.",
    fields: [
      { label: "Apple Pay ID", value: "lankatradelink@icloud.com", copyable: true },
      { label: "Merchant Name", value: "Lanka Trade Link (Pvt) Ltd", copyable: true },
      { label: "Contact", value: "+94 11 4 567 890", copyable: true },
    ],
    note: "Share your receipt to sales@lankatradelink.lk to confirm payment.",
  },
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(value).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); };
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
      <div className="min-w-0">
        <p className="text-gray-400 text-xs mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium break-all">{value}</p>
      </div>
      <button onClick={copy} className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: copied ? "#22c55e22" : "rgba(212,163,89,0.18)" }} title="Copy">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} style={{ color: "#D4A359" }} />}
      </button>
    </div>
  );
}

function StaticField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
      <p className="text-gray-400 text-xs mb-0.5">{label}</p>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}

export function PaymentModal({ method, onClose }: { method: string; onClose: () => void }) {
  const detail = paymentDetails[method];
  if (!detail) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(38,20,10,0.93)", backdropFilter: "blur(6px)" }}
      onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl overflow-hidden" style={{ backgroundColor: "#3D2314" }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <p style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Payment Details</p>
            <h3 className="text-white">{detail.title}</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <X size={18} className="text-white" />
          </button>
        </div>
        <div className="px-6 py-5 space-y-3">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{detail.subtitle}</p>
          {detail.fields.map((field) => field.copyable ? <CopyField key={field.label} label={field.label} value={field.value} /> : <StaticField key={field.label} label={field.label} value={field.value} />)}
          {detail.note && (
            <div className="rounded-xl px-4 py-3 mt-2" style={{ backgroundColor: "rgba(212,163,89,0.12)", borderLeft: "3px solid #D4A359" }}>
              <p className="text-gray-300 text-xs leading-relaxed">{detail.note}</p>
            </div>
          )}
        </div>
        <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <button onClick={onClose} className="w-full py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D4A359" }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
