"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MUNICIPIO_NAMES } from "@/lib/coverage";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

// Esquema de validación con zod (en español, mensajes amigables)
const contactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo (mínimo 2 caracteres)."),
  empresa: z.string().optional(),
  email: z.string().email("Correo no válido. Ej: nombre@empresa.com"),
  telefono: z
    .string()
    .min(7, "Teléfono no válido.")
    .regex(/^[0-9+\-\s()]+$/, "El teléfono solo puede contener números, espacios y los símbolos + - ( )."),
  municipio: z.string().min(1, "Selecciona el municipio."),
  servicio: z.string().min(1, "Selecciona el servicio de interés."),
  volumen: z
    .string()
    .refine((v) => v === "" || !isNaN(Number(v)), "Solo números.")
    .optional(),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)."),
  acepta: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar el tratamiento de datos." }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      municipio: "",
      servicio: "",
      volumen: "",
      mensaje: "",
      acepta: false as unknown as true,
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setSubmitting(true);
    // Simulación de envío — no hay backend real (ejercicio académico)
    setTimeout(() => {
      console.log("Datos de contacto:", data);
      toast.success("Mensaje enviado correctamente", {
        description: "Te contactaremos en las próximas 24 horas hábiles.",
      });
      reset();
      setSubmitting(false);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nombre completo *" htmlFor="c-nombre" error={errors.nombre?.message}>
          <Input id="c-nombre" {...register("nombre")} placeholder="Juan Pérez" aria-invalid={!!errors.nombre} />
        </Field>
        <Field label="Empresa (opcional)" htmlFor="c-empresa">
          <Input id="c-empresa" {...register("empresa")} placeholder="Constructora ABC" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Correo electrónico *" htmlFor="c-email" error={errors.email?.message}>
          <Input
            id="c-email"
            type="email"
            {...register("email")}
            placeholder="nombre@correo.com"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Teléfono *" htmlFor="c-tel" error={errors.telefono?.message}>
          <Input
            id="c-tel"
            type="tel"
            {...register("telefono")}
            placeholder="+57 300 000 0000"
            aria-invalid={!!errors.telefono}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Municipio *" htmlFor="c-municipio" error={errors.municipio?.message}>
          <Select id="c-municipio" {...register("municipio")} aria-invalid={!!errors.municipio}>
            <option value="">Selecciona...</option>
            {MUNICIPIO_NAMES.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
            <option value="Otro">Otro / Fuera de cobertura</option>
          </Select>
        </Field>
        <Field label="Servicio de interés *" htmlFor="c-servicio" error={errors.servicio?.message}>
          <Select id="c-servicio" {...register("servicio")} aria-invalid={!!errors.servicio}>
            <option value="">Selecciona...</option>
            {SERVICES.map((s) => (
              <option key={s.key} value={s.shortName}>{s.nombre}</option>
            ))}
            <option value="Asesoría general">Solo asesoría general</option>
          </Select>
        </Field>
      </div>

      <Field label="Volumen estimado en m³ (opcional)" htmlFor="c-volumen" error={errors.volumen?.message}>
        <Input id="c-volumen" type="number" {...register("volumen")} placeholder="Ej: 25" />
      </Field>

      <Field label="Mensaje *" htmlFor="c-mensaje" error={errors.mensaje?.message}>
        <Textarea
          id="c-mensaje"
          {...register("mensaje")}
          placeholder="Cuéntanos sobre tu obra, fechas estimadas y cualquier requisito especial."
          rows={5}
          aria-invalid={!!errors.mensaje}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-concrete-700 leading-relaxed">
        <input
          type="checkbox"
          {...register("acepta")}
          className="mt-0.5 h-4 w-4 rounded border-concrete-300 text-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
        />
        <span>
          Autorizo el tratamiento de mis datos personales conforme a la política de privacidad de Construyendo Futuro RCD.
          {errors.acepta?.message && (
            <span className="block text-orange-600 text-xs mt-1 font-medium">{errors.acepta.message}</span>
          )}
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </Button>

      <p className="text-xs text-concrete-500 leading-relaxed">
        Te responderemos en un plazo máximo de 24 horas hábiles. Para urgencias, usa el WhatsApp flotante o llámanos directamente.
      </p>
    </form>
  );
}

// ============== Componentes auxiliares ==============

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-orange-600 font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={cn(
      "flex h-11 w-full rounded-md border border-concrete-300 bg-white px-3 py-2 text-sm",
      "text-concrete-900",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:border-orange-600",
      "transition-colors"
    )}
  />
);
