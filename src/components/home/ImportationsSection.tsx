"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";

const categoryImages = [
  "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=400&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=400&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e12f38?w=400&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
];

export default function ImportationsSection() {
  const t = useTranslations("home.importations");
  const locale = useLocale();

  const categories = [
    { name: t("categories.0.name"), tag: t("categories.0.tag") },
    { name: t("categories.1.name"), tag: t("categories.1.tag") },
    { name: t("categories.2.name"), tag: t("categories.2.tag") },
    { name: t("categories.3.name"), tag: t("categories.3.tag") },
    { name: t("categories.4.name"), tag: t("categories.4.tag") },
    { name: t("categories.5.name"), tag: t("categories.5.tag") },
    { name: t("categories.6.name"), tag: t("categories.6.tag") },
    { name: t("categories.7.name"), tag: t("categories.7.tag") },
  ];

  return (
    <section className="bg-[#0a0a0a] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateInView className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
                  {t("overline")}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                {t("title")}
              </h2>
              <p className="text-base text-white/50 max-w-lg">
                {t("subtitle")}
              </p>
            </div>
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={`/${locale}/importaciones`}
                className="border border-white/20 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors"
              >
                {t("cta1")}
              </Link>
              <button className="flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors">
                <Download className="w-4 h-4" strokeWidth={1.5} />
                {t("cta2")}
              </button>
            </div>
          </div>
        </AnimateInView>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 mb-10">
          {categories.map((cat, i) => (
            <AnimateInView key={cat.name} delay={i * 0.05}>
              <Link
                href={`/${locale}/importaciones#${cat.tag.toLowerCase()}`}
                className="group relative bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300 overflow-hidden block"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-44">
                  <Image
                    src={categoryImages[i]}
                    alt={cat.name}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>

                {/* Text */}
                <div className="p-4">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-1.5">
                    {cat.tag}
                  </span>
                  <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                    {cat.name}
                  </h3>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>

        {/* Bottom CTAs */}
        <AnimateInView className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/importaciones`}
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-7 py-3.5 hover:bg-zinc-100 transition-colors"
          >
            {t("cta1")}
          </Link>
          <button className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-7 py-3.5 hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4" strokeWidth={1.5} />
            {t("cta2")}
          </button>
          <Link
            href={`/${locale}/contacto?tipo=importacion`}
            className="inline-flex items-center gap-2 text-white/50 text-sm font-medium px-7 py-3.5 hover:text-white transition-colors group"
          >
            {t("cta3")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </AnimateInView>
      </div>
    </section>
  );
}
