"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Package } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Enjinia Importador",
    title: "Productos, maquinaria y soluciones importadas.",
    subtitle: "Seleccionamos y comercializamos lo que tu proyecto necesita. Catálogo propio, abastecimiento directo y soluciones a medida.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Empresas", href: "/empresas" }, { label: "Importador" }],
    desc: {
      overline: "La empresa",
      title: "Abastecimiento directo.",
      text: "Enjinia Importador selecciona, importa y comercializa productos, maquinaria y soluciones para construcción, industria y logística. Trabajamos con fuentes directas en mercados internacionales y ofrecemos un catálogo propio con productos verificados.",
      text2: "Además del catálogo estándar, desarrollamos soluciones de importación a medida para proyectos específicos con requerimientos técnicos particulares.",
    },
    categories: {
      overline: "Categorías",
      title: "Qué importamos.",
      items: [
        { name: "Galpones y estructuras", img: "/images/cat-estructuras.jpg", desc: "Estructuras metálicas prefabricadas, sistemas de cubierta y revestimiento." },
        { name: "Chapas y paneles", img: "/images/cat-chapas.jpg", desc: "Chapas galvanizadas, prelacadas y paneles sandwich para construcción industrial." },
        { name: "Maquinaria", img: "/images/cat-maquinaria.jpg", desc: "Equipos para construcción, movimiento de tierras y procesamiento industrial." },
        { name: "Hormigón", img: "/images/cat-hormigon.jpg", desc: "Insumos y aditivos para hormigón de alta performance." },
        { name: "Logística interna", img: "/images/cat-logistica.jpg", desc: "Sistemas de movimiento interno, estanterías y equipos de depósito." },
        { name: "Energía solar", img: "/images/cat-solar.jpg", desc: "Paneles fotovoltaicos, inversores y sistemas de almacenamiento." },
        { name: "Seguridad industrial", img: "/images/cat-seguridad.jpg", desc: "Equipos de protección personal y sistemas de seguridad para obra e industria." },
        { name: "Equipamiento industrial", img: "/images/cat-equipamiento.jpg", desc: "Equipos, herramientas y soluciones para procesos industriales." },
      ],
    },
    custom: {
      overline: "Importación a medida",
      title: "¿No encontrás lo que buscás?",
      text: "Desarrollamos procesos de importación a medida para productos y maquinaria específicos. Si tenés un requerimiento técnico particular, lo buscamos, lo verificamos y te lo traemos.",
      steps: ["Especificación técnica", "Búsqueda de fuentes", "Verificación de calidad", "Logística y aduana", "Entrega en destino"],
    },
    cta: { btn: "Consultar importación" },
  },
  en: {
    overline: "Enjinia Importador",
    title: "Imported products, machinery and solutions.",
    subtitle: "We select and supply what your project needs. Own catalogue, direct procurement and custom solutions.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Companies", href: "/empresas" }, { label: "Importer" }],
    desc: {
      overline: "The company",
      title: "Direct procurement.",
      text: "Enjinia Importador selects, imports and distributes products, machinery and solutions for construction, industry and logistics. We work with direct sources in international markets and offer our own catalogue of verified products.",
      text2: "Beyond the standard catalogue, we develop custom import solutions for specific projects with particular technical requirements.",
    },
    categories: {
      overline: "Categories",
      title: "What we import.",
      items: [
        { name: "Buildings & structures", img: "/images/cat-estructuras.jpg", desc: "Prefabricated steel structures, roofing and cladding systems." },
        { name: "Sheets & panels", img: "/images/cat-chapas.jpg", desc: "Galvanized, pre-painted sheets and sandwich panels for industrial construction." },
        { name: "Machinery", img: "/images/cat-maquinaria.jpg", desc: "Equipment for construction, earthmoving and industrial processing." },
        { name: "Concrete", img: "/images/cat-hormigon.jpg", desc: "Inputs and additives for high-performance concrete." },
        { name: "Internal logistics", img: "/images/cat-logistica.jpg", desc: "Internal movement systems, racking and warehouse equipment." },
        { name: "Solar energy", img: "/images/cat-solar.jpg", desc: "Photovoltaic panels, inverters and storage systems." },
        { name: "Industrial safety", img: "/images/cat-seguridad.jpg", desc: "Personal protective equipment and safety systems for site and industry." },
        { name: "Industrial equipment", img: "/images/cat-equipamiento.jpg", desc: "Equipment, tools and solutions for industrial processes." },
      ],
    },
    custom: {
      overline: "Custom importation",
      title: "Can't find what you need?",
      text: "We develop custom import processes for specific products and machinery. If you have a particular technical requirement, we source it, verify it and bring it to you.",
      steps: ["Technical specification", "Source search", "Quality verification", "Logistics & customs", "Delivery"],
    },
    cta: { btn: "Enquire importation" },
  },
};

export default function ImportadorPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/unit-importador.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* Description */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-zinc-300" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.desc.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-8">{c.desc.title}</h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-4">{c.desc.text}</p>
              <p className="text-base text-zinc-500 leading-relaxed mb-8">{c.desc.text2}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/${locale}/importaciones`} className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors">
                  {locale === "es" ? "Ver catálogo" : "View catalogue"}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <button className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors">
                  <Download className="w-4 h-4" strokeWidth={1.5} />
                  {locale === "es" ? "Descargar catálogo" : "Download catalogue"}
                </button>
              </div>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div className="relative h-96 lg:h-[520px] overflow-hidden bg-zinc-100">
                <Image src="/images/cat-logistica.jpg" alt="Importaciones" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">{c.categories.overline}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight">{c.categories.title}</h2>
          </AnimateInView>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
            {c.categories.items.map((cat, i) => (
              <AnimateInView key={cat.name} delay={i * 0.06}>
                <Link href={`/${locale}/importaciones`} className="group bg-[#0a0a0a] hover:bg-[#111] transition-colors block overflow-hidden">
                  <div className="relative h-40">
                    <Image src={cat.img} alt={cat.name} fill className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" sizes="25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{cat.name}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{cat.desc}</p>
                  </div>
                </Link>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Custom import */}
      <section className="bg-zinc-50 py-24 lg:py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-zinc-300" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.custom.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-6">{c.custom.title}</h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-8">{c.custom.text}</p>
              <Link href={`/${locale}/contacto?tipo=importacion`} className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">
                {c.cta.btn}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateInView>
            <AnimateInView delay={0.1}>
              <div className="flex flex-col gap-0">
                {c.custom.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-6 py-5 border-b border-zinc-200 last:border-0">
                    <span className="text-xs font-mono text-zinc-300 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium text-zinc-700">{step}</span>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>
    </>
  );
}
