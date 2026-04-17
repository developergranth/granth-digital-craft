import { MessageCircle } from "lucide-react";

/**
 * Floating WhatsApp button — fixed bottom-right on every page.
 */
const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919602882318"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] group"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform">
        <MessageCircle className="text-white" size={26} fill="white" strokeWidth={1.5} />
      </span>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 glass-strong px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with me!
      </span>
    </a>
  );
};

export default WhatsAppFloat;
