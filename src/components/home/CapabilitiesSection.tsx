"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimateInView from "@/components/ui/AnimateInView";

export default function CapabilitiesSection() {
  const t = useTranslations("home.capabilities");

  const items = [
    { number: t("items.0.number"), label: t("items.0.label"), desc: t("items.0.desc") },
    { number: t("items.1.number"), label: t("items.1.label"), desc: t("items.1.desc") },
    { number: t("items.2.number"), label: t("items.2.label"), desc: t("items.2.desc") },
    { number: t("items.3.number"), label: t("items.3.label"), desc: t("items.3.desc") },
  ];

  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateInView className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-zinc-300" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">
              {t("overline")}
            </span>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-base lg:text-lg text-zinc-500 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </AnimateInView>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-zinc-100">
          {items.map((item, i) => (
            <AnimateInView key={item.number} delay={i * 0.1}>
              <div className="pt-8 pb-10 lg:pr-8 border-b border-zinc-100 lg:border-b-0 lg:border-r lg:border-zinc-100 last:border-r-0">
                <span className="text-xs font-mono text-zinc-300 tracking-widest block mb-6">
                  {item.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-zinc-900 mb-3 tracking-tight">
                  {item.label}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
