import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const projectTypes = [
  "Landing Page",
  "SaaS Application",
  "E-Commerce Store",
  "AI Automation",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message and open chat
    const text =
      `Hi Granth! I'm ${form.name}.%0A` +
      `📱 ${form.mobile}%0A` +
      `📧 ${form.email}%0A` +
      `💼 Project: ${form.type}%0A%0A` +
      `${form.message}`;
    window.open(`https://wa.me/919602882318?text=${text}`, "_blank");
    toast({
      title: "Message ready!",
      description: "Opening WhatsApp to send your details.",
    });
    setForm({ name: "", mobile: "", email: "", type: "", message: "" });
  };

  const inputCls =
    "w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell me about your project — we'll discuss the details and pricing on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 reveal"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls}
              />
              <input
                required
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className={inputCls}
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`${inputCls} mb-4`}
            />
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className={`${inputCls} mb-4`}
            >
              <option value="" disabled>Select Project Type</option>
              {projectTypes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputCls} resize-none mb-5`}
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:scale-[1.02] transition-transform"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>

          {/* Direct CTA card */}
          <aside className="lg:col-span-2 reveal">
            <div className="glass rounded-3xl p-6 md:p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 glow-primary animate-pulse-glow">
                <MessageCircle className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Prefer to talk directly?
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                Skip the form — message me on WhatsApp for a quick response.
              </p>

              <div className="glass rounded-2xl px-4 py-3 mb-5 flex items-center gap-3">
                <Phone size={18} className="text-cyan" />
                <span className="font-mono font-semibold">+91 9602882318</span>
              </div>

              <a
                href="https://wa.me/919602882318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-cyan text-primary-foreground font-semibold hover:scale-[1.02] transition-transform mb-5"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>

              <div className="mt-auto pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  💡 <span className="text-foreground font-semibold">No fixed pricing</span> — every
                  project is unique. Let's understand your needs first.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
