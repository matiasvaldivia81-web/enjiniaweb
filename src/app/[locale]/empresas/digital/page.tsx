"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Cpu, GitBranch, Monitor } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const content = {
  es: {
    overline: "Enjinia Digital",
    title: "Tecnología para la construcción, industria y logística.",
    subtitle: "Soluciones digitales aplicadas al control, la gestión y la operación real. No tecnología genérica — herramientas para problemas concretos.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Empresas", href: "/empresas" }, { label: "Digital" }],
    desc: {
      overline: "La empresa",
      title: "Tecnología aplicada.",
      text: "Enjinia Digital desarrolla soluciones tecnológicas específicas para los problemas de gestión, control y operación que tienen las empresas de construcción, industria y logística.",
      text2: "No hacemos tecnología genérica. Cada solución parte de un problema real, se construye sobre procesos existentes y se mide por resultados operativos.",
    },
    solutions: [
      { icon: Monitor, title: "Gestión de obras", desc: "Plataformas de seguimiento de avance, recursos y costos en tiempo real para proyectos de construcción." },
      { icon: BarChart3, title: "Control de operaciones", desc: "Dashboards e indicadores para el control de planta, depósito y operaciones logísticas." },
      { icon: GitBranch, title: "Automatización de procesos", desc: "Digitalización de flujos de trabajo, aprobaciones y reportes internos." },
      { icon: Cpu, title: "Integración de sistemas", desc: "Conexión de sistemas existentes (ERP, CRM, IoT) para una operación integrada." },
    ],
    approach: {
      overline: "Metodología",
      title: "Cómo trabajamos.",
      steps: [
        { n: "01", title: "Diagnóstico", desc: "Entendemos el proceso real antes de proponer tecnología." },
        { n: "02", title: "Diseño", desc: "Diseñamos la solución sobre el flujo de trabajo existente." },
        { n: "03", title: "Desarrollo", desc: "Construimos con foco en adopción y usabilidad." },
        { n: "04", title: "Operación", desc: "Acompañamos el lanzamiento y medimos resultados." },
      ],
    },
    cta: { btn: "Consultar solución digital" },
  },
  en: {
    overline: "Enjinia Digital",
    title: "Technology for construction, industry and logistics.",
    subtitle: "Digital solutions applied to real control, management and operations. Not generic technology — tools for concrete problems.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Companies", href: "/empresas" }, { label: "Digital" }],
    desc: {
      overline: "The company",
      title: "Applied technology.",
      text: "Enjinia Digital develops specific technological solutions for the management, control and operational problems faced by construction, industry and logistics companies.",
      text2: "We don't make generic technology. Each solution starts from a real problem, is built on existing processes and is measured by operational results.",
    },
    solutions: [
      { icon: Monitor, title: "Construction management", desc: "Real-time progress, resource and cost tracking platforms for construction projects." },
      { icon: BarChart3, title: "Operations control", desc: "Dashboards and KPIs for plant, warehouse and logistics operations control." },
      { icon: GitBranch, title: "Process automation", desc: "Digitalization of workflows, approvals and internal reporting." },
      { icon: Cpu, title: "Systems integration", desc: "Connection of existing systems (ERP, CRM, IoT) for integrated operations." },
    ],
    approach: {
      overline: "Methodology",
      title: "How we work.",
      steps: [
        { n: "01", title: "Diagnosis", desc: "We understand the real process before proposing technology." },
        { n: "02", title: "Design", desc: "We design the solution on top of the existing workflow." },
        { n: "03", title: "Development", desc: "We build with focus on adoption and usability." },
        { n: "04", title: "Operations", desc: "We support the launch and measure results." },
      ],
    },
    cta: { btn: "Enquire digital solution" },
  },
};

export default function DigitalPage() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];

  return (
    <>
      <PageHero
        overline={c.overline}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/unit-digital.jpg"
        breadcrumbs={c.breadcrumbs.map((b) => ({ ...b, href: b.href ? `/${locale}${b.href === "/" ? "" : b.href}` : undefined }))}
      />

      {/* Desc */}
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
              <div className="relative h-96 lg:h-[480px] overflow-hidden bg-zinc-100">
                <Image src="/images/unit-digital.jpg" alt="Enjinia Digital" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-14">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight">
              {locale === "es" ? "Soluciones" : "Solutions"}
            </h2>
          </AnimateInView>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5">
            {c.solutions.map((s, i) => (
              <AnimateInView key={s.title} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-10">
                  <s.icon className="w-7 h-7 text-white/30 mb-6" strokeWidth={1.2} />
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-24 lg:py-32 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateInView className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-300" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.approach.overline}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">{c.approach.title}</h2>
          </AnimateInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-zinc-100">
            {c.approach.steps.map((step, i) => (
              <AnimateInView key={step.n} delay={i * 0.1}>
                <div className="pt-8 pb-10 lg:pr-8 border-b border-zinc-100 lg:border-b-0 lg:border-r last:border-r-0">
                  <span className="text-xs font-mono text-zinc-300 block mb-5">{step.n}</span>
                  <h3 className="font-display text-lg font-semibold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
          <AnimateInView className="mt-14">
            <Link href={`/${locale}/contacto?tipo=digital`} className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">
              {c.cta.btn}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
