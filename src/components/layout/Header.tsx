"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { key: "grupo", href: "/grupo-enjinia" },
  {
    key: "empresas",
    href: "/empresas",
    children: [
      { key: "construcciones", href: "/empresas/construcciones" },
      { key: "importador", href: "/empresas/importador" },
      { key: "desarrollos", href: "/empresas/desarrollos" },
      { key: "digital", href: "/empresas/digital" },
    ],
  },
  { key: "importaciones", href: "/importaciones" },
  { key: "proyectos", href: "/proyectos" },
  { key: "soluciones", href: "/soluciones" },
  { key: "catalogos", href: "/catalogos" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const isHome = pathname === `/${locale}` || pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur-md border-b border-zinc-100"
    : isHome
    ? "bg-transparent"
    : "bg-white border-b border-zinc-100";

  const textColor = scrolled || !isHome ? "text-zinc-900" : "text-white";
  const logoColor = scrolled || !isHome ? "text-zinc-900" : "text-white";

  const otherLocale = locale === "es" ? "en" : "es";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={`font-display font-bold text-xl tracking-tight transition-colors ${logoColor}`}
          >
            <span className="text-xs font-normal tracking-widest uppercase opacity-60 block leading-none">
              Grupo
            </span>
            ENJINIA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setDropdown(item.key)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${textColor} hover:opacity-70`}
                  >
                    {t(item.key)}
                    <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <AnimatePresence>
                    {dropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-white border border-zinc-100 shadow-lg"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={`/${locale}${child.href}`}
                            className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                          >
                            {t(child.key)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`text-sm font-medium transition-colors ${textColor} hover:opacity-70`}
                >
                  {t(item.key)}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={localePath}
              className={`text-xs font-medium tracking-widest uppercase transition-colors ${textColor} hover:opacity-70`}
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className={`text-sm font-medium px-5 py-2.5 transition-all duration-200 ${
                scrolled || !isHome
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-100"
              }`}
            >
              {t("cotizar")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((item) => (
                <div key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="block py-3 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-l border-zinc-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={`/${locale}${child.href}`}
                          className="block py-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <Link
                  href={localePath}
                  className="text-xs font-medium tracking-widest uppercase text-zinc-500"
                >
                  {otherLocale.toUpperCase()}
                </Link>
                <Link
                  href={`/${locale}/contacto`}
                  className="bg-black text-white text-sm font-medium px-5 py-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("cotizar")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
