'use client';
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const AUTO_MESSAGE = "I am interested in FreshSpaces commercial cleaning services and would like to schedule a free consultation.";

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
      const response = await fetch('/api/tenantdata/freshspaces/', {
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
    <section className="py-20 px-4 bg-white" id="quote">
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
            <h2 style={{ color: "#2C3531" }} className="mb-4">Request Your Free Quote</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tell us about your facility and our team will reach out within 24 hours with a customised cleaning plan and transparent pricing — no commitment required.
            </p>

            {/* Feature bullets */}
            <div className="mt-8 space-y-3">
              {[
                "Free site assessment",
                "Custom cleaning schedule",
                "100% eco-friendly products",
                "24/7 support team",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} style={{ color: "#C5A880" }} />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl p-8 border border-gray-100"
            style={{ backgroundColor: "#EFF1EE" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #C5A880, #C5A880)" }}>
                  <CheckCircle size={32} className="text-white" />
                </div>
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
                      placeholder="e.g. Chaminda Silva"
                      className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                      placeholder="you@company.com"
                      className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                    className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none transition-colors"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#2C3531" }}>
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border text-gray-900 bg-white text-sm focus:outline-none transition-colors resize-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                  style={{ background: loading ? "#4a5568" : "#C5A880" }}
                  className="w-full text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Sending...' : 'Submit Quote Request'}
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
