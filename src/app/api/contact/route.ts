import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(["obra", "importacion", "desarrollo", "digital", "general"]),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const typeLabels: Record<string, string> = {
      obra: "Cotizar obra",
      importacion: "Consulta de importación",
      desarrollo: "Desarrollo",
      digital: "Solución digital",
      general: "Consulta general",
    };

    await transporter.sendMail({
      from: `"Web Grupo Enjinia" <${process.env.SMTP_USER}>`,
      to: "contacto@grupoenjinia.com",
      replyTo: data.email,
      subject: `[${typeLabels[data.type]}] Consulta de ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #0a0a0a; font-size: 20px; margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
            Nueva consulta: ${typeLabels[data.type]}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top;">Nombre</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-size: 13px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-size: 13px;">${data.email}</td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Teléfono</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-size: 13px;">${data.phone}</td>
            </tr>` : ""}
            ${data.company ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Empresa</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-size: 13px;">${data.company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Tipo</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-size: 13px;">${typeLabels[data.type]}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Mensaje:</p>
            <p style="color: #0a0a0a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Datos inválidos", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
