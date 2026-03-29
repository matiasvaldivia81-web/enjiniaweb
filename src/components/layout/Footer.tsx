import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const companies = [
    { key: "construcciones", href: "/empresas/construcciones" },
    { key: "importador", href: "/empresas/importador" },
    { key: "desarrollos", href: "/empresas/desarrollos" },
    { key: "digital", href: "/empresas/digital" },
  ];

  const links = [
    { key: "importaciones", href: "/importaciones" },
    { key: "proyectos", href: "/proyectos" },
    { key: "soluciones", href: "/soluciones" },
    { key: "catalogos", href: "/catalogos" },
    { key: "recursos", href: "/recursos" },
    { key: "contacto", href: "/contacto" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-xs font-normal tracking-widest uppercase text-zinc-500 block leading-none mb-0.5">
                Grupo
              </span>
              <span className="font-display font-bold text-xl tracking-tight">
                ENJINIA
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contacto@grupoenjinia.com"
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                contacto@grupoenjinia.com
              </a>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              {t("footer.companies")}
            </h3>
            <ul className="flex flex-col gap-3">
              {companies.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    Enjinia {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              {t("footer.links")}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              {t("footer.legal")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={`/${locale}/privacidad`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terminos`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Grupo Enjinia. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-zinc-600">grupoenjinia.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
