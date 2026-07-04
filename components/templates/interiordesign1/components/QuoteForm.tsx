'use client';
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const AUTO_MESSAGE = "Hi, I would like to book a free design consultation.";

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
      const response = await fetch('/api/tenantdata/interiordesign1/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="consult">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
              <span style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium">
                Get Started
              </span>
            </div>
            <h2 style={{ color: "#2C3531" }} className="mb-4">Book a Free Consultation</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Share your project details and our design team will reach out within 24 hours to arrange
              a complimentary consultation — no commitment required.
            </p>

            {/* What to expect */}
            <div className="mt-8 space-y-3">
              {[
                "Initial brief discussion & vision alignment",
                "Site visit or virtual walkthrough",
                "Concept presentation & mood board",
                "Transparent quotation & timeline",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold"
                    style={{ backgroundColor: "#C5A880" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-xl p-8 border border-gray-100"
            style={{ backgroundColor: "#FAFAf8" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} style={{ color: "#C5A880" }} className="mx-auto mb-4" />
                <h3 style={{ color: "#2C3531" }} className="mb-2">Request Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you, {form.name || "valued client"}. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ color: "#C5A880" }}
                  className="mt-6 text-sm underline hover:opacity-80"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3531" }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Dilini Jayawardena"
                      className="w-full px-3 py-2.5 rounded border border-gray-200 text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                      style={{ borderColor: undefined }}
                      onFocus={(e) => e.target.style.borderColor = "#C5A880"}
                      onBlur={(e) => e.target.style.borderColor = ""}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3531" }}>
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-3 py-2.5 rounded border border-gray-200 text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                      onFocus={(e) => e.target.style.borderColor = "#C5A880"}
                      onBlur={(e) => e.target.style.borderColor = ""}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#2C3531" }}>
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className="w-full px-3 py-2.5 rounded border border-gray-200 text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                    onFocus={(e) => e.target.style.borderColor = "#C5A880"}
                    onBlur={(e) => e.target.style.borderColor = ""}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#2C3531" }}>
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2.5 rounded border border-gray-200 text-gray-900 bg-white text-sm focus:outline-none transition-colors resize-none"
                    onFocus={(e) => e.target.style.borderColor = "#C5A880"}
                    onBlur={(e) => e.target.style.borderColor = ""}
                  />
                  <p className="text-gray-400 text-xs mt-1">Pre-filled — feel free to add more details.</p>
                </div>

                {error && (
                  <div className="p-3 rounded bg-red-50 border border-red-200 text-red-600 text-xs">
                    ⚠️ {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: loading ? "#C5A880" : "#2C3531" }}
                  className="w-full text-white py-3 rounded hover:opacity-90 transition-opacity font-medium text-sm disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Sending...' : 'Book My Free Consultation'}
                </button>
                <p className="text-gray-400 text-xs text-center">
                  We&apos;ll respond within 24 hours. No commitment required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
