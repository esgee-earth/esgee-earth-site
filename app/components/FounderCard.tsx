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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col h-full text-center backdrop-blur-sm">
      {/* Photo + Name + Role */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden bg-white/5 border border-brand-teal-bright/30">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="text-[12px] font-medium text-brand-teal-bright uppercase tracking-wide">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-white/70 min-h-[84px]">
        {description}
      </p>

      {/* Highlight + LinkedIn */}
      <div className="mt-2 flex flex-col items-center">
        {highlight && (
          <p className="text-sm font-semibold text-brand-teal-bright">
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
              border border-brand-teal-bright/30
              bg-brand-teal-bright/10
              text-[11px] font-medium text-brand-teal-bright
              hover:bg-brand-teal-bright/20
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
