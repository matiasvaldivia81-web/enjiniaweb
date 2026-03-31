"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "El grupo",
    title: "Un ecosistema empresarial para proyectos reales.",
    subtitle: "Cuatro unidades especializadas que operan de forma independiente y se complementan para dar respuesta a proyectos de construcción, industria y logística.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Grupo Enjinia" }],
    about: {
      overline: "Qué es Enjinia",
      title: "Capacidades conectadas.",
      text: "Grupo Enjinia es un ecosistema empresarial que integra cuatro unidades especializadas. Cada una opera de manera independiente con foco en su área, y todas se articulan para dar respuesta integral a proyectos de construcción, industria y logística.",
      text2: "No somos una empresa de servicios genéricos. Cada unidad tiene capacidad técnica propia, equipos especializados y procesos definidos. La integración es el diferencial.",
    },
    positioning: {
      overline: "Posicionamiento",
      title: "Cuatro ejes. Una propuesta.",
      items: [
        { number: "01", label: "Ejecución", desc: "Obras civiles e industriales con capacidad técnica propia. Equipos, procesos y experiencia en terreno." },
        { number: "02", label: "Abastecimiento", desc: "Importación directa de productos, maquinaria y soluciones. Catálogo propio y fuentes verificadas." },
        { number: "03", label: "Desarrollo", desc: "Proyectos arquitectónicos e inmobiliarios integrales. Desde el diseño hasta la entrega de la llave." },
        { number: "04", label: "Optimización", desc: "Tecnología aplicada a la gestión, el control y la operación en construcción e industria." },
      ],
    },
    units: {
      overline: "Las empresas",
      title: "Cuatro unidades. Un ecosistema.",
      items: [
        { name: "Enjinia Construcciones", tag: "Ejecución", desc: "Obras civiles, naves industriales, galpones, infraestructura, mantenimiento y licitaciones.", href: "/empresas/construcciones", img: "/images/unit-construcciones.jpg" },
        { name: "Enjinia Importador", tag: "Abastecimiento", desc: "Catálogo de productos, maquinaria y soluciones para construcción, industria y logística.", href: "/empresas/importador", img: "/images/unit-importador.jpg" },
        { name: "Enjinia Desarrollos", tag: "Desarrollo", desc: "Proyectos integrales desarrollados junto a CASA NAVE. Barrios, viviendas y naves industriales.", href: "/empresas/desarrollos", img: "/images/unit-desarrollos.jpg" },
        { name: "Enjinia Digital", tag: "Optimización", desc: "Automatización, seguimiento y soluciones digitales para construcción, industria y logística.", href: "/empresas/digital", img: "/images/unit-digital.jpg" },
      ],
      cta: "Ver empresa",
    },
    cta: {
      title: "¿Tenés un proyecto?",
      subtitle: "Contanos qué necesitás y te respondemos con una propuesta concreta.",
      btn: "Contactar",
    },
  },
  en: {
    overline: "The group",
    title: "A business ecosystem for real projects.",
    subtitle: "Four specialized units that operate independently and complement each other to address construction, industry and logistics projects.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Grupo Enjinia" }],
    about: {
      overline: "What is Enjinia",
      title: "Connected capabilities.",
      text: "Grupo Enjinia is a business ecosystem integrating four specialized units. Each operates independently with focus on its area, and all work together to provide comprehensive answers for construction, industry and logistics projects.",
      text2: "We are not a generic services company. Each unit has its own technical capacity, specialized teams and defined processes. Integration is the differentiator.",
    },
    positioning: {
      overline: "Positioning",
      title: "Four pillars. One proposition.",
      items: [
        { number: "01", label: "Execution", desc: "Civil and industrial works with in-house technical capacity. Teams, processes and field experience." },
        { number: "02", label: "Procurement", desc: "Direct import of products, machinery and solutions. Own catalogue and verified sources." },
        { number: "03", label: "Development", desc: "Integral architectural and real estate projects. From design to key handover." },
        { number: "04", label: "Optimization", desc: "Technology applied to management, control and operations in construction and industry." },
      ],
    },
    units: {
      overline: "The companies",
      title: "Four units. One ecosystem.",
      items: [
        { name: "Enjinia Construcciones", tag: "Execution", desc: "Civil works, industrial buildings, warehouses, infrastructure, maintenance and tenders.", href: "/empresas/construcciones", img: "/images/unit-construcciones.jpg" },
        { name: "Enjinia Importador", tag: "Procurement", desc: "Product catalogue, machinery and solutions for construction, industry and logistics.", href: "/empresas/importador", img: "/images/unit-importador.jpg" },
        { name: "Enjinia Desarrollos", tag: "Development", desc: "Integral projects developed with CASA NAVE. Neighborhoods, housing and industrial buildings.", href: "/empresas/desarrollos", img: "/images/unit-desarrollos.jpg" },
        { name: "Enjinia Digital", tag: "Optimization", desc: "Automation, tracking and digital solutions for construction, industry and logistics.", href: "/empresas/digital", img: "/images/unit-digital.jpg" },
      ],
      cta: "View company",
    },
    cta: {
      title: "Have a project?",
      subtitle: "Tell us what you need and we'll respond with a concrete proposal.",
      btn: "Contact us",
    },
  },
};

export default function GrupoEnijniaPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/grupo-hero.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* About */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-zinc-300" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.about.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-8">
                {c.about.title}
              </h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-4">{c.about.text}</p>
              <p className="text-base text-zinc-500 leading-relaxed">{c.about.text2}</p>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div className="relative h-80 lg:h-[480px] overflow-hidden bg-zinc-100">
                <Image src="/images/proyecto-hero.jpg" alt="Grupo Enjinia" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-zinc-50 py-24 lg:py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-300" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.positioning.overline}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight">{c.positioning.title}</h2>
          </AnimateInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-zinc-200">
            {c.positioning.items.map((item, i) => (
              <AnimateInView key={item.number} delay={i * 0.1}>
                <div className="pt-8 pb-10 lg:pr-8 border-b border-zinc-200 lg:border-b-0 lg:border-r last:border-r-0">
                  <span className="text-xs font-mono text-zinc-300 tracking-widest block mb-6">{item.number}</span>
                  <h3 className="font-display text-xl font-semibold text-zinc-900 mb-3">{item.label}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Units */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">{c.units.overline}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight">{c.units.title}</h2>
          </AnimateInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {c.units.items.map((unit, i) => (
              <AnimateInView key={unit.name} delay={i * 0.1}>
                <div className="group bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300 p-7 flex flex-col h-full min-h-[360px]">
                  <div className="relative h-36 mb-5 overflow-hidden bg-zinc-900">
                    <Image src={unit.img} alt={unit.name} fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" sizes="25vw" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-2">{unit.tag}</span>
                  <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">{unit.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1 mb-4">{unit.desc}</p>
                  <Link href={`/${locale}${unit.href}`} className="inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors group/link">
                    {c.units.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />
                  </Link>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateInView>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-4">{c.cta.title}</h2>
            <p className="text-base text-zinc-500 mb-8 max-w-md mx-auto">{c.cta.subtitle}</p>
            <Link href={`/${locale}/contacto`} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">
              {c.cta.btn}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
