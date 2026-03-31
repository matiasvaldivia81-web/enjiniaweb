"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";

const unitImages = [
  "/images/unit-construcciones.jpg",
  "/images/unit-importador.jpg",
  "/images/unit-desarrollos.jpg",
  "/images/unit-digital.jpg",
];

const unitHrefs = [
  "/empresas/construcciones",
  "/empresas/importador",
  "/empresas/desarrollos",
  "/empresas/digital",
];

export default function UnitsSection() {
  const t = useTranslations("home.units");
  const locale = useLocale();

  const items = [
    {
      name: t("items.0.name"),
      tag: t("items.0.tag"),
      desc: t("items.0.desc"),
      detail: t("items.0.detail"),
    },
    {
      name: t("items.1.name"),
      tag: t("items.1.tag"),
      desc: t("items.1.desc"),
      detail: t("items.1.detail"),
    },
    {
      name: t("items.2.name"),
      tag: t("items.2.tag"),
      desc: t("items.2.desc"),
      detail: t("items.2.detail"),
    },
    {
      name: t("items.3.name"),
      tag: t("items.3.tag"),
      desc: t("items.3.desc"),
      detail: t("items.3.detail"),
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateInView className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              {t("overline")}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t("title")}
          </h2>
        </AnimateInView>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {items.map((item, i) => (
            <AnimateInView key={item.name} delay={i * 0.1}>
              <div className="group bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300 p-8 flex flex-col h-full min-h-[480px]">
                {/* Image */}
                <div className="relative h-44 mb-6 overflow-hidden bg-zinc-900">
                  <Image
                    src={unitImages[i]}
                    alt={item.name}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
                  {item.tag}
                </span>

                {/* Name */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 tracking-tight leading-snug">
                  {item.name}
                </h3>

                {/* Desc */}
                <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                  {item.detail}
                </p>

                {/* CTA */}
                <Link
                  href={`/${locale}${unitHrefs[i]}`}
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-white/40 hover:text-white transition-colors group/link mt-2"
                >
                  {t("cta")}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
