"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState(""); // NEW: who they are (SME, buyer, etc.)
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const to = "hello@esgee.earth"; // change if needed

    const subject = encodeURIComponent(
      `ESGee Earth pilot / enquiry from ${name || "SME contact"}`
    );

    const bodyLines = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Company: ${company || "-"}`,
      `Type: ${type || "-"}`, // NEW: include dropdown value
      "",
      "Message:",
      message || "-",
      "",
      "----",
      "Sent via ESGee Earth contact form",
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;

    // Open user's email client with prefilled details
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[70vh] px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3 text-left md:text-center">
          <div className="flex md:justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                Contact
              </span>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Get in touch about pilots, collaborations or questions.
          </h1>

          <p className="text-sm md:text-[14px] text-slate-700 max-w-2xl mx-auto">
            Fill in the details below and your email client will open with
            everything prefilled. You can review and send it as a normal email.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Company / organisation (optional)
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              placeholder="Your SME / organisation name"
            />
          </div>

          {/* NEW: Who they are */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              You are a…
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              required
            >
              <option value="">Select one</option>
              <option value="SME">SME</option>
              <option value="Corporate buyer">Corporate buyer</option>
              <option value="Supplier">Supplier</option>
              <option value="NGO / non-profit">NGO / non-profit</option>
              <option value="Government / public sector">
                Government / public sector
              </option>
              <option value="Student / researcher">Student / researcher</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              How can we help?
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 min-h-[140px]"
              placeholder="Tell us a bit about your SME, your buyers, and what you’re looking for."
              required
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
            >
              Send
            </button>

            <p className="text-[11px] text-slate-500">
              This will open your email client with the details filled in. No
              data is stored. If your email client doesn't open, you can email
              us directly at hello@esgee.earth.
            </p>
          </div>
        </form>

        {/* Direct mailto fallback */}
        <p className="text-[11px] text-slate-500 text-center">
          Prefer to write your own email?{" "}
          <a
            href="mailto:hello@esgee.earth"
            className="text-brand-teal font-medium hover:underline"
          >
            Email hello@esgee.earth
          </a>
        </p>
      </div>
    </div>
  );
}
