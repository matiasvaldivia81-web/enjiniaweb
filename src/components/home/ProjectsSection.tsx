"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";

const projectImages = [
  { src: "/images/project-1.jpg", alt: "Obra industrial" },
  { src: "/images/project-2.jpg", alt: "Estructura metálica" },
  { src: "/images/project-3.jpg", alt: "Nave industrial" },
  { src: "/images/project-4.jpg", alt: "Edificio comercial" },
  { src: "/images/project-5.jpg", alt: "Instalaciones industriales" },
];

export default function ProjectsSection() {
  const t = useTranslations("home.projects");
  const locale = useLocale();

  const stats = [
    { value: t("stats.0.value"), label: t("stats.0.label") },
    { value: t("stats.1.value"), label: t("stats.1.label") },
    { value: t("stats.2.value"), label: t("stats.2.label") },
    { value: t("stats.3.value"), label: t("stats.3.label") },
  ];

  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateInView className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-300" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">
                {t("overline")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-base text-zinc-500 max-w-md">{t("subtitle")}</p>
          </div>
          <Link
            href={`/${locale}/proyectos`}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors group"
          >
            {t("cta")}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </AnimateInView>

        {/* Stats */}
        <AnimateInView className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-zinc-100 mb-14">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-8 text-center border-r border-zinc-100 last:border-r-0 sm:last:border-r-0"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 tracking-wide uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </AnimateInView>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Main large image */}
          <AnimateInView className="col-span-2 row-span-2">
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden bg-zinc-100">
              <Image
                src={projectImages[0].src}
                alt={projectImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </AnimateInView>

          {/* Small images */}
          {projectImages.slice(1).map((img, i) => (
            <AnimateInView key={img.src} delay={(i + 1) * 0.1}>
              <div className="relative h-[145px] sm:h-[196px] overflow-hidden bg-zinc-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
