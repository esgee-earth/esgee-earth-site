"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { HillsJourney } from "@/app/components/HillsJourney";
import { ScrollCrossfadeStack } from "@/app/components/ScrollCrossfadeStack";
import { GrowthPath } from "@/app/components/GrowthPath";
import { RootsBackdrop } from "@/app/components/RootsBackdrop";

/* ================= SKY PATTERNS LIBRARY =================
   Add a new entry here as regimes get documented. `status: "documented"`
   entries render fully; `status: "coming-soon"` entries render as a muted
   placeholder so the grid can grow without a redesign. Kept compact (p-4,
   tighter line count) since this whole card row now lives inside a single
   crossfade beat, which is clipped to one viewport tall. */
type SkyPattern = {
  name: string;
  localTerm?: string;
  note: string;
  tag: string;
  status: "documented" | "coming-soon";
};

const SKY_PATTERNS: SkyPattern[] = [
  {
    name: "Rain building over the hills",
    localTerm: "Hujan bukit",
    note: "It feels unusually hot but there's no signs of tall cloud towers here in the valley. But when rain started, it hit hard. And within minutes, our river overflowed. This case is under review against satellite records.",
    tag: "Under review",
    status: "documented",
  },
  {
    name: "Haze before a dry spell",
    note: "Not yet documented. We're gathering observations. But we're seeing the signs already (Aug 2026).",
    tag: "Coming soon",
    status: "coming-soon",
  },
    {
    name: "Wind shift before rain",
    note: "Not yet documented. We're gathering observations.",
    tag: "Coming soon",
    status: "coming-soon",
  },
];

