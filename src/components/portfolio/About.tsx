import { Zap, Gem, Wallet } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnarounds without compromising quality." },
  { icon: Gem, title: "Quality Work", desc: "Pixel-perfect, performance-optimized builds." },
  { icon: Wallet, title: "Best Value", desc: "Transparent pricing tailored to your needs." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Who I Am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Profile image */}
          <div className="lg:col-span-2 reveal flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* glowing animated ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-primary opacity-70 blur-2xl animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-gradient-x">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                  <img
                    src={profileImg}
                    alt="Granth Mittal — Web Developer"
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-3 -right-3 glass-strong rounded-2xl px-4 py-3 animate-float">
                <div className="text-xs text-muted-foreground">Coding since</div>
                <div className="font-display font-bold text-gradient-primary">2020</div>
              </div>
            </div>
          </div>

          {/* Bio + cards */}
          <div className="lg:col-span-3 reveal">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-snug">
              Hi, I'm <span className="text-gradient-primary">Granth Mittal</span> — a web developer passionate about helping businesses grow online.
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              I build fast, modern, and conversion-focused websites and automation systems that
              reduce manual work and drive real results. From sleek landing pages to full-scale
              SaaS apps and AI workflows — I turn your ideas into digital experiences that perform.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="card-glow glass rounded-2xl p-5 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-3 glow-primary">
                    <h.icon className="text-primary-foreground" size={22} />
                  </div>
                  <div className="font-display font-bold text-foreground mb-1">{h.title}</div>
                  <div className="text-xs text-muted-foreground">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
