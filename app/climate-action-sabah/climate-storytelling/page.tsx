import { ArrowLeft, CloudSun, Map, Video } from "lucide-react";

/* Program ran July 2025 to February 2026. */
const RAN = "July 2025 to February 2026";

const BABAGON_VIDEO_URL =
  "https://3lgygfp8v2nfpeqq.public.blob.vercel-storage.com/MY-DigitalClimateStorytelling-SeedPod%20%282%29.mp4";

type Partner = { org: string; person?: string };

/* Fill in the remaining 5 as they're confirmed. */
const PARTNERS: (Partner | null)[] = [
  { org: "Ketua Kampung Babagon", person: "En. Monis Gimbun" },
  { org: "Ketua JKKK Kg Babagon", person: "En. Verus Peter Kuil" },
  { org: "Pengerusi Tagal Babagon", person: "En. Gidius Gonsuin" },
  { org: "Majlis Perbandaran Penampang", person: "Pn Noemi Dyena John Tren; Timbalan Presiden, Pn Lilian Loijon, Pn Centy Payne" },
  { org: "Unit Pemimpin Pembangunan Masyarakat (UPPM) Moyog", person: "En. Joseph Suleiman; Ketua UPPM" },
  { org: "Pejabat Perikanan Penampang", person: "En. Tony@Herman Anus; Pegawai Penguasa" },
  { org: "Gaya Teacher's College", person: "Dr Stephania Albert (Partner)" },
  { org: "Volunteers", person: "Jonis Jominin (UiTM Sabah), Nuradila Adriani (UiTM Sabah), Johnson Gabah (Kota Marudu)" },
  { org: "Out-of-district participants", person: "from Keningau and Nabawan" },
];

type Learning = { icon: typeof CloudSun; title: string; desc: string };

const LEARNINGS: Learning[] = [
  {
    icon: CloudSun,
    title: "Climate literacy",
    desc: "Climate overview and climate change concepts, and how the community already perceives them.",
  },
  {
    icon: Map,
    title: "Environmental mapping",
    desc: "Hands-on mapping on Restor.eco.",
  },
  {
    icon: Video,
    title: "Storytelling skills",
    desc: "Video shooting and editing.",
  },
];

export default function Babagon() {
  return (
    <main className="w-full px-4 md:px-6 py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">

        <a
          href="/climate-action-sabah"
          className="inline-flex items-center gap-1 text-xs text-brand-teal hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Climate Action Sabah
        </a>

        {/* ================= HEADER ================= */}
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-brand-teal">
            Digital Climate Storytelling @ Babagon
          </p>
          <h1 className="font-display text-2xl md:text-3xl font-medium text-slate-900 leading-snug">
            Where Climate Action Sabah started
          </h1>
          <p className="text-slate-700 leading-relaxed">
            Babagon Digital Climate Storytelling was our first project: a hands-on
            program pairing climate science with video storytelling, run with youth
            from Kg. Babagon in Upper Moyog, Penampang, from {RAN}.
          </p>
        </header>

        {/* ================= VIDEO ================= */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-video">
          <video controls preload="metadata" className="w-full h-full object-contain">
            <source src={BABAGON_VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* ================= AT A GLANCE ================= */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 p-4 text-center">
            <p className="font-display text-2xl text-brand-navy">10</p>
            <p className="text-xs text-slate-500 mt-1">Project participants<br />Event participants: 40</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-center">
            <p className="font-display text-2xl text-brand-navy">18&ndash;36</p>
            <p className="text-xs text-slate-500 mt-1">Age range</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-center col-span-2 md:col-span-1">
            <p className="font-display text-lg text-brand-navy leading-snug">Kg. Babagon</p>
            <p className="text-xs text-slate-500 mt-1">Upper Moyog, Penampang, Sabah</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-center col-span-2 md:col-span-1">
            <p className="font-display text-lg text-brand-navy leading-snug">KadazanDusun</p>
            <p className="text-xs text-slate-500 mt-1">Indigenous community</p>
          </div>
        </section>

        {/* ================= WHAT THEY LEARNED ================= */}
        <section className="space-y-4">
          <h2 className="font-display text-lg font-medium text-slate-900">
            What they learned
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LEARNINGS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="font-display text-sm font-medium text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= WHO WAS THERE ================= */}
        <section className="space-y-3">
          <h2 className="font-display text-lg font-medium text-slate-900">
            Who was there
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PARTNERS.map((p, i) =>
              p ? (
                <div key={i} className="rounded-xl border border-slate-200 p-3">
                  <p className="text-sm font-medium text-slate-900">{p.org}</p>
                  {p.person && <p className="text-xs text-slate-500 mt-0.5">{p.person}</p>}
                </div>
              ) : (
                <div
                  key={i}
                  className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 flex items-center justify-center"
                >
                  <p className="text-xs text-slate-400">Add partner</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* ================= CREDIT ================= */}
        <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">
          Funded by the{" "}
          <a
            href="https://www.britishcouncil.org/study-work-abroad/alumni-uk/alumni-opportunities-initiatives/climate-action-grants/ca-update/malaysia2#:~:text=Malaysia%20Innovating%20Indigenous%20Conservation%3A%20Digital&text=Malaysia%20Innovating%20Indigenous%20Conservation%3A%20Digital,Resilience%20and%20a%20Just%20Transition"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            British Council Alumni UK Climate Action Grant
          </a>
          , developed with{" "}
          <a
            href="https://trace.umk.edu.my"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            UMK-TRaCe
          </a>.
          Special thanks to JKKK Kg. Sarapung for connecting us with the committee members of Kg. Babagon.
        </p>

      </div>
    </main>
  );
}
