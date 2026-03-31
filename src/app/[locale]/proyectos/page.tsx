"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Proyectos",
    title: "Obras ejecutadas.",
    subtitle: "Proyectos de construcción, industria y logística que evidencian nuestra capacidad técnica y operativa.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Proyectos" }],
    filters: ["Todos", "Industrial", "Civil", "Logística", "Residencial"],
    projects: [
      {
        id: 1,
        title: "Nave industrial Zona Norte",
        category: "Industrial",
        location: "Buenos Aires",
        year: "2024",
        area: "4.200 m²",
        client: "Empresa confidencial",
        desc: "Nave industrial PEB con estructura metálica, cubierta panel sandwich, depósito climatizado y oficinas de 320 m².",
        img: "/images/project-1.jpg",
        unit: "Construcciones",
      },
      {
        id: 2,
        title: "Centro de distribución logística",
        category: "Logística",
        location: "Córdoba",
        year: "2024",
        area: "8.600 m²",
        client: "Empresa confidencial",
        desc: "Centro logístico con racks selectivos para 12.000 posiciones, andenes de carga y sistemas de iluminación LED industrial.",
        img: "/images/project-2.jpg",
        unit: "Construcciones",
      },
      {
        id: 3,
        title: "Barrio residencial Los Nogales",
        category: "Residencial",
        location: "Mendoza",
        year: "2023",
        area: "2.8 ha",
        client: "Empresa confidencial",
        desc: "Urbanización de 48 lotes con infraestructura completa: calles, redes de agua, gas, electricidad y espacios verdes.",
        img: "/images/project-3.jpg",
        unit: "Desarrollos",
      },
      {
        id: 4,
        title: "Planta de procesamiento agroindustrial",
        category: "Industrial",
        location: "Santa Fe",
        year: "2023",
        area: "5.100 m²",
        client: "Empresa confidencial",
        desc: "Planta de procesamiento con estructura de hormigón, pisos industriales, cámaras frigoríficas y sala de máquinas.",
        img: "/images/project-4.jpg",
        unit: "Construcciones",
      },
      {
        id: 5,
        title: "Infraestructura vial municipal",
        category: "Civil",
        location: "Rosario",
        year: "2023",
        area: "12 km",
        client: "Municipalidad de Rosario",
        desc: "Pavimentación y cordón cuneta en barrio residencial. Obra por licitación pública provincial.",
        img: "/images/project-5.jpg",
        unit: "Construcciones",
      },
      {
        id: 6,
        title: "Depósito con energía solar",
        category: "Industrial",
        location: "San Luis",
        year: "2022",
        area: "3.400 m²",
        client: "Empresa confidencial",
        desc: "Galpón industrial con sistema fotovoltaico de 180 kWp, estructura PEB y hormigón estampado.",
        img: "/images/hero-bg.jpg",
        unit: "Importador",
      },
    ],
    stats: [
      { n: "50+", label: "Obras ejecutadas" },
      { n: "180.000", label: "m² construidos" },
      { n: "12", label: "Provincias" },
      { n: "8", label: "Años de trayectoria" },
    ],
    cta: { title: "¿Tenés un proyecto?", btn: "Consultarnos" },
  },
  en: {
    overline: "Projects",
    title: "Completed works.",
    subtitle: "Construction, industry and logistics projects that demonstrate our technical and operational capacity.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Projects" }],
    filters: ["All", "Industrial", "Civil", "Logistics", "Residential"],
    projects: [
      {
        id: 1,
        title: "Industrial building – North Zone",
        category: "Industrial",
        location: "Buenos Aires",
        year: "2024",
        area: "4,200 m²",
        client: "Confidential",
        desc: "PEB industrial building with steel structure, sandwich panel roof, climate-controlled warehouse and 320 m² offices.",
        img: "/images/project-1.jpg",
        unit: "Construcciones",
      },
      {
        id: 2,
        title: "Logistics distribution centre",
        category: "Logistics",
        location: "Córdoba",
        year: "2024",
        area: "8,600 m²",
        client: "Confidential",
        desc: "Logistics centre with selective racking for 12,000 positions, loading docks and industrial LED lighting systems.",
        img: "/images/project-2.jpg",
        unit: "Construcciones",
      },
      {
        id: 3,
        title: "Los Nogales residential neighborhood",
        category: "Residential",
        location: "Mendoza",
        year: "2023",
        area: "2.8 ha",
        client: "Confidential",
        desc: "Urbanization of 48 lots with full infrastructure: roads, water, gas, electricity and green spaces.",
        img: "/images/project-3.jpg",
        unit: "Desarrollos",
      },
      {
        id: 4,
        title: "Agro-industrial processing plant",
        category: "Industrial",
        location: "Santa Fe",
        year: "2023",
        area: "5,100 m²",
        client: "Confidential",
        desc: "Processing plant with concrete structure, industrial floors, refrigerated chambers and machinery room.",
        img: "/images/project-4.jpg",
        unit: "Construcciones",
      },
      {
        id: 5,
        title: "Municipal road infrastructure",
        category: "Civil",
        location: "Rosario",
        year: "2023",
        area: "12 km",
        client: "Municipality of Rosario",
        desc: "Paving and kerb-and-channel in residential neighbourhood. Public tender contract.",
        img: "/images/project-5.jpg",
        unit: "Construcciones",
      },
      {
        id: 6,
        title: "Solar-powered warehouse",
        category: "Industrial",
        location: "San Luis",
        year: "2022",
        area: "3,400 m²",
        client: "Confidential",
        desc: "Industrial warehouse with 180 kWp photovoltaic system, PEB structure and stamped concrete floors.",
        img: "/images/hero-bg.jpg",
        unit: "Importador",
      },
    ],
    stats: [
      { n: "50+", label: "Completed works" },
      { n: "180,000", label: "m² built" },
      { n: "12", label: "Provinces" },
      { n: "8", label: "Years of track record" },
    ],
    cta: { title: "Have a project?", btn: "Contact us" },
  },
};

