import { whatsappLink } from "@/lib/utils";

/**
 * Botón flotante de WhatsApp.
 * Posición fija bottom-right, presente en todas las páginas vía layout raíz.
 * Animación pulse muy sutil cada ~2s.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-soft"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform group-hover:scale-105 group-active:scale-95">
        {/* Logo WhatsApp como SVG inline (sin dependencias) */}
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M16.001 3C9.374 3 4 8.373 4 15c0 2.396.692 4.633 1.886 6.524L4 29l7.685-1.852A11.952 11.952 0 0 0 16.001 28C22.628 28 28 22.628 28 16S22.628 3 16.001 3zm0 22.5c-1.74 0-3.404-.45-4.857-1.236l-.348-.187-4.563 1.1 1.118-4.443-.227-.367A9.49 9.49 0 0 1 6.5 16c0-5.24 4.262-9.5 9.501-9.5 5.241 0 9.501 4.26 9.501 9.5s-4.26 9.5-9.501 9.5zm5.234-7.115c-.287-.144-1.696-.836-1.96-.931-.262-.096-.453-.144-.643.143-.19.287-.737.93-.904 1.121-.167.19-.334.215-.62.072-.287-.144-1.212-.447-2.31-1.424-.854-.762-1.43-1.7-1.598-1.987-.167-.287-.018-.442.126-.585.13-.13.287-.334.43-.501.143-.167.19-.287.286-.478.096-.19.048-.358-.024-.501-.072-.144-.643-1.548-.88-2.122-.232-.557-.467-.481-.642-.49l-.55-.01c-.19 0-.501.071-.764.358-.262.287-1.002.98-1.002 2.39 0 1.41 1.026 2.772 1.17 2.963.143.19 2.019 3.084 4.892 4.325.683.295 1.215.471 1.63.603.685.218 1.308.187 1.8.113.55-.082 1.696-.694 1.935-1.363.239-.67.239-1.243.167-1.363-.072-.12-.262-.19-.55-.334z" />
        </svg>
      </span>
    </a>
  );
}
