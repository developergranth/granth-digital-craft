import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const phrases = ["Landing Pages", "SaaS Apps", "E-Commerce", "AI Workflows"];

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect cycling through phrases
  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-70" />
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(var(--${i % 2 === 0 ? "primary" : "accent-violet"}) / 0.6)`,
              boxShadow: `0 0 12px hsl(var(--${i % 2 === 0 ? "primary" : "accent-violet"}) / 0.7)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-xs md:text-sm text-muted-foreground font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
          I Build Websites That{" "}
          <span className="text-gradient animate-gradient-x bg-gradient-primary bg-clip-text text-transparent">
            Work For Your Business
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Web Developer · SaaS · E-Commerce · AI Automation
        </p>

        {/* Typing line */}
        <p
          className="text-lg md:text-xl mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-muted-foreground">I craft </span>
          <span className="text-gradient-primary font-semibold caret">{text}</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => scrollTo("#templates")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold transition-all hover:scale-105 glow-primary"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://wa.me/919602882318"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-semibold transition-all hover:bg-white/[0.08] hover:scale-105"
          >
            <MessageCircle size={18} className="text-cyan" />
            Let's Talk on WhatsApp
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { n: "50+", l: "Projects" },
            { n: "100%", l: "Satisfaction" },
            { n: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl py-4 px-2">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
