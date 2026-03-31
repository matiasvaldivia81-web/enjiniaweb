"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Enjinia Construcciones",
    title: "Obras civiles e industriales con foco en ejecución.",
    subtitle: "Capacidad técnica propia para obras de escala. Infraestructura, naves, galpones y proyectos llave en mano.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Empresas", href: "/empresas" }, { label: "Construcciones" }],
    desc: {
      overline: "La empresa",
      title: "Ejecución como diferencial.",
      text: "Enjinia Construcciones desarrolla obras civiles e industriales con capacidad técnica propia. Nos especializamos en proyectos de infraestructura productiva: naves, galpones, plantas y obras industriales con alta demanda de precisión y cumplimiento.",
      text2: "Trabajamos con empresas, organismos públicos y desarrolladores. Participamos en licitaciones y ejecutamos contratos llave en mano.",
    },
    services: {
      overline: "Servicios",
      title: "Qué construimos.",
      items: [
        { title: "Naves industriales", desc: "Estructura metálica o de hormigón. Diseño, fundaciones, cubierta, instalaciones y terminaciones." },
        { title: "Galpones y depósitos", desc: "Espacios de almacenamiento y logística con criterios funcionales y normativos." },
        { title: "Obras civiles", desc: "Infraestructura vial, pluvial, saneamiento, pavimentación y obras de arte." },
        { title: "Mantenimiento industrial", desc: "Programas de mantenimiento preventivo y correctivo para plantas e instalaciones." },
        { title: "Proyectos llave en mano", desc: "Gestión integral desde el proyecto ejecutivo hasta la habilitación y entrega." },
        { title: "Licitaciones públicas", desc: "Presentación y ejecución de contratos con organismos nacionales y provinciales." },
      ],
    },
    features: [
      "Ingeniería propia",
      "Capacidad de escala",
      "Cumplimiento de plazos",
      "Gestión de subcontratistas",
      "Control de calidad en obra",
      "Habilitaciones y permisos",
    ],
    cta: { title: "Cotizar obra", href: "/contacto?tipo=obra", btn: "Cotizar obra" },
  },
  en: {
    overline: "Enjinia Construcciones",
    title: "Civil and industrial works with execution focus.",
    subtitle: "In-house technical capacity for large-scale works. Infrastructure, industrial buildings, warehouses and turnkey projects.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Companies", href: "/empresas" }, { label: "Construction" }],
    desc: {
      overline: "The company",
      title: "Execution as a differentiator.",
      text: "Enjinia Construcciones develops civil and industrial works with in-house technical capacity. We specialize in productive infrastructure projects: industrial buildings, warehouses, plants and industrial works requiring high precision and compliance.",
      text2: "We work with companies, public organizations and developers. We participate in tenders and execute turnkey contracts.",
    },
    services: {
      overline: "Services",
      title: "What we build.",
      items: [
        { title: "Industrial buildings", desc: "Steel or concrete structure. Design, foundations, roofing, installations and finishes." },
        { title: "Warehouses & storage", desc: "Storage and logistics spaces built to functional and regulatory standards." },
        { title: "Civil works", desc: "Road, drainage, sanitation, paving infrastructure and civil structures." },
        { title: "Industrial maintenance", desc: "Preventive and corrective maintenance programs for plants and facilities." },
        { title: "Turnkey projects", desc: "Full management from executive project to commissioning and handover." },
        { title: "Public tenders", desc: "Submission and execution of contracts with national and provincial organizations." },
      ],
    },
    features: [
      "In-house engineering",
      "Scale capacity",
      "On-time delivery",
      "Subcontractor management",
      "On-site quality control",
      "Permits and approvals",
    ],
    cta: { title: "Quote a work", href: "/contacto?tipo=obra", btn: "Quote a work" },
  },
};

export default function ConstruccionesPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/unit-construcciones.jpg"
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
              <div className="grid grid-cols-2 gap-3">
                {c.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-zinc-400 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-600">{f}</span>
                  </div>
                ))}
              </div>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div className="relative h-96 lg:h-[520px] overflow-hidden bg-zinc-100">
                <Image src="/images/project-1.jpg" alt="Obras civiles" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">{c.services.overline}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight">{c.services.title}</h2>
          </AnimateInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {c.services.items.map((s, i) => (
              <AnimateInView key={s.title} delay={i * 0.08}>
                <div className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors min-h-[200px]">
                  <span className="text-xs font-mono text-white/20 tracking-widest block mb-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="bg-white py-24 lg:py-32 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              {locale === "es" ? "Proyectos ejecutados" : "Completed projects"}
            </h2>
          </AnimateInView>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
            {["/images/project-2.jpg", "/images/project-3.jpg", "/images/project-4.jpg", "/images/project-5.jpg"].map((img, i) => (
              <AnimateInView key={img} delay={i * 0.1}>
                <div className="relative h-52 overflow-hidden bg-zinc-100">
                  <Image src={img} alt={`Proyecto ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                </div>
              </AnimateInView>
            ))}
          </div>
          <AnimateInView>
            <Link href={`/${locale}/proyectos`} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors group">
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <AnimateInView>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">{c.cta.title}</h2>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <Link href={`/${locale}${c.cta.href}`} className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 text-sm font-medium hover:bg-zinc-100 transition-colors shrink-0">
              {c.cta.btn}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
