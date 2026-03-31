"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Enjinia Desarrollos",
    title: "Proyectos integrales de arquitectura e industria.",
    subtitle: "Desarrollamos junto a CASA NAVE barrios, viviendas, galpones y naves industriales desde el diseño hasta la entrega.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Empresas", href: "/empresas" }, { label: "Desarrollos" }],
    desc: {
      overline: "La empresa",
      title: "Del proyecto a la llave.",
      text: "Enjinia Desarrollos impulsa proyectos arquitectónicos e inmobiliarios integrales en conjunto con el estudio CASA NAVE. Abordamos el ciclo completo: planificación, diseño, financiamiento, construcción y comercialización.",
      text2: "Desarrollamos desde barrios residenciales hasta naves industriales. Cada proyecto combina criterio de negocio con calidad constructiva.",
    },
    projects: [
      { type: "Residencial", title: "Barrios y viviendas", desc: "Desarrollo de conjuntos habitacionales, urbanizaciones y viviendas individuales con criterio de proyecto integral.", img: "/images/unit-desarrollos.jpg" },
      { type: "Industrial", title: "Naves y galpones", desc: "Diseño y construcción de espacios productivos, logísticos y de almacenamiento optimizados para la operación.", img: "/images/project-3.jpg" },
      { type: "Comercial", title: "Proyectos mixtos", desc: "Desarrollos de uso mixto, centros de servicios y espacios comerciales de escala.", img: "/images/project-4.jpg" },
    ],
    studio: {
      overline: "CASA NAVE",
      title: "El estudio de diseño.",
      text: "CASA NAVE es el estudio de arquitectura y diseño integrado al grupo. Responsable de la conceptualización, el proyecto ejecutivo y la dirección de obra de cada desarrollo.",
    },
    cta: { btn: "Consultar desarrollo" },
  },
  en: {
    overline: "Enjinia Desarrollos",
    title: "Integral architecture and industrial projects.",
    subtitle: "We develop with CASA NAVE neighborhoods, housing, warehouses and industrial buildings from design to delivery.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Companies", href: "/empresas" }, { label: "Developments" }],
    desc: {
      overline: "The company",
      title: "From project to handover.",
      text: "Enjinia Desarrollos drives integral architectural and real estate projects together with CASA NAVE studio. We address the full cycle: planning, design, financing, construction and sales.",
      text2: "We develop from residential neighborhoods to industrial buildings. Each project combines business criteria with construction quality.",
    },
    projects: [
      { type: "Residential", title: "Neighborhoods & housing", desc: "Development of housing complexes, urbanizations and individual homes with an integral project approach.", img: "/images/unit-desarrollos.jpg" },
      { type: "Industrial", title: "Industrial buildings", desc: "Design and construction of productive, logistics and storage spaces optimized for operations.", img: "/images/project-3.jpg" },
      { type: "Commercial", title: "Mixed-use projects", desc: "Mixed-use developments, service centers and commercial spaces at scale.", img: "/images/project-4.jpg" },
    ],
    studio: {
      overline: "CASA NAVE",
      title: "The design studio.",
      text: "CASA NAVE is the architecture and design studio integrated into the group. Responsible for the conceptualization, executive project and site management of each development.",
    },
    cta: { btn: "Enquire development" },
  },
};

export default function DesarrollosPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/unit-desarrollos.jpg"
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
              <p className="text-base text-zinc-500 leading-relaxed">{c.desc.text2}</p>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div className="relative h-96 lg:h-[520px] overflow-hidden bg-zinc-100">
                <Image src="/images/project-4.jpg" alt="Desarrollos" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-white/5">
            {c.projects.map((p, i) => (
              <AnimateInView key={p.title} delay={i * 0.1}>
                <div className="group bg-[#0a0a0a] hover:bg-[#111] transition-colors p-0 overflow-hidden">
                  <div className="relative h-56">
                    <Image src={p.img} alt={p.title} fill className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 block mb-1">{p.type}</span>
                      <h3 className="font-display text-xl font-bold text-white leading-snug">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* CASA NAVE */}
      <section className="bg-zinc-50 py-24 lg:py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateInView delay={0.1}>
              <div className="relative h-80 overflow-hidden bg-zinc-200">
                <Image src="/images/proyecto-hero.jpg" alt="CASA NAVE" fill className="object-cover" sizes="50vw" />
              </div>
            </AnimateInView>
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-zinc-300" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.studio.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-6">{c.studio.title}</h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-8">{c.studio.text}</p>
              <Link href={`/${locale}/contacto?tipo=desarrollo`} className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">
                {c.cta.btn}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateInView>
          </div>
        </div>
      </section>
    </>
  );
}
