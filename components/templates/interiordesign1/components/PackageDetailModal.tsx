'use client';
import { X } from "lucide-react";

interface PackageField {
  label: string;
  value: string;
}

interface PackageDetail {
  title: string;
  subtitle: string;
  note?: string;
  fields: PackageField[];
}

export const packageDetails: Record<string, PackageDetail> = {
  "Consultation": {
    title: "Design Consultation",
    subtitle: "A focused 90-minute session with one of our senior designers to discuss your vision, preferences, and project scope.",
    fields: [
      { label: "Duration", value: "90 minutes" },
      { label: "Format", value: "In-person or virtual" },
      { label: "Deliverable", value: "Written design brief summary" },
      { label: "Fee", value: "Complimentary (first session)" },
    ],
  },
  "Room Design": {
    title: "Room Design Package",
    subtitle: "A complete design solution for a single room — from concept to final styling guide.",
    fields: [
      { label: "Includes", value: "Space plan, mood board, material palette" },
      { label: "Visualization", value: "2D floor plan + 3D render" },
      { label: "Furniture Guidance", value: "Sourcing list with supplier contacts" },
      { label: "Revisions", value: "2 rounds included" },
    ],
    note: "Pricing varies based on room size and complexity. Quoted per project.",
  },
  "Full Home Design": {
    title: "Full Home Turnkey Design",
    subtitle: "Our most comprehensive offering — we manage everything from concept to final styling, coordinating all trades and suppliers.",
    fields: [
      { label: "Scope", value: "All rooms + exterior if applicable" },
      { label: "Management", value: "Full site supervision included" },
      { label: "Visualization", value: "Full 3D walkthrough before execution" },
      { label: "Timeline", value: "3 – 6 months depending on size" },
    ],
    note: "A dedicated project manager is assigned to every full home project.",
  },
  "Commercial Design": {
    title: "Commercial Interior Design",
    subtitle: "Brand-aligned interior design for offices, boutiques, restaurants, hotels, and other commercial spaces.",
    fields: [
      { label: "Scope", value: "Full space planning & brand integration" },
      { label: "Compliance", value: "Building regulations review" },
      { label: "Signage & Branding", value: "Environmental graphics guidance" },
      { label: "Timeline", value: "Custom — based on sq. footage" },
    ],
    note: "We have worked with over 30 commercial clients across Sri Lanka.",
  },
  "Renovation Support": {
    title: "Renovation Design Support",
    subtitle: "We provide design direction and site supervision for clients undergoing renovation or refurbishment work.",
    fields: [
      { label: "Design Review", value: "Assessment of existing conditions" },
      { label: "Coordination", value: "Liaison with your contractors" },
      { label: "Specification", value: "Finish & material spec sheets" },
      { label: "Site Visits", value: "Scheduled during key milestones" },
    ],
  },
  "3D Visualization": {
    title: "3D Visualization Package",
    subtitle: "Photorealistic 3D renders and mood boards to visualize your space before any work begins.",
    fields: [
      { label: "Output", value: "HD renders (min. 4 views per room)" },
      { label: "Mood Board", value: "Digital + printable format" },
      { label: "Revisions", value: "3 rounds of adjustments" },
      { label: "Turnaround", value: "7 – 10 business days" },
    ],
    note: "3D visualization is included in all our Room Design and Full Home packages.",
  },
  "Furniture Sourcing": {
    title: "Furniture & Décor Sourcing",
    subtitle: "We handle the procurement of all furniture, lighting, art, and accessories — saving you time and ensuring quality.",
    fields: [
      { label: "Suppliers", value: "Curated local & international network" },
      { label: "Delivery", value: "Coordination & tracking included" },
      { label: "Quality Check", value: "Inspection upon arrival" },
      { label: "Service Fee", value: "Percentage of total procurement value" },
    ],
  },
  "Virtual Consultation": {
    title: "Virtual Consultation",
    subtitle: "A convenient online design session for clients outside Colombo or those who prefer a remote-first approach.",
    fields: [
      { label: "Platform", value: "Zoom / Google Meet / WhatsApp Video" },
      { label: "Duration", value: "60 – 90 minutes" },
      { label: "Deliverable", value: "Follow-up design notes & recommendations" },
      { label: "Availability", value: "Mon – Sat, 9am – 6pm" },
    ],
    note: "Virtual consultations are available island-wide and internationally.",
  },
};

interface PackageDetailModalProps {
  packageName: string;
  onClose: () => void;
}

export function PackageDetailModal({ packageName, onClose }: PackageDetailModalProps) {
  const detail = packageDetails[packageName];
  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(30,20,10,0.92)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#2C3531" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">
              Package Details
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

          {detail.fields.map((field) => (
            <div
              key={field.label}
              className="rounded-lg px-4 py-3"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <p className="text-gray-400 text-xs mb-0.5">{field.label}</p>
              <p className="text-white text-sm">{field.value}</p>
            </div>
          ))}

          {detail.note && (
            <div
              className="rounded-lg px-4 py-3 mt-2"
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
          <a href="#consult">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C5A880" }}
            >
              Book a Free Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
