"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const AUTO_MESSAGE = "Hi Lens & Light Studios, I would like to book a photography session. Please share your available dates and packages.";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: AUTO_MESSAGE });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/tenantdata/lensandlight/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="book">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
              <span style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase font-medium">Book a Session</span>
            </div>
            <h2 style={{ color: "#1A1A1A" }} className="mb-4">Let&apos;s Shoot Together</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Tell us about your project and we&apos;ll come back to you with a custom package. Weddings, portraits, commercial — we cover it all.</p>
            <div className="mt-8 space-y-3">
              {["48-hour sneak peek on every booking", "Full-resolution digital gallery delivery", "Custom albums and print packages available", "Licensed drone operator for aerial shots"].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} style={{ color: "#E5A96A" }} />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm p-8 border border-gray-100" style={{ backgroundColor: "#F3F3F4" }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E5A96A" }}>
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 style={{ color: "#1A1A1A" }} className="mb-2">Booking Request Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you, {form.name || "there"}. We&apos;ll be in touch with availability and packages shortly.</p>
                <button onClick={() => setSubmitted(false)} style={{ color: "#E5A96A" }} className="mt-6 text-sm underline hover:opacity-80">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{ name: "name", label: "Full Name *", placeholder: "e.g. Thilini Perera", type: "text", required: true },
                    { name: "email", label: "Email Address *", placeholder: "you@email.com", type: "email", required: true }].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-medium mb-1" style={{ color: "#1A1A1A" }}>{f.label}</label>
                      <input name={f.name} type={f.type} value={(form as Record<string, string>)[f.name]} onChange={handleChange} required={f.required} placeholder={f.placeholder}
                        className="w-full px-3 py-2.5 rounded-sm border text-gray-900 bg-white text-sm focus:outline-none"
                        style={{ borderColor: "#e5e7eb" }}
                        onFocus={e => (e.target.style.borderColor = "#E5A96A")}
                        onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#1A1A1A" }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+94 70 000 0000"
                    className="w-full px-3 py-2.5 rounded-sm border text-gray-900 bg-white text-sm focus:outline-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={e => (e.target.style.borderColor = "#E5A96A")}
                    onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#1A1A1A" }}>Your Enquiry</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full px-3 py-2.5 rounded-sm border text-gray-900 bg-white text-sm focus:outline-none resize-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={e => (e.target.style.borderColor = "#E5A96A")}
                    onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                </div>
                {error && <div className="p-3 rounded bg-red-50 border border-red-200 text-red-600 text-xs">⚠️ {error}</div>}
                <button type="submit" disabled={loading}
                  style={{ backgroundColor: loading ? "#9ca3af" : "#1A1A1A" }}
                  className="w-full text-white py-3 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm disabled:cursor-not-allowed">
                  {loading ? '⏳ Sending...' : 'Send Booking Request'}
                </button>
                <p className="text-gray-400 text-xs text-center">We respond within 24 hours with availability and custom packages.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
