"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function ClimateActionSabah() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <main className="w-full px-4 md:px-6 py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ================= HERO VIDEO ================= */}
        <section className="relative w-full h-[60vh] rounded-3xl overflow-hidden shadow-md">

          <video
            ref={videoRef}
            src="https://3lgygfp8v2nfpeqq.public.blob.vercel-storage.com/MY-DigitalClimateStorytelling-withmusic.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={toggleSound}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6 pointer-events-none">
            <div className="space-y-3">
              <h1 className="text-white text-3xl md:text-5xl font-semibold">
                Climate Action Sabah
              </h1>
              <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
                Where climate data meets communities, stories, and real-world action.
              </p>
            </div>
          </div>

          {/* Sound toggle ICON */}
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60 transition"
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </button>

        </section>

        {/* ================= NARRATIVE ================= */}
        <section className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-lg text-cyan-800">
            Climate change is often discussed in models, reports, and disclosures.
            But its impacts are lived, experienced, and remembered by communities.
          </p>

          <p className="text-slate-600">
            Through our grassroots initiative in Sabah, we collaborate with local suburban communities in Penampang to document,
            understand, and respond to climate realities on the ground; connecting
            science, storytelling, and action.
          </p>

          <p className="text-slate-600">
            This work forms the foundation for future climate initiatives, including
            nature-based solutions, carbon projects, and community-led resilience.
          </p>

          {/* subtle divider */}
          <div className="w-12 h-[1px] bg-slate-200 mx-auto mt-14"></div>

          {/* Grant */}
          <p className="text-sm text-slate-500 mt-10 max-w-3xl mx-auto">
            This work is supported by the British Council Alumni UK Climate Action Grant (2025), enabling community-based climate engagement in Sabah.
          </p>

          {/* Collaboration */}
          <p className="text-sm text-slate-500 mt-2 max-w-3xl mx-auto">
            Developed in collaboration with researchers and contributors from{" "}
            <a
              href="https://www.umk.edu.my"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Universiti Malaysia Kelantan (UMK)
            </a>{" "}
            and{" "}
            <a
              href="https://trace.umk.edu.my"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              UMK-TRaCe
            </a>.
          </p>
        </section>

        {/* subtle divider */}
        <div className="w-12 h-[1px] bg-slate-200 mx-auto mt-10 mb-10"></div>

        {/* ================= SOCIAL ================= */}
        <section className="text-center space-y-4">
          <p className="text-base font-semibold text-slate-500">
            Follow the journey
          </p>

          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://instagram.com/climateactionsabah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/climateactionsabah"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-emerald-600 hover:underline"
            >
              TikTok
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
