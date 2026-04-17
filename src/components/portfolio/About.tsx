import { Zap, Gem, Wallet } from "lucide-react";

const highlights = [
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnarounds without compromising quality." },
  { icon: Gem, title: "Quality Work", desc: "Pixel-perfect, performance-optimized builds." },
  { icon: Wallet, title: "Best Value", desc: "Transparent pricing tailored to your needs." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Who I Am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
        </div>

        {/* Bio */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-snug">
            Hi, I'm <span className="text-gradient-primary">Granth Mittal</span> — a web developer passionate about helping businesses grow online.
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I build fast, modern, and conversion-focused websites and automation systems that
            reduce manual work and drive real results. From sleek landing pages to full-scale
            SaaS apps and AI workflows — I turn your ideas into digital experiences that perform.
          </p>
        </div>

        {/* Subheading for highlights */}
        <div className="text-center mb-8 reveal">
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            The reason why you should <span className="text-gradient-primary">prefer me</span>
          </h3>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-5 reveal">
          {highlights.map((h) => (
            <div key={h.title} className="card-glow glass rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4 glow-primary">
                <h.icon className="text-primary-foreground" size={24} />
              </div>
              <div className="font-display font-bold text-foreground mb-1.5">{h.title}</div>
              <div className="text-sm text-muted-foreground">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
