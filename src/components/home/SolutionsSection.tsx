"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "@/components/ui/AnimateInView";

export default function SolutionsSection() {
  const t = useTranslations("home.solutions");

  const stages = [
    { label: t("stages.0.label"), desc: t("stages.0.desc") },
    { label: t("stages.1.label"), desc: t("stages.1.desc") },
    { label: t("stages.2.label"), desc: t("stages.2.desc") },
    { label: t("stages.3.label"), desc: t("stages.3.desc") },
  ];

  return (
    <section className="bg-white py-28 lg:py-36 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-300" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">
                {t("overline")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed max-w-md">
              {t("subtitle")}
            </p>
          </AnimateInView>

          {/* Right: Process stages */}
          <div className="flex flex-col gap-0">
            {stages.map((stage, i) => (
              <AnimateInView key={stage.label} delay={i * 0.1}>
                <div className="flex items-start gap-6 py-7 border-b border-zinc-100 last:border-b-0 group">
                  <span className="text-xs font-mono text-zinc-200 tracking-widest mt-0.5 shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-base font-semibold text-zinc-900 mb-1 tracking-tight">
                        {stage.label}
                      </h3>
                      <p className="text-sm text-zinc-500">{stage.desc}</p>
                    </div>
                    <div className="w-5 h-5 border border-zinc-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-zinc-300 transition-colors">
                      <div className="w-1.5 h-1.5 bg-zinc-200 group-hover:bg-zinc-900 transition-colors" />
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
