// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-14">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
        Get in touch
      </h1>
      <p className="text-sm md:text-base text-slate-600 mb-8">
        Share a bit about your organisation and what you&apos;re trying to
        solve. We usually start with a 30–45 minute conversation to understand
        your context and explore whether ESGee Earth is a good fit.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
        {/* 
          You can later connect this form to:
          - a server action
          - an API route
          - Formspree / Getform / etc.
        */}
        <form className="space-y-4" method="post">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700/60"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700/60"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Organisation
            </label>
            <input
              name="organisation"
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700/60"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              What support are you looking for?
            </label>
            <select
              name="supportType"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700/60"
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="sme-esg-carbon">
                SME / supplier – ESG & carbon data
              </option>
              <option value="corporate-scope3">
                Corporate – supplier / Scope 3 data
              </option>
              <option value="finance">
                Bank / investor – SME portfolio data
              </option>
              <option value="community">
                Community / ecosystem collaboration
              </option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Briefly describe your context
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700/60"
              placeholder="For example: where you are based, what pressures you’re facing (buyers, banks, regulators), and what you hope to improve."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
          >
            Send
          </button>
        </form>

        <p className="mt-4 text-[11px] text-slate-500">
          Note: We&apos;ll only use your details to respond to your enquiry.
        </p>
      </div>
    </div>
  );
}

