"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Download, Package, Search } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Catálogo",
    title: "Productos, maquinaria y soluciones importadas.",
    subtitle: "Seleccionamos y comercializamos lo que tu proyecto necesita. Abastecimiento directo desde mercados internacionales.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Importaciones" }],
    search: "Buscar producto o categoría...",
    filters: ["Todo", "Estructuras", "Chapas", "Maquinaria", "Hormigón", "Logística", "Solar", "Seguridad", "Equipamiento"],
    categories: [
      {
        tag: "Estructuras",
        name: "Galpones y estructuras metálicas",
        desc: "Estructuras prefabricadas, sistemas de cubierta y revestimiento. Galvanizado en caliente, perfiles laminados y tornillería.",
        img: "/images/cat-estructuras.jpg",
        products: ["Estructuras PEB (Pre-Engineered Buildings)", "Perfiles C y Z", "Correas y vigas IPE", "Tornillería estructural", "Placas base y anclajes"],
        lead: "Desde 300 m²",
      },
      {
        tag: "Chapas",
        name: "Chapas y paneles industriales",
        desc: "Chapas galvanizadas, prelacadas y paneles sandwich para construcción industrial. Distintos espesores y acabados.",
        img: "/images/cat-chapas.jpg",
        products: ["Chapa trapezoidal galvanizada", "Chapa prelacada color", "Panel sandwich PUR/PIR", "Perfil omega y Omega Z", "Canaleta y bajada pluvial"],
        lead: "Consultar por volumen",
      },
      {
        tag: "Maquinaria",
        name: "Maquinaria para construcción e industria",
        desc: "Equipos para construcción, movimiento de tierras y procesamiento industrial. Marcas verificadas, garantía de origen.",
        img: "/images/cat-maquinaria.jpg",
        products: ["Minicargadoras y skid steer", "Elevadores telescópicos", "Compactadoras y rodillos", "Hormigoneras y plantas", "Equipos de corte y soldadura"],
        lead: "Consultar disponibilidad",
      },
      {
        tag: "Hormigón",
        name: "Insumos para hormigón de alta performance",
        desc: "Aditivos, fibras y sistemas de encofrado para hormigón de alta exigencia. Soluciones para obra civil e industrial.",
        img: "/images/cat-hormigon.jpg",
        products: ["Aditivos plastificantes y superfluidificantes", "Fibra de acero y polipropileno", "Sistemas de encofrado modular", "Desmoldantes y curados", "Separadores y calzos"],
        lead: "Por tonelada o m³",
      },
      {
        tag: "Logística",
        name: "Logística interna y depósito",
        desc: "Sistemas de movimiento interno, estanterías y equipos de depósito. Soluciones para optimización de almacenes.",
        img: "/images/cat-logistica.jpg",
        products: ["Estanterías metálicas selectivas", "Racks drive-in y push-back", "Mezanines y entrepisos", "Apiladores eléctricos", "Sistemas de señalización y seguridad"],
        lead: "Proyecto de layout incluido",
      },
      {
        tag: "Solar",
        name: "Energía solar fotovoltaica",
        desc: "Paneles monocristalinos, inversores y sistemas de almacenamiento para instalaciones industriales y comerciales.",
        img: "/images/cat-solar.jpg",
        products: ["Paneles monocristalinos 400-600W", "Inversores string y central", "Baterías LiFePO4", "Estructuras de montaje", "Monitoreo y SCADA"],
        lead: "Desde 10 kWp",
      },
      {
        tag: "Seguridad",
        name: "Seguridad industrial y EPP",
        desc: "Equipos de protección personal y sistemas de seguridad para obra e industria. Certificados y homologados.",
        img: "/images/cat-seguridad.jpg",
        products: ["Cascos y protección craneal", "Arneses y líneas de vida", "Protección respiratoria", "Ropa de alta visibilidad", "Sistemas de rescate en altura"],
        lead: "Kits por puesto de trabajo",
      },
      {
        tag: "Equipamiento",
        name: "Equipamiento industrial general",
        desc: "Equipos, herramientas y soluciones para procesos industriales de diversa índole.",
        img: "/images/cat-equipamiento.jpg",
        products: ["Herramientas neumáticas e hidráulicas", "Compresores industriales", "Sistemas de filtración y tratamiento", "Bombas y válvulas", "Instrumentación y medición"],
        lead: "Consultar por proyecto",
      },
    ],
    custom: {
      overline: "Importación a medida",
      title: "¿No encontrás lo que buscás?",
      desc: "Desarrollamos procesos de importación específicos para requerimientos técnicos particulares. Buscamos, verificamos y traemos lo que tu proyecto necesita.",
      steps: [
        { n: "01", title: "Especificación", desc: "Nos enviás los requerimientos técnicos y cantidades estimadas." },
        { n: "02", title: "Sourcing", desc: "Buscamos y preseleccionamos fuentes en los mercados más competitivos." },
        { n: "03", title: "Verificación", desc: "Auditamos el proveedor, muestras y certificaciones de origen." },
        { n: "04", title: "Logística", desc: "Gestionamos toda la cadena: flete, aduana, seguro y entrega." },
      ],
    },
    cta: {
      title: "¿Necesitás cotizar?",
      desc: "Completá el formulario y te respondemos con disponibilidad y precios en 48 h.",
      btn: "Solicitar cotización",
    },
    download: "Descargar catálogo completo",
  },
  en: {
    overline: "Catalogue",
    title: "Imported products, machinery and solutions.",
    subtitle: "We select and supply what your project needs. Direct procurement from international markets.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Importations" }],
    search: "Search product or category...",
    filters: ["All", "Structures", "Sheets", "Machinery", "Concrete", "Logistics", "Solar", "Safety", "Equipment"],
    categories: [
      {
        tag: "Structures",
        name: "Industrial buildings & steel structures",
        desc: "Prefabricated structures, roofing and cladding systems. Hot-dip galvanizing, rolled sections and hardware.",
        img: "/images/cat-estructuras.jpg",
        products: ["PEB (Pre-Engineered Buildings)", "C & Z purlins", "IPE beams", "Structural bolts", "Base plates and anchors"],
        lead: "From 300 m²",
      },
      {
        tag: "Sheets",
        name: "Industrial sheets and panels",
        desc: "Galvanized, pre-painted sheets and sandwich panels for industrial construction. Various thicknesses and finishes.",
        img: "/images/cat-chapas.jpg",
        products: ["Galvanized trapezoidal sheet", "Pre-painted colour sheet", "PUR/PIR sandwich panel", "Omega profile", "Gutters and downpipes"],
        lead: "Enquire by volume",
      },
      {
        tag: "Machinery",
        name: "Construction & industrial machinery",
        desc: "Equipment for construction, earthmoving and industrial processing. Verified brands, original warranty.",
        img: "/images/cat-maquinaria.jpg",
        products: ["Skid steer loaders", "Telescopic handlers", "Compactors and rollers", "Concrete mixers and plants", "Cutting and welding equipment"],
        lead: "Enquire availability",
      },
      {
        tag: "Concrete",
        name: "High-performance concrete solutions",
        desc: "Admixtures, fibres and formwork systems for demanding concrete applications. Solutions for civil and industrial works.",
        img: "/images/cat-hormigon.jpg",
        products: ["Plasticizer & superplasticizer admixtures", "Steel & polypropylene fibre", "Modular formwork systems", "Release agents and curing", "Spacers and chairs"],
        lead: "Per tonne or m³",
      },
      {
        tag: "Logistics",
        name: "Internal logistics & warehousing",
        desc: "Internal movement systems, racking and warehouse equipment. Solutions for warehouse optimization.",
        img: "/images/cat-logistica.jpg",
        products: ["Selective pallet racking", "Drive-in & push-back racks", "Mezzanines", "Electric stackers", "Signage and safety systems"],
        lead: "Layout design included",
      },
      {
        tag: "Solar",
        name: "Photovoltaic solar energy",
        desc: "Monocrystalline panels, inverters and storage systems for industrial and commercial installations.",
        img: "/images/cat-solar.jpg",
        products: ["Monocrystalline panels 400–600 W", "String and central inverters", "LiFePO4 batteries", "Mounting structures", "Monitoring and SCADA"],
        lead: "From 10 kWp",
      },
      {
        tag: "Safety",
        name: "Industrial safety & PPE",
        desc: "Personal protective equipment and safety systems for site and industry. Certified and approved.",
        img: "/images/cat-seguridad.jpg",
        products: ["Helmets and head protection", "Harnesses and lifelines", "Respiratory protection", "High-visibility clothing", "Rescue-at-height systems"],
        lead: "Kits per workstation",
      },
      {
        tag: "Equipment",
        name: "General industrial equipment",
        desc: "Equipment, tools and solutions for various industrial processes.",
        img: "/images/cat-equipamiento.jpg",
        products: ["Pneumatic and hydraulic tools", "Industrial compressors", "Filtration and treatment systems", "Pumps and valves", "Instrumentation and measurement"],
        lead: "Enquire by project",
      },
    ],
    custom: {
      overline: "Custom importation",
      title: "Can't find what you need?",
      desc: "We develop specific import processes for particular technical requirements. We source, verify and bring what your project needs.",
      steps: [
        { n: "01", title: "Specification", desc: "Send us the technical requirements and estimated quantities." },
        { n: "02", title: "Sourcing", desc: "We search and shortlist sources in the most competitive markets." },
        { n: "03", title: "Verification", desc: "We audit the supplier, samples and certificates of origin." },
        { n: "04", title: "Logistics", desc: "We manage the full chain: freight, customs, insurance and delivery." },
      ],
    },
    cta: {
      title: "Need a quote?",
      desc: "Fill in the form and we'll respond with availability and prices within 48 h.",
      btn: "Request a quote",
    },
    download: "Download full catalogue",
  },
};

