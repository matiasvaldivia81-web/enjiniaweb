"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { FileText, BookOpen, ArrowRight } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";

export default function ResourcesSection() {
  const t = useTranslations("home.resources");
  const locale = useLocale();

  return (
    <section className="bg-white py-28 lg:py-36 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
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
            <p className="text-base text-zinc-500 leading-relaxed mb-8 max-w-md">
              {t("subtitle")}
            </p>
            <Link
              href={`/${locale}/recursos`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-px hover:text-zinc-500 hover:border-zinc-500 transition-colors group"
            >
              {t("cta")}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </AnimateInView>

          {/* Resource cards */}
          <AnimateInView delay={0.1}>
            <div className="flex flex-col gap-0 border border-zinc-100">
              {[
                {
                  icon: FileText,
                  title: locale === "es" ? "Catálogos de productos" : "Product catalogues",
                  sub: locale === "es" ? "PDF descargable" : "Downloadable PDF",
                },
                {
                  icon: FileText,
                  title: locale === "es" ? "Fichas técnicas" : "Technical sheets",
                  sub: locale === "es" ? "Especificaciones detalladas" : "Detailed specifications",
                },
                {
                  icon: BookOpen,
                  title: locale === "es" ? "Documentación" : "Documentation",
                  sub: locale === "es" ? "Guías y referencias" : "Guides and references",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 p-6 border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-400 transition-colors">
                    <item.icon className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-zinc-900 mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-xs text-zinc-400">{item.sub}</div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors shrink-0"
                    strokeWidth={1.5}
                  />
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
