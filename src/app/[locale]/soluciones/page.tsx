"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Truck, HardHat, Leaf, ShoppingBag, Landmark } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Soluciones",
    title: "Capacidades según tu industria.",
    subtitle: "Enjinia opera en múltiples sectores. Encontrá la propuesta de valor específica para tu industria.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Soluciones" }],
    intro: {
      overline: "Enfoque sectorial",
      title: "No hacemos lo mismo para todos.",
      text: "Cada industria tiene procesos, normas y restricciones distintas. Nuestras soluciones se adaptan a los requerimientos específicos de cada sector, con equipos que conocen el terreno.",
    },
    industries: [
      {
        icon: HardHat,
        tag: "Construcción",
        title: "Obras civiles y edificios",
        desc: "Ejecución de obras civiles, industriales y residenciales con capacidad técnica propia. Desde licitaciones públicas hasta proyectos llave en mano.",
        capabilities: ["Obras civiles e infraestructura", "Naves y galpones industriales", "Barrios y viviendas", "Proyectos llave en mano", "Licitaciones públicas"],
        units: ["Construcciones", "Desarrollos"],
        img: "/images/project-1.jpg",
        href: "/empresas/construcciones",
      },
      {
        icon: Factory,
        tag: "Industria",
        title: "Plantas y procesos industriales",
        desc: "Construcción, equipamiento y optimización de plantas industriales. Abastecimiento de insumos críticos e integración de tecnología de control.",
        capabilities: ["Construcción de plantas", "Abastecimiento de insumos", "Equipamiento industrial", "Automatización de procesos", "Mantenimiento industrial"],
        units: ["Construcciones", "Importador", "Digital"],
        img: "/images/project-4.jpg",
        href: "/empresas/importador",
      },
      {
        icon: Truck,
        tag: "Logística",
        title: "Centros de distribución y depósitos",
        desc: "Diseño, construcción y equipamiento de centros logísticos. Desde el galpón hasta el sistema de gestión de almacenes.",
        capabilities: ["Construcción de depósitos y CD", "Racks y sistemas de almacenamiento", "Logística interna", "Software de gestión de almacenes", "Señalización y seguridad"],
        units: ["Construcciones", "Importador", "Digital"],
        img: "/images/project-2.jpg",
        href: "/empresas/construcciones",
      },
      {
        icon: Leaf,
        tag: "Agroindustria",
        title: "Infraestructura agroproductiva",
        desc: "Galpones, silos, plantas de proceso y energía solar para el sector agroindustrial. Materiales y sistemas adaptados a la operación rural.",
        capabilities: ["Galpones y silos", "Plantas de acopio y proceso", "Energía solar fotovoltaica", "Insumos para hormigón", "Maquinaria especializada"],
        units: ["Construcciones", "Importador"],
        img: "/images/cat-solar.jpg",
        href: "/importaciones",
      },
      {
        icon: ShoppingBag,
        tag: "Retail y Comercial",
        title: "Locales, centros y oficinas",
        desc: "Desarrollo y construcción de espacios comerciales, centros de servicios y edificios de oficinas con diseño integral.",
        capabilities: ["Proyectos arquitectónicos", "Locales y showrooms", "Centros comerciales a escala", "Oficinas corporativas", "Refuncionalización de espacios"],
        units: ["Desarrollos", "Construcciones"],
        img: "/images/project-3.jpg",
        href: "/empresas/desarrollos",
      },
      {
        icon: Landmark,
        tag: "Sector público",
        title: "Infraestructura y obra pública",
        desc: "Presentación y ejecución de licitaciones con organismos nacionales, provinciales y municipales. Experiencia en obra pública de escala.",
        capabilities: ["Licitaciones nacionales y provinciales", "Infraestructura vial", "Obras sanitarias y pluviales", "Equipamiento público", "Certificaciones y habilitaciones"],
        units: ["Construcciones"],
        img: "/images/project-5.jpg",
        href: "/empresas/construcciones",
      },
    ],
    cta: {
      title: "¿Tu sector no está acá?",
      desc: "Consultanos de todas formas. Hemos trabajado en proyectos de diversas industrias.",
      btn: "Contactar",
    },
  },
  en: {
    overline: "Solutions",
    title: "Capabilities for your industry.",
    subtitle: "Enjinia operates across multiple sectors. Find the specific value proposition for your industry.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Solutions" }],
    intro: {
      overline: "Sector focus",
      title: "We don't do the same for everyone.",
      text: "Each industry has different processes, regulations and constraints. Our solutions adapt to the specific requirements of each sector, with teams who know the field.",
    },
    industries: [
      {
        icon: HardHat,
        tag: "Construction",
        title: "Civil works and buildings",
        desc: "Civil, industrial and residential works with in-house technical capacity. From public tenders to turnkey projects.",
        capabilities: ["Civil works & infrastructure", "Industrial buildings & warehouses", "Neighborhoods & housing", "Turnkey projects", "Public tenders"],
        units: ["Construcciones", "Desarrollos"],
        img: "/images/project-1.jpg",
        href: "/empresas/construcciones",
      },
      {
        icon: Factory,
        tag: "Industry",
        title: "Plants and industrial processes",
        desc: "Construction, equipment and optimization of industrial plants. Supply of critical inputs and integration of control technology.",
        capabilities: ["Plant construction", "Input supply", "Industrial equipment", "Process automation", "Industrial maintenance"],
        units: ["Construcciones", "Importador", "Digital"],
        img: "/images/project-4.jpg",
        href: "/empresas/importador",
      },
      {
        icon: Truck,
        tag: "Logistics",
        title: "Distribution centres and warehouses",
        desc: "Design, construction and equipment of logistics centres. From the warehouse building to the warehouse management system.",
        capabilities: ["Warehouse & DC construction", "Racks and storage systems", "Internal logistics", "Warehouse management software", "Signage and safety"],
        units: ["Construcciones", "Importador", "Digital"],
        img: "/images/project-2.jpg",
        href: "/empresas/construcciones",
      },
      {
        icon: Leaf,
        tag: "Agro-industry",
        title: "Agro-productive infrastructure",
        desc: "Warehouses, silos, processing plants and solar energy for the agro-industrial sector. Materials and systems adapted to rural operations.",
        capabilities: ["Warehouses and silos", "Storage and processing plants", "Photovoltaic solar energy", "Concrete inputs", "Specialized machinery"],
        units: ["Construcciones", "Importador"],
        img: "/images/cat-solar.jpg",
        href: "/importaciones",
      },
      {
        icon: ShoppingBag,
        tag: "Retail & Commercial",
        title: "Retail, centres and offices",
        desc: "Development and construction of commercial spaces, service centres and office buildings with integral design.",
        capabilities: ["Architectural projects", "Retail and showrooms", "Commercial centres at scale", "Corporate offices", "Space repurposing"],
        units: ["Desarrollos", "Construcciones"],
        img: "/images/project-3.jpg",
        href: "/empresas/desarrollos",
      },
      {
        icon: Landmark,
        tag: "Public sector",
        title: "Infrastructure and public works",
        desc: "Submission and execution of tenders with national, provincial and municipal bodies. Experience in large-scale public works.",
        capabilities: ["National & provincial tenders", "Road infrastructure", "Sanitation and drainage works", "Public equipment", "Permits and approvals"],
        units: ["Construcciones"],
        img: "/images/project-5.jpg",
        href: "/empresas/construcciones",
      },
    ],
    cta: {
      title: "Your sector not here?",
      desc: "Contact us anyway. We have worked on projects across many industries.",
      btn: "Contact us",
    },
  },
};

