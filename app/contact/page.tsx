export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12 md:py-16">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
        Get in touch
      </h1>

      <p className="text-sm md:text-base text-slate-600 mb-8">
        Share a bit about your SME or supply-chain context. We usually start with a
        20–30 minute call to understand what you&apos;re being asked for, what data
        you already have, and whether ESGee Earth is a good fit.
      </p>

      <form className="space-y-5" method="post">
        <FormField label="Name" name="name" required />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Organisation" name="organisation" />
        <FormSelect
          label="Which best describes you?"
          name="type"
          options={[
            "SME",
            "Supplier",
            "Corporate / Buyer",
            "Bank / Financier",
            "Advisor / Consultant",
            "Community / Ecosystem partner",
            "Other",
          ]}
        />
        <FormTextarea
          label="What are you currently being asked for?"
          name="message"
          placeholder="E.g., our buyers asked for carbon data and we’re not sure where to start; or our bank requested basic ESG information."
        />

        <button
          type="submit"
          className="w-full md:w-auto rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-700">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/60"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options = [],
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-700">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/60"
      >
        <option value="">Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-700">
        {label}
      </label>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/60"
      />
    </div>
  );
}

