"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";

export default function ContactCTA() {
  const t = useTranslations("home.contact");
  const locale = useLocale();

  const options = [
    { label: t("options.0.label"), href: `/${locale}/contacto?tipo=obra` },
    { label: t("options.1.label"), href: `/${locale}/contacto?tipo=importacion` },
    { label: t("options.2.label"), href: `/${locale}/contacto?tipo=desarrollo` },
    { label: t("options.3.label"), href: `/${locale}/contacto?tipo=digital` },
  ];

  return (
    <section className="bg-[#0a0a0a] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateInView className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              {t("overline")}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-base text-white/50 max-w-lg">{t("subtitle")}</p>
        </AnimateInView>

        {/* Option grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {options.map((option, i) => (
            <AnimateInView key={option.label} delay={i * 0.1}>
              <Link
                href={option.href}
                className="group flex flex-col justify-between bg-[#0a0a0a] hover:bg-[#161616] p-8 h-36 border border-white/0 hover:border-white/10 transition-all duration-300"
              >
                <span className="text-xs font-mono text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-end justify-between">
                  <span className="font-display text-lg font-semibold text-white/80 group-hover:text-white transition-colors tracking-tight">
                    {option.label}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>

        {/* Direct contact */}
        <AnimateInView delay={0.4} className="mt-12 flex items-center gap-6 flex-wrap">
          <span className="text-sm text-white/30">
            {locale === "es" ? "O contactanos directamente:" : "Or contact us directly:"}
          </span>
          <a
            href="mailto:contacto@grupoenjinia.com"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors border-b border-white/10 hover:border-white/40 pb-px"
          >
            contacto@grupoenjinia.com
          </a>
        </AnimateInView>
      </div>
    </section>
  );
}
