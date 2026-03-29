"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "@/components/ui/AnimateInView";

export default function IndustriesSection() {
  const t = useTranslations("home.industries");

  const items = [
    t("items.0"),
    t("items.1"),
    t("items.2"),
    t("items.3"),
    t("items.4"),
    t("items.5"),
    t("items.6"),
  ];

  return (
    <section className="bg-zinc-50 py-28 lg:py-36 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateInView className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-zinc-300" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">
              {t("overline")}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
        </AnimateInView>

        {/* Industry tags */}
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <AnimateInView key={item} delay={i * 0.07} direction="none">
              <div className="group border border-zinc-200 hover:border-zinc-900 bg-white hover:bg-zinc-900 transition-all duration-200 cursor-default">
                <span className="block px-6 py-3.5 text-sm font-medium text-zinc-700 group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
