"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  /** Valor final del contador. */
  value: number;
  /** Sufijo opcional ("%", " ton", " municipios", etc.). */
  suffix?: string;
  /** Etiqueta debajo del número. */
  label: string;
  /** Icono opcional renderizado (JSX). Se renderiza en el padre y se pasa como elemento. */
  icon?: ReactNode;
  /** Duración de la animación en ms. */
  duration?: number;
  /** Si el número se muestra con separador de miles (es-CO). */
  formatThousands?: boolean;
  className?: string;
  /** Color del número (clase Tailwind). */
  numberColorClass?: string;
}

/**
 * Contador animado que se dispara al entrar al viewport.
 * Usa requestAnimationFrame con easing easeOut.
 */
export function StatCounter({
  value,
  suffix = "",
  label,
  icon,
  duration = 1600,
  formatThousands = true,
  className,
  numberColorClass = "text-olive-900",
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // Easing easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = formatThousands
    ? new Intl.NumberFormat("es-CO").format(display)
    : String(display);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col items-start gap-3", className)}
    >
      {icon && (
        <div className="h-12 w-12 rounded-lg bg-olive-500/15 text-olive-700 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div>
        <div className={cn("font-display font-bold text-4xl md:text-5xl leading-none", numberColorClass)}>
          {formatted}
          <span className="text-2xl md:text-3xl">{suffix}</span>
        </div>
        <p className="mt-2 text-sm text-concrete-700 leading-snug max-w-[200px]">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
