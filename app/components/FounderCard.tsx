import Image from "next/image";

/* ============= FOUNDERS ================= */
type FounderCardProps = {
  name: string;
  role: string;
  description: string;
  highlight?: string;
  imageSrc: string;
  linkedin?: string;
};

function FounderCard({
  name,
  role,
  description,
  highlight,
  imageSrc,
  linkedin,

}: FounderCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm flex flex-col h-full text-center">
      {/* Photo + Name + Role */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden bg-slate-100">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          <p className="text-[12px] font-medium text-brand-teal">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-700 min-h-[84px]">
        {description}
      </p>

      {/* Highlight + LinkedIn */}
      <div className="mt-2 flex flex-col items-center">
        {highlight && (
          <p className="text-sm font-semibold text-brand-teal">
            {highlight}
          </p>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-4 py-1.5
              mt-4
              rounded-full
              bg-emerald-50
              text-[11px] font-medium text-emerald-700
              shadow-sm
              hover:bg-emerald-100
              transition
            "
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default FounderCard;
