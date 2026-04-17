import { useState } from "react";
import { ExternalLink, Dumbbell, Home, UtensilsCrossed, BedDouble, X } from "lucide-react";
import gymImg from "@/assets/template-gym.jpg";
import estateImg from "@/assets/template-estate.jpg";
import restaurantImg from "@/assets/template-restaurant.jpg";
import hostelImg from "@/assets/template-hostel.jpg";

type Template = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  Icon: typeof Dumbbell;
  image: string;
  accent: string;
  features: string[];
};

const templates: Template[] = [
  {
    id: "gym",
    name: "GymPro",
    category: "Fitness & Gym",
    tagline: "Push Limits. Build Strength.",
    Icon: Dumbbell,
    image: gymImg,
    accent: "from-primary to-cyan",
    features: ["Class Booking", "Trainer Profiles", "Membership Plans", "Live Schedule"],
  },
  {
    id: "estate",
    name: "EstateEdge",
    category: "Real Estate",
    tagline: "Find Your Dream Home.",
    Icon: Home,
    image: estateImg,
    accent: "from-violet to-primary",
    features: ["Property Listings", "Map Search", "Virtual Tours", "Agent Contact"],
  },
  {
    id: "restaurant",
    name: "TasteHouse",
    category: "Restaurant",
    tagline: "Flavors That Tell a Story.",
    Icon: UtensilsCrossed,
    image: restaurantImg,
    accent: "from-cyan to-violet",
    features: ["Online Menu", "Table Reservations", "Chef's Specials", "Reviews"],
  },
  {
    id: "hostel",
    name: "StayNest",
    category: "Hostel Booking",
    tagline: "Your Home Away From Home.",
    Icon: BedDouble,
    image: hostelImg,
    accent: "from-primary to-violet",
    features: ["Room Booking", "Price Filters", "Guest Reviews", "Instant Confirm"],
  },
];

const Templates = () => {
  const [active, setActive] = useState<Template | null>(null);

  return (
    <section id="templates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Templates I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real examples of what your website could look like.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {templates.map((t, i) => (
            <article
              key={t.id}
              className="card-glow glass rounded-3xl overflow-hidden reveal group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setActive(t)}
            >
              {/* Image preview */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name} ${t.category} template preview`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* Mock browser bar */}
                <div className="absolute top-4 left-4 right-4 glass-strong rounded-lg flex items-center gap-1.5 px-3 py-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground truncate">
                    {t.name.toLowerCase()}.com
                  </span>
                </div>
                {/* Category tag */}
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${t.accent} text-primary-foreground`}>
                  {t.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-1">{t.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{t.tagline}</p>
                  </div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center shrink-0`}>
                    <t.Icon className="text-primary-foreground" size={20} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {t.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-surface-elevated text-muted-foreground border border-border">
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); setActive(t); }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full glass hover:bg-white/[0.06] font-semibold text-sm transition-all group/btn"
                >
                  View Template
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal preview */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] glass-strong rounded-3xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${active.accent} text-primary-foreground mb-3`}>
                  {active.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold">{active.name}</h3>
                <p className="text-muted-foreground italic mt-1">{active.tagline}</p>
              </div>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <h4 className="font-display text-lg font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {active.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.accent}`} />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919602882318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-transform"
              >
                Get This Template
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Templates;