export default function ClimateActionSabah() {
  const [note, setNote] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("A weather sign from " + (name || "a visitor"));
    const body = encodeURIComponent((name ? `From: ${name}\n\n` : "") + note);
    window.location.href = `mailto:hello@esgee.earth?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* ================= THE JOURNEY ================= */}
      <HillsJourney
        dawn={
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-xl text-center space-y-4">
              <p className="text-xs font-medium uppercase tracking-wide text-brand-monsoon">
                Climate Action Sabah
              </p>
              <h1 className="font-display text-2xl md:text-4xl font-medium text-brand-navy leading-snug">
                The hills have a way of telling you first.
              </h1>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Long before satellites, there were people watching the hills. In the
                highlands above Penampang, someone&rsquo;s always been reading the sky:
                the shape of a cloud, which way the wind turns before the rain does,
                which ridge goes dark first.
              </p>
            </div>
          </section>
        }
        hujan={
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-xl text-center space-y-4">
              <h2 className="font-display text-xl md:text-3xl font-medium text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                They call it <em>hujan bukit</em>. Hill rain.
              </h2>
              <p className="text-sm md:text-base text-white/85 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
                Rain that starts over the ridges, not over you. By the time you feel
                it, the water&rsquo;s already on its way down.
              </p>
            </div>
          </section>
        }
        flood={
          <ScrollCrossfadeStack
            beats={[
              <div key="a" className="max-w-xl text-center space-y-4">
                <p className="text-sm md:text-base text-white/85 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
                  It&rsquo;s the rain people trust least, and watch closest. <br /> A
                  storm can miss the village entirely and still flood it. <br /> The
                  hills fill first, gravity does the rest.
                </p>
              </div>,
              <div key="b" className="max-w-xl text-center space-y-4">
                <p className="text-base md:text-2xl font-medium text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                  How much warning that actually buys you is what we&rsquo;re still
                  learning.
                </p>
              </div>,
            ]}
          />
        }
        question={
          // One continuous crossfade, same sky throughout: the pivot question,
          // the Weather Detective line, the field-notebook intro with its
          // cards, then the contribute prompt with its form. Each beat is its
          // own complete moment, including the cards and the form themselves,
          // not just the headings.
          <ScrollCrossfadeStack
            beats={[
              <div key="a" className="max-w-xl text-center space-y-4">
                <p className="font-display text-xl md:text-3xl font-medium text-brand-navy leading-snug">
                  So we&rsquo;re asking: <br /><i>does the sky still keep its old promises?</i>
                </p>
              </div>,
              <div key="b" className="max-w-2xl text-center space-y-4">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  <em><b>Weather Detective</b></em> <br />is where we check these signs against
                  the data, <br />one case at a time. <br /> <br />
                  Every community reads the sky a little differently, <br />and
                  there&rsquo;s a lot still to learn.
                </p>
              </div>,
              <div key="c" id="sky-patterns" className="max-w-3xl w-full text-center space-y-16">
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-medium text-slate-900">
                    A field notebook, still being written.
                  </h2>
                  <p className="text-slate-700 text-sm mt-1 max-w-xl mx-auto">
                    Every sign someone&rsquo;s trusted to read the weather, and what
                    we&rsquo;re learning about the conditions behind it.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKY_PATTERNS.map((pattern) => (
                    <div
                      key={pattern.name}
                      className={
                        pattern.status === "documented"
                          ? "rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-4 text-left"
                          : "rounded-2xl border border-dashed border-slate-300 bg-white/60 backdrop-blur-sm p-4 text-left"
                      }
                    >
                      {pattern.localTerm && (
                        <p className="text-[11px] font-medium uppercase tracking-wide text-brand-teal mb-1">
                          {pattern.localTerm}
                        </p>
                      )}
                      <h3 className="font-display text-sm font-medium text-slate-900 mb-1.5">
                        {pattern.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-snug mb-2">{pattern.note}</p>
                      <p className="text-[11px] font-medium text-slate-400">{pattern.tag}</p>
                    </div>
                  ))}
                </div>
              </div>,
              <div key="d" id="contribute" className="max-w-md w-full text-center space-y-16">
                <div>
                  <h2 className="font-display text-lg md:text-2xl font-medium text-slate-900">
                    Know a sign of your own?
                  </h2>
                  <p className="text-slate-700 text-sm mt-1">
                    Not everyone watches the hills. Maybe your family reads the
                    ants, the river, the way the dogs get restless before a storm.
                    <br /> Tell us, wherever you&rsquo;re from.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-5 text-left">
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name (optional)"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
                    />
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      required
                      rows={2}
                      placeholder="e.g. when the ants move house, rain is coming"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-teal text-white text-sm font-medium px-4 py-2 hover:bg-brand-monsoon transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Share it
                    </button>
                  </form>
                </div>
              </div>,
            ]}
          />
        }
      />

      {/* ================= HOW THIS TOOK ROOT ================= */}
      <ScrollCrossfadeStack
        background={
          <>
            <div className="absolute inset-0 scene-roots" />
            <RootsBackdrop />
          </>
        }
        beats={[
          <div key="root-1" className="max-w-xl text-center space-y-10">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-slate-900">
              How this took root
            </h2>
            <div className="space-y-10">
              <p className="text-slate-700 leading-relaxed">
                Sabah&rsquo;s hills are as unpredictable as they are beautiful, and
                the same terrain that shelters so much of the state&rsquo;s
                biodiversity is what makes storms hard to forecast, which matters
                for early warning, for disaster planning, and for how Sabah plans
                its own growth.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Sabah has never stopped working to protect what it has. But
                conservation, development, and disaster planning are usually
                designed elsewhere and delivered inward, and the people who
                actually live inside this biosphere, who feel its weather and its
                risk daily, often end up as recipients of plans rather than
                partners in making them.
              </p>
            </div>
          </div>,
          <div key="root-2" className="max-w-xl text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-slate-900/40">
              How this took root
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Everyone lives inside the same atmosphere, but nobody experiences it
              the same way. What a hill village notices before a flood is
              different from what a coastal community feels, and different again
              from what a satellite sees. 
            </p>
            <p className="text-slate-700 leading-relaxed">
              All of it is knowledge, tested against
              real seasons and real years, and passed down for a reason. If it
              isn&rsquo;t written down somewhere, it fades with the people who
              carry it.
              </p>
          </div>,

          <div key="root-3" className="max-w-xl text-center space-y-6">
            <h2 className="hidden font-display text-2xl md:text-3xl font-medium text-slate-900">
              How this took root
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-900 leading-relaxed">
              That&rsquo;s why we started Digital Climate Storytelling, <br />the first of its
              kind in Malaysia.
            </p>
          </div>,

          <div key="root-4" className="max-w-xl text-center space-y-4">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-slate-900/90">
                The founding members
              </h2>
              <p className="text-xs italic text-slate-500 mt-1">The founding team</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
             We're a team of nature-loving scientists with a heart for sharing the hidden wonders of our world to the public.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Dr Marieanne (Mae), a climate scientist, has spent years in the forests and up in the atmosphere observing
              how the land and the atmosphere interact with each other.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Dr Firdaus (Fert), a soil scientist with UMK-TRaCe, has spent years with
              his hands in the ground on Sabah&rsquo;s east coast and the majestic forests of Royal Belum, Perak.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Dr Kumara, an entomologist and nature-based solutions expert with UMK Faculty of Agro-based Industry, has spent just as long paying attention to the insects that
              quietly hold this landscape together.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Between the three of us, soil, insects, and sky, 
              we&rsquo;re really just doing what we&rsquo;re
              asking everyone else to do:
            </p>
            <p className="text-slate-700 leading-relaxed">
              <i>Paying attention to the ground we actually stand on,
               <br />and trusting what it&rsquo;s been telling us all
              along.</i>
            </p>
          </div>,
        ]}
      />

      {/* ================= OUR JOURNEY ================= */}
      <section className="w-full bg-[#f7f5ec] px-4 md:px-6 py-20 md:py-28 space-y-16">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-slate-900">
            Our journey
          </h2>
          <GrowthPath />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-slate-700 leading-relaxed">
            As a young grassroots initiative, we are actively fostering relationships to connect and collaborate with local organisations to grow our community and impact.
          </p>
        </div>
      </section>

      {/* ================= FOLLOW + CREDIT ================= */}
      <section className="w-full bg-[#f7f5ec] px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-md mx-auto text-center space-y-4 pt-8 border-t border-slate-200">
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://instagram.com/climateactionsabah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline"
            >
              Instagram
            </a>
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Climate Action Sabah is supported by the{" "}
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
          </p>
        </div>
      </section>
    </>
  );
}