export default function ImportacionesPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];
  const [activeFilter, setActiveFilter] = useState(0);
  const [search, setSearch] = useState("");

  const filteredCategories = c.categories.filter((cat) => {
    const matchesFilter = activeFilter === 0 || cat.tag === c.filters[activeFilter];
    const matchesSearch = search === "" || cat.name.toLowerCase().includes(search.toLowerCase()) || cat.tag.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/cat-logistica.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* Search & Filter */}
      <section className="bg-white border-b border-zinc-100 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" strokeWidth={1.5} />
            <input
              type="text"
              placeholder={c.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {c.filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActiveFilter(i)}
                className={`text-xs font-medium px-3.5 py-1.5 whitespace-nowrap transition-colors ${activeFilter === i ? "bg-black text-white" : "border border-zinc-200 text-zinc-600 hover:border-zinc-400"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-zinc-600 border border-zinc-200 px-4 py-2.5 hover:bg-zinc-50 transition-colors shrink-0">
            <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
            {c.download}
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100">
            {filteredCategories.map((cat, i) => (
              <AnimateInView key={cat.name} delay={i * 0.06}>
                <div className="group bg-white hover:bg-zinc-50 transition-colors overflow-hidden">
                  <div className="relative h-44 overflow-hidden bg-zinc-100">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-white/90 text-zinc-700 px-2 py-1">{cat.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-base font-semibold text-zinc-900 mb-2 leading-snug">{cat.name}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{cat.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {cat.products.slice(0, 3).map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-zinc-300 rounded-full mt-1.5 shrink-0" />
                          <span className="text-xs text-zinc-500">{p}</span>
                        </li>
                      ))}
                      {cat.products.length > 3 && (
                        <li className="text-xs text-zinc-400 pl-3">+{cat.products.length - 3} más</li>
                      )}
                    </ul>
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">{cat.lead}</span>
                      <Link href={`/${locale}/contacto?tipo=importacion`} className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 hover:text-zinc-500 transition-colors group/link">
                        {locale === "es" ? "Cotizar" : "Quote"}
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Custom import */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateInView>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">{c.custom.overline}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">{c.custom.title}</h2>
              <p className="text-base text-white/50 leading-relaxed mb-10">{c.custom.desc}</p>
              <Link href={`/${locale}/contacto?tipo=importacion`} className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 text-sm font-medium hover:bg-zinc-100 transition-colors">
                {locale === "es" ? "Consultar importación a medida" : "Enquire custom import"}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div className="flex flex-col gap-0 border-t border-white/10">
                {c.custom.steps.map((step) => (
                  <div key={step.n} className="flex gap-8 py-7 border-b border-white/10">
                    <span className="text-xs font-mono text-white/20 mt-0.5 shrink-0">{step.n}</span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-zinc-200">
            {[
              { n: "8+", label: locale === "es" ? "Categorías de producto" : "Product categories" },
              { n: "40+", label: locale === "es" ? "Países de origen" : "Countries of origin" },
              { n: "500+", label: locale === "es" ? "Proyectos abastecidos" : "Projects supplied" },
              { n: "48h", label: locale === "es" ? "Tiempo de respuesta" : "Response time" },
            ].map(({ n, label }) => (
              <div key={n} className="text-center px-8 py-6">
                <span className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 block mb-1">{n}</span>
                <span className="text-xs text-zinc-500 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateInView>
            <Package className="w-8 h-8 text-zinc-300 mx-auto mb-6" strokeWidth={1.2} />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-4">{c.cta.title}</h2>
            <p className="text-base text-zinc-500 mb-8 max-w-md mx-auto">{c.cta.desc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/contacto?tipo=importacion`} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">
                {c.cta.btn}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <button className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-8 py-4 text-sm font-medium hover:bg-zinc-50 transition-colors">
                <Download className="w-4 h-4" strokeWidth={1.5} />
                {c.download}
              </button>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