export default function ProyectosPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];
  const [activeFilter, setActiveFilter] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeFilter === 0
    ? c.projects
    : c.projects.filter((p) => p.category === c.filters[activeFilter]);

  const selectedProject = selected !== null ? c.projects.find((p) => p.id === selected) : null;

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/project-1.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* Stats */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {c.stats.map(({ n, label }) => (
              <div key={n} className="text-center px-8 py-10">
                <span className="font-display text-3xl lg:text-4xl font-bold text-white block mb-1">{n}</span>
                <span className="text-xs text-white/40">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-zinc-100 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 overflow-x-auto">
          {c.filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveFilter(i)}
              className={`text-xs font-medium px-4 py-2 whitespace-nowrap transition-colors ${activeFilter === i ? "bg-black text-white" : "border border-zinc-200 text-zinc-600 hover:border-zinc-400"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
            {filtered.map((project, i) => (
              <AnimateInView key={project.id} delay={i * 0.08}>
                <div
                  className="group bg-white hover:bg-zinc-50 transition-colors cursor-pointer overflow-hidden"
                  onClick={() => setSelected(project.id === selected ? null : project.id)}
                >
                  <div className="relative h-56 overflow-hidden bg-zinc-100">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-white/90 text-zinc-700 px-2 py-1">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400 block mb-2">{project.unit}</span>
                    <h3 className="font-display text-base font-semibold text-zinc-900 mb-3 leading-snug">{project.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{project.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" strokeWidth={1.5} />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" strokeWidth={1.5} />
                        {project.area}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <AnimateInView>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">{c.cta.title}</h2>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <Link href={`/${locale}/contacto`} className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 text-sm font-medium hover:bg-zinc-100 transition-colors shrink-0">
              {c.cta.btn}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
