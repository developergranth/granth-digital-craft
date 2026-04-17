import { useState } from "react";
import { ExternalLink, Dumbbell, Home, UtensilsCrossed, BedDouble, X, Star, MapPin, Clock, Users, Calendar, Search, Heart, ShoppingBag } from "lucide-react";
import gymImg from "@/assets/template-gym.jpg";
import estateImg from "@/assets/template-estate.jpg";
import restaurantImg from "@/assets/template-restaurant.jpg";
import hostelImg from "@/assets/template-hostel.jpg";
import gymTrainer from "@/assets/gym-trainer.jpg";
import gymYoga from "@/assets/gym-yoga.jpg";
import gymHiit from "@/assets/gym-hiit.jpg";
import estate1 from "@/assets/estate-1.jpg";
import estate2 from "@/assets/estate-2.jpg";
import estate3 from "@/assets/estate-3.jpg";
import estate4 from "@/assets/estate-4.jpg";
import foodRisotto from "@/assets/food-risotto.jpg";
import foodSteak from "@/assets/food-steak.jpg";
import foodSalmon from "@/assets/food-salmon.jpg";
import foodCake from "@/assets/food-cake.jpg";
import roomDorm from "@/assets/room-dorm.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomSuite from "@/assets/room-suite.jpg";

type Template = {
  id: "gym" | "estate" | "restaurant" | "hostel";
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

/* --------- Mock website previews (rendered inside the modal) --------- */

const GymPreview = ({ image }: { image: string }) => (
  <div className="space-y-6">
    {/* Hero */}
    <div className="relative h-64 rounded-2xl overflow-hidden">
      <img src={image} alt="GymPro hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 max-w-lg">
        <span className="text-xs text-cyan uppercase tracking-widest mb-2">Fitness Reimagined</span>
        <h3 className="font-display text-2xl md:text-4xl font-bold mb-3">Train Hard. Live Strong.</h3>
        <p className="text-sm text-muted-foreground mb-4">Premium equipment, expert trainers, results-driven programs.</p>
        <button className="self-start px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">Join Now</button>
      </div>
    </div>

    {/* Plans */}
    <div>
      <h4 className="font-display text-lg font-bold mb-3">Membership Plans</h4>
      <div className="grid grid-cols-3 gap-3">
        {[
          { name: "Basic", price: "$29", perks: ["Gym Access", "Locker"] },
          { name: "Pro", price: "$59", perks: ["+ Classes", "+ Sauna"], highlight: true },
          { name: "Elite", price: "$99", perks: ["+ Trainer", "+ Diet"] },
        ].map((p) => (
          <div key={p.name} className={`rounded-xl p-4 border ${p.highlight ? "bg-gradient-primary border-transparent text-primary-foreground" : "glass border-border"}`}>
            <div className="text-xs uppercase opacity-80 mb-1">{p.name}</div>
            <div className="font-display text-2xl font-bold">{p.price}<span className="text-xs opacity-70">/mo</span></div>
            <ul className="text-xs mt-2 space-y-1 opacity-90">
              {p.perks.map((x) => <li key={x}>• {x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Trainers */}
    <div>
      <h4 className="font-display text-lg font-bold mb-3">Top Trainers</h4>
      <div className="grid grid-cols-3 gap-3">
        {[
          { t: "Strength", img: gymHiit },
          { t: "HIIT", img: gymTrainer },
          { t: "Yoga", img: gymYoga },
        ].map((c) => (
          <div key={c.t} className="glass rounded-xl overflow-hidden">
            <img src={c.img} alt={`${c.t} coach`} loading="lazy" className="h-20 w-full object-cover" />
            <div className="p-3">
              <div className="font-semibold text-sm">Coach {c.t}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <Star size={10} className="fill-current text-yellow-500" /> 4.9
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EstatePreview = ({ image }: { image: string }) => (
  <div className="space-y-6">
    {/* Hero with search */}
    <div className="relative h-64 rounded-2xl overflow-hidden">
      <img src={image} alt="EstateEdge hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Find Your Dream Home</h3>
        <div className="glass-strong rounded-full p-1.5 flex items-center gap-2">
          <Search size={16} className="ml-3 text-muted-foreground" />
          <input
            disabled
            placeholder="City, neighborhood, or ZIP"
            className="flex-1 bg-transparent text-sm outline-none px-1 placeholder:text-muted-foreground"
          />
          <button className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">Search</button>
        </div>
      </div>
    </div>

    {/* Listings */}
    <div>
      <h4 className="font-display text-lg font-bold mb-3">Featured Properties</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { p: "$520k", b: "3 Bed · 2 Bath", loc: "Downtown", img: estate1 },
          { p: "$1.2M", b: "5 Bed · 4 Bath", loc: "Hillside", img: estate4 },
          { p: "$340k", b: "2 Bed · 1 Bath", loc: "Riverside", img: estate3 },
          { p: "$890k", b: "4 Bed · 3 Bath", loc: "Suburb", img: estate2 },
        ].map((l, i) => (
          <div key={i} className="glass rounded-xl overflow-hidden card-glow">
            <div className="h-28 relative overflow-hidden">
              <img src={l.img} alt={`Property in ${l.loc}`} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full glass-strong flex items-center justify-center">
                <Heart size={12} className="text-primary-foreground" />
              </button>
            </div>
            <div className="p-3">
              <div className="font-display font-bold text-base">{l.p}</div>
              <div className="text-xs text-muted-foreground">{l.b}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin size={10} /> {l.loc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RestaurantPreview = ({ image }: { image: string }) => (
  <div className="space-y-6">
    {/* Hero */}
    <div className="relative h-64 rounded-2xl overflow-hidden">
      <img src={image} alt="TasteHouse hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <span className="text-xs text-cyan uppercase tracking-widest">Fine Dining</span>
        <h3 className="font-display text-2xl md:text-4xl font-bold mt-1">Flavors That Tell a Story</h3>
        <div className="flex gap-2 mt-3">
          <button className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5">
            <Calendar size={12} /> Reserve Table
          </button>
          <button className="px-4 py-2 rounded-full glass-strong text-xs font-semibold">View Menu</button>
        </div>
      </div>
    </div>

    {/* Menu */}
    <div>
      <h4 className="font-display text-lg font-bold mb-3">Chef's Specials</h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { n: "Truffle Risotto", d: "Wild mushrooms, parmesan", p: "$28", img: foodRisotto },
          { n: "Wagyu Steak", d: "Grass-fed, charred to perfection", p: "$62", img: foodSteak },
          { n: "Seared Salmon", d: "Lemon butter, asparagus", p: "$34", img: foodSalmon },
          { n: "Lava Cake", d: "Dark chocolate, vanilla ice cream", p: "$14", img: foodCake },
        ].map((m) => (
          <div key={m.n} className="glass rounded-xl p-3 flex items-center gap-3">
            <img src={m.img} alt={m.n} loading="lazy" className="w-14 h-14 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-semibold text-sm truncate">{m.n}</div>
                <div className="text-sm text-cyan font-bold">{m.p}</div>
              </div>
              <div className="text-xs text-muted-foreground truncate">{m.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Reviews */}
    <div className="glass rounded-xl p-4 flex items-center gap-3">
      <div className="flex">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />)}
      </div>
      <div className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">4.9</span> · 1,200+ guest reviews
      </div>
    </div>
  </div>
);

const HostelPreview = ({ image }: { image: string }) => (
  <div className="space-y-6">
    {/* Hero */}
    <div className="relative h-64 rounded-2xl overflow-hidden">
      <img src={image} alt="StayNest hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Your Home Away From Home</h3>
        <div className="glass-strong rounded-2xl p-3 grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-muted-foreground mb-0.5">Check-in</div>
            <div className="font-semibold">Apr 20</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-0.5">Check-out</div>
            <div className="font-semibold">Apr 24</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-0.5">Guests</div>
            <div className="font-semibold">2 · 1 Room</div>
          </div>
        </div>
      </div>
    </div>

    {/* Rooms */}
    <div>
      <h4 className="font-display text-lg font-bold mb-3">Available Rooms</h4>
      <div className="space-y-3">
        {[
          { n: "Cozy Dorm Bed", g: "1 Guest", p: "$18", tag: "Best Value" },
          { n: "Private Twin Room", g: "2 Guests", p: "$45", tag: "Popular" },
          { n: "Deluxe Suite", g: "4 Guests", p: "$120", tag: "Premium" },
        ].map((r, i) => (
          <div key={r.n} className="glass rounded-xl p-3 flex items-center gap-3 card-glow">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${i === 0 ? "from-primary to-cyan" : i === 1 ? "from-cyan to-violet" : "from-violet to-primary"} shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="font-semibold text-sm">{r.n}</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-cyan border border-border">{r.tag}</span>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <Users size={10} /> {r.g}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="font-display font-bold text-base">{r.p}</div>
              <div className="text-[10px] text-muted-foreground">/night</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Trust strip */}
    <div className="grid grid-cols-3 gap-2 text-center">
      {[
        { i: Clock, t: "24/7 Reception" },
        { i: ShoppingBag, t: "Free Breakfast" },
        { i: Star, t: "4.8 Rated" },
      ].map((x) => (
        <div key={x.t} className="glass rounded-xl p-3">
          <x.i size={16} className="mx-auto text-cyan mb-1" />
          <div className="text-xs text-muted-foreground">{x.t}</div>
        </div>
      ))}
    </div>
  </div>
);

const previewMap = {
  gym: GymPreview,
  estate: EstatePreview,
  restaurant: RestaurantPreview,
  hostel: HostelPreview,
};

const Templates = () => {
  const [active, setActive] = useState<Template | null>(null);
  const PreviewComp = active ? previewMap[active.id] : null;

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
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name} ${t.category} website template preview by Granth Mittal`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 right-4 glass-strong rounded-lg flex items-center gap-1.5 px-3 py-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground truncate">
                    {t.name.toLowerCase()}.com
                  </span>
                </div>
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${t.accent} text-primary-foreground`}>
                  {t.category}
                </span>
              </div>

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

      {/* Modal — full website preview */}
      {active && PreviewComp && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-start md:items-center justify-center p-3 md:p-6 animate-fade-in overflow-y-auto"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl glass-strong rounded-3xl overflow-hidden animate-fade-in-up my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mock browser bar */}
            <div className="sticky top-0 z-10 glass-strong border-b border-border flex items-center gap-2 px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-surface text-xs text-muted-foreground truncate">
                https://{active.name.toLowerCase()}.com
              </div>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close preview"
              >
                <X size={16} />
              </button>
            </div>

            {/* Title bar */}
            <div className="px-6 md:px-8 pt-6 pb-2 flex items-center justify-between gap-4">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${active.accent} text-primary-foreground mb-2`}>
                  {active.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{active.name}</h3>
                <p className="text-sm text-muted-foreground italic">{active.tagline}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.accent} flex items-center justify-center shrink-0`}>
                <active.Icon className="text-primary-foreground" size={22} />
              </div>
            </div>

            {/* Live preview */}
            <div className="px-4 md:px-8 py-6">
              <PreviewComp image={active.image} />
            </div>

            {/* CTA */}
            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border mt-2">
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <div>
                  <h4 className="font-display font-bold text-base mb-1">Like this template?</h4>
                  <p className="text-xs text-muted-foreground">I'll customize it for your brand and business.</p>
                </div>
                <a
                  href={`https://wa.me/919602882318?text=${encodeURIComponent(`Hi Granth, I'm interested in the ${active.name} template.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold glow-primary hover:scale-105 transition-transform"
                >
                  Get This Template
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Templates;
