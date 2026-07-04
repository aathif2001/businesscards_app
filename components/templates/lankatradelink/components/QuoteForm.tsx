'use client';
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const AUTO_MESSAGE = "I would like to place a wholesale order with Lanka Trade Link. Please send me your product catalogue and pricing.";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: AUTO_MESSAGE,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/tenantdata/lankatradelink/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="quote">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
              <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">
                Place an Order
              </span>
            </div>
            <h2 style={{ color: "#3D2314" }} className="mb-4">Request a Wholesale Quote</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Send us your requirements and our sales team will respond within a few hours with a customised price list and minimum order details.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Free product catalogue on request",
                "Bulk pricing for all categories",
                "Next-day island-wide delivery",
                "Dedicated account manager",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} style={{ color: "#D4A359" }} />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl p-8 border border-amber-100" style={{ backgroundColor: "#F7F3EB" }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#D4A359" }}>
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 style={{ color: "#3D2314" }} className="mb-2">Order Request Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you, {form.name || "valued partner"}. Our sales team will be in touch shortly.
                </p>
                <button onClick={() => setSubmitted(false)} style={{ color: "#D4A359" }} className="mt-6 text-sm underline hover:opacity-80">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#3D2314" }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Suresh Perera"
                      className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none"
                      style={{ borderColor: "#e5e7eb" }}
                      onFocus={(e) => (e.target.style.borderColor = "#D4A359")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#3D2314" }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@business.lk"
                      className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none"
                      style={{ borderColor: "#e5e7eb" }}
                      onFocus={(e) => (e.target.style.borderColor = "#D4A359")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#3D2314" }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+94 77 000 0000"
                    className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => (e.target.style.borderColor = "#D4A359")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#3D2314" }}>Your Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none resize-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => (e.target.style.borderColor = "#D4A359")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
                  <p className="text-gray-400 text-xs mt-1">Pre-filled — add your specific product requirements.</p>
                </div>
                {error && (
                  <div className="p-3 rounded bg-red-50 border border-red-200 text-red-600 text-xs">⚠️ {error}</div>
                )}
                <button type="submit" disabled={loading}
                  style={{ backgroundColor: loading ? "#9ca3af" : "#D4A359" }}
                  className="w-full text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm disabled:cursor-not-allowed">
                  {loading ? '⏳ Sending...' : 'Send Order Request'}
                </button>
                <p className="text-gray-400 text-xs text-center">Our sales team responds within a few hours on business days.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
