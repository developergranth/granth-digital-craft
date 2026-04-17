import { Globe, Package, ShoppingCart, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Page",
    desc: "High-converting, visually stunning landing pages specially customized for your brand.",
    color: "from-primary to-cyan",
  },
  {
    icon: Package,
    title: "SaaS Application",
    desc: "Custom web apps built to scale your software business and serve users globally.",
    color: "from-violet to-primary",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    desc: "Full-featured online stores to sell your products globally with seamless checkout.",
    color: "from-cyan to-violet",
  },
  {
    icon: Bot,
    title: "AI Automation Workflow",
    desc: "Smart automations to eliminate repetitive manual tasks and boost team efficiency.",
    color: "from-primary to-violet",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What I Build <span className="text-gradient">For You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to launch, scale, and automate — under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-glow glass rounded-2xl p-6 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 glow-primary`}>
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
