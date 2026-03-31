"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type Props = {
  overline?: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  dark?: boolean;
  imageAlt?: string;
};

export default function PageHero({
  overline,
  title,
  subtitle,
  image,
  breadcrumbs,
  dark = true,
  imageAlt = "",
}: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex flex-col justify-end bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20 text-xs">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs font-medium tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs font-medium tracking-widest uppercase text-white/60">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {overline && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-white/30" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              {overline}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base text-white/60 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
