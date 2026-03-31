"use client";

import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, HardHat, Package, Home, Monitor, Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";

const schema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(100),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(["obra", "importacion", "desarrollo", "digital", "general"]),
  message: z.string().min(10, "Mensaje muy corto").max(2000),
});

type FormData = z.infer<typeof schema>;

const content = {
  es: {
    overline: "Contacto",
    title: "Contanos qué necesitás.",
    subtitle: "Te respondemos con una propuesta concreta en menos de 48 horas.",
    breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Contacto" }],
    types: [
      { value: "obra", icon: HardHat, label: "Cotizar obra", desc: "Obras civiles, industriales o infraestructura" },
      { value: "importacion", icon: Package, label: "Importación", desc: "Productos, maquinaria o soluciones importadas" },
      { value: "desarrollo", icon: Home, label: "Desarrollo", desc: "Proyectos arquitectónicos e inmobiliarios" },
      { value: "digital", icon: Monitor, label: "Digital", desc: "Soluciones tecnológicas para tu operación" },
      { value: "general", icon: Mail, label: "Consulta general", desc: "Otra consulta sobre Grupo Enjinia" },
    ],
    fields: {
      name: "Nombre y apellido *",
      email: "Email *",
      phone: "Teléfono (opcional)",
      company: "Empresa (opcional)",
      message: "Mensaje *",
      messagePlaceholder: "Contanos sobre tu proyecto o consulta...",
      submit: "Enviar consulta",
      submitting: "Enviando...",
    },
    success: {
      title: "¡Mensaje enviado!",
      desc: "Recibimos tu consulta. Te responderemos dentro de las próximas 48 horas hábiles.",
      back: "Volver al inicio",
    },
    contact: {
      overline: "Contacto directo",
      title: "Otros canales.",
      items: [
        { icon: Mail, label: "Email", value: "contacto@grupoenjinia.com" },
        { icon: MapPin, label: "Ubicación", value: "Argentina" },
      ],
    },
  },
  en: {
    overline: "Contact",
    title: "Tell us what you need.",
    subtitle: "We respond with a concrete proposal within 48 hours.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Contact" }],
    types: [
      { value: "obra", icon: HardHat, label: "Quote a work", desc: "Civil, industrial works or infrastructure" },
      { value: "importacion", icon: Package, label: "Importation", desc: "Imported products, machinery or solutions" },
      { value: "desarrollo", icon: Home, label: "Development", desc: "Architectural and real estate projects" },
      { value: "digital", icon: Monitor, label: "Digital", desc: "Technology solutions for your operations" },
      { value: "general", icon: Mail, label: "General enquiry", desc: "Other enquiry about Grupo Enjinia" },
    ],
    fields: {
      name: "Full name *",
      email: "Email *",
      phone: "Phone (optional)",
      company: "Company (optional)",
      message: "Message *",
      messagePlaceholder: "Tell us about your project or enquiry...",
      submit: "Send enquiry",
      submitting: "Sending...",
    },
    success: {
      title: "Message sent!",
      desc: "We received your enquiry and will reply within the next 48 business hours.",
      back: "Back to home",
    },
    contact: {
      overline: "Direct contact",
      title: "Other channels.",
      items: [
        { icon: Mail, label: "Email", value: "contacto@grupoenjinia.com" },
        { icon: MapPin, label: "Location", value: "Argentina" },
      ],
    },
  },
};

function ContactForm() {
  const locale = useLocale() as "es" | "en";
  const c = content[locale];
  const searchParams = useSearchParams();
  const defaultType = (searchParams.get("tipo") || "general") as FormData["type"];

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: defaultType },
  });

  const selectedType = watch("type");

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setServerError(locale === "es" ? "Error al enviar. Intentá de nuevo." : "Error sending. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <h3 className="font-display text-2xl font-bold text-zinc-900 mb-3">{c.success.title}</h3>
        <p className="text-base text-zinc-500 mb-8 max-w-sm mx-auto">{c.success.desc}</p>
        <a href={`/${locale}`} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" strokeWidth={1.5} />
          {c.success.back}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Type selector */}
      <div>
        <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-[0.15em]">
          {locale === "es" ? "Tipo de consulta" : "Enquiry type"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {c.types.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setValue("type", t.value as FormData["type"])}
              className={`p-4 text-left border transition-colors ${selectedType === t.value ? "border-black bg-black text-white" : "border-zinc-200 hover:border-zinc-400 text-zinc-700"}`}
            >
              <t.icon className={`w-4 h-4 mb-2 ${selectedType === t.value ? "text-white" : "text-zinc-400"}`} strokeWidth={1.5} />
              <span className="text-xs font-semibold block leading-snug">{t.label}</span>
              <span className={`text-[10px] leading-snug mt-0.5 block ${selectedType === t.value ? "text-white/60" : "text-zinc-400"}`}>{t.desc}</span>
            </button>
          ))}
        </div>
        {errors.type && <p className="text-xs text-red-500 mt-1">{errors.type.message}</p>}
      </div>

      {/* Personal info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-600 mb-1.5">{c.fields.name}</label>
          <input
            {...register("name")}
            className={`w-full px-4 py-3 text-sm border focus:outline-none focus:border-zinc-600 transition-colors bg-transparent ${errors.name ? "border-red-300" : "border-zinc-200"}`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-600 mb-1.5">{c.fields.email}</label>
          <input
            {...register("email")}
            type="email"
            className={`w-full px-4 py-3 text-sm border focus:outline-none focus:border-zinc-600 transition-colors bg-transparent ${errors.email ? "border-red-300" : "border-zinc-200"}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-600 mb-1.5">{c.fields.phone}</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-4 py-3 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-600 mb-1.5">{c.fields.company}</label>
          <input
            {...register("company")}
            className="w-full px-4 py-3 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors bg-transparent"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-zinc-600 mb-1.5">{c.fields.message}</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={c.fields.messagePlaceholder}
          className={`w-full px-4 py-3 text-sm border focus:outline-none focus:border-zinc-600 transition-colors bg-transparent resize-none ${errors.message ? "border-red-300" : "border-zinc-200"}`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {serverError && (
        <p className="text-xs text-red-500">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? c.fields.submitting : c.fields.submit}
        {!isSubmitting && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
      </button>
    </form>
  );
}

export default function ContactoPage() {
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

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimateInView>
                <Suspense fallback={<div className="h-96 animate-pulse bg-zinc-100" />}>
                  <ContactForm />
                </Suspense>
              </AnimateInView>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <AnimateInView delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-zinc-300" />
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">{c.contact.overline}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 mb-8">{c.contact.title}</h3>
                <div className="flex flex-col gap-6">
                  {c.contact.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-zinc-200 flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs text-zinc-400 block mb-0.5">{item.label}</span>
                        <span className="text-sm font-medium text-zinc-900">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateInView>

              {/* Units quick links */}
              <AnimateInView delay={0.2}>
                <div className="border-t border-zinc-100 pt-8">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-400 mb-5">
                    {locale === "es" ? "Empresas del grupo" : "Group companies"}
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Enjinia Construcciones", href: `/empresas/construcciones` },
                      { label: "Enjinia Importador", href: `/empresas/importador` },
                      { label: "Enjinia Desarrollos", href: `/empresas/desarrollos` },
                      { label: "Enjinia Digital", href: `/empresas/digital` },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={`/${locale}${link.href}`}
                        className="flex items-center justify-between py-2.5 border-b border-zinc-100 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                      >
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-600 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