export default function SolucionesPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/proyecto-hero.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-zinc-300" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.intro.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6">{c.intro.title}</h2>
              <p className="text-base text-zinc-500 leading-relaxed">{c.intro.text}</p>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-0 divide-y divide-zinc-100">
            {c.industries.map((industry, i) => (
              <AnimateInView key={industry.tag} delay={i * 0.05}>
                <div className="grid lg:grid-cols-2 gap-0 py-0 group">
                  {/* Image — alternates sides */}
                  <div className={`relative h-64 lg:h-80 overflow-hidden bg-zinc-100 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={industry.img}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase bg-white/90 text-zinc-700 px-2 py-1">{industry.tag}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`bg-zinc-50 p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <industry.icon className="w-6 h-6 text-zinc-400 mb-4" strokeWidth={1.2} />
                    <h3 className="font-display text-2xl font-bold text-zinc-900 mb-3">{industry.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6">{industry.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {industry.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-zinc-400 rounded-full shrink-0" />
                          <span className="text-sm text-zinc-600">{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 flex-wrap mb-6">
                      {industry.units.map((u) => (
                        <span key={u} className="text-[10px] font-semibold tracking-[0.15em] uppercase border border-zinc-300 text-zinc-500 px-2.5 py-1">{u}</span>
                      ))}
                    </div>
                    <Link href={`/${locale}${industry.href}`} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors group/link self-start">
                      {locale === "es" ? "Ver empresa" : "View company"}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateInView>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">{c.cta.title}</h2>
            <p className="text-base text-white/50 mb-8 max-w-md mx-auto">{c.cta.desc}</p>
            <Link href={`/${locale}/contacto`} className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-medium hover:bg-zinc-100 transition-colors">
              {c.cta.btn}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
