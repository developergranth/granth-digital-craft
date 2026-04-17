import { useState } from "react";
import {
  ExternalLink, Dumbbell, Home, UtensilsCrossed, BedDouble, X, Star, MapPin, Clock, Users,
  Calendar, Search, Heart, ShoppingBag, Phone, Mail, ChevronRight, Wifi, Coffee, Shield,
  Award, Flame, Zap, Bath, Bed, Maximize, Filter,
} from "lucide-react";
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
  { id: "gym", name: "GymPro", category: "Fitness & Gym", tagline: "Push Limits. Build Strength.", Icon: Dumbbell, image: gymImg, accent: "from-primary to-cyan", features: ["Class Booking", "Trainer Profiles", "Membership Plans", "Live Schedule"] },
  { id: "estate", name: "EstateEdge", category: "Real Estate", tagline: "Find Your Dream Home.", Icon: Home, image: estateImg, accent: "from-violet to-primary", features: ["Property Listings", "Map Search", "Virtual Tours", "Agent Contact"] },
  { id: "restaurant", name: "TasteHouse", category: "Restaurant", tagline: "Flavors That Tell a Story.", Icon: UtensilsCrossed, image: restaurantImg, accent: "from-cyan to-violet", features: ["Online Menu", "Table Reservations", "Chef's Specials", "Reviews"] },
  { id: "hostel", name: "StayNest", category: "Hostel Booking", tagline: "Your Home Away From Home.", Icon: BedDouble, image: hostelImg, accent: "from-primary to-violet", features: ["Room Booking", "Price Filters", "Guest Reviews", "Instant Confirm"] },
];

/* ====================================================================
   Each preview below is a self-contained mini-website with its OWN
   navbar, hero, multiple sections and footer — rendered inside a
   scrollable container so it feels like a real site running inside
   the portfolio.
   ==================================================================== */

/* ---------- shared mini site shell pieces ---------- */
const SiteNav = ({ brand, links, accent, Icon }: { brand: string; links: string[]; accent: string; Icon: typeof Dumbbell }) => (
  <nav className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border px-5 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center`}>
        <Icon size={14} className="text-primary-foreground" />
      </div>
      <span className="font-display font-bold text-sm">{brand}</span>
    </div>
    <ul className="hidden sm:flex items-center gap-5 text-xs text-muted-foreground">
      {links.map((l) => <li key={l} className="hover:text-foreground cursor-default">{l}</li>)}
    </ul>
    <button className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${accent} text-primary-foreground`}>Get Started</button>
  </nav>
);

const SiteFooter = ({ brand, accent }: { brand: string; accent: string }) => (
  <footer className="border-t border-border px-6 py-6 mt-2">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <div className={`font-display font-bold text-sm bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>{brand}</div>
        <p className="text-xs text-muted-foreground mt-1">© 2025 {brand}. Crafted by Granth Mittal.</p>
      </div>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><Mail size={12} /> hello@{brand.toLowerCase()}.com</span>
        <span className="flex items-center gap-1.5"><Phone size={12} /> +91 96028 82318</span>
      </div>
    </div>
  </footer>
);

/* ====================== GYM ====================== */
const GymPreview = ({ image }: { image: string }) => (
  <div>
    <SiteNav brand="GymPro" links={["Home", "Classes", "Trainers", "Pricing", "Contact"]} accent="from-primary to-cyan" Icon={Dumbbell} />

    {/* Hero */}
    <section className="relative h-80">
      <img src={image} alt="GymPro hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 max-w-xl">
        <span className="text-xs text-cyan uppercase tracking-widest mb-2">Fitness Reimagined</span>
        <h3 className="font-display text-3xl md:text-5xl font-bold mb-3 leading-tight">Train Hard.<br/>Live Strong.</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-md">Premium equipment, expert coaches, results-driven programs that transform your body and mind.</p>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">Join Now</button>
          <button className="px-5 py-2.5 rounded-full glass-strong text-sm font-semibold">Free Trial</button>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="px-6 py-6 grid grid-cols-4 gap-3 border-y border-border bg-surface/40">
      {[{n:"5K+",l:"Members"},{n:"40+",l:"Trainers"},{n:"120",l:"Weekly Classes"},{n:"4.9★",l:"Rated"}].map((s)=>(
        <div key={s.l} className="text-center">
          <div className="font-display font-bold text-xl text-gradient">{s.n}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.l}</div>
        </div>
      ))}
    </section>

    {/* Programs */}
    <section className="px-6 py-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-xs text-cyan uppercase tracking-widest">Programs</span>
          <h4 className="font-display text-2xl font-bold">Train Your Way</h4>
        </div>
        <button className="text-xs text-primary flex items-center gap-1">View all <ChevronRight size={12} /></button>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { t: "Strength", img: gymHiit, d: "Build raw power & muscle", icon: Dumbbell },
          { t: "HIIT", img: gymTrainer, d: "Burn fat in 30 minutes", icon: Flame },
          { t: "Yoga & Mobility", img: gymYoga, d: "Flexibility & recovery", icon: Zap },
        ].map((c) => (
          <div key={c.t} className="glass rounded-2xl overflow-hidden card-glow group">
            <div className="relative h-32 overflow-hidden">
              <img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-2 left-3 flex items-center gap-2">
                <c.icon size={14} className="text-cyan" />
                <span className="font-semibold text-sm">{c.t}</span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs text-muted-foreground">{c.d}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-cyan flex items-center gap-1"><Star size={10} className="fill-current" /> 4.9</span>
                <button className="text-xs text-primary">Book →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Pricing */}
    <section className="px-6 py-8 bg-surface/30 border-y border-border">
      <div className="text-center mb-5">
        <span className="text-xs text-cyan uppercase tracking-widest">Pricing</span>
        <h4 className="font-display text-2xl font-bold">Membership Plans</h4>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { name: "Basic", price: "₹1,499", perks: ["Gym Access", "Locker Room", "1 Group Class/wk"] },
          { name: "Pro", price: "₹2,999", perks: ["All Basic", "Unlimited Classes", "Sauna & Steam"], highlight: true },
          { name: "Elite", price: "₹4,999", perks: ["All Pro", "Personal Trainer", "Diet Plan"] },
        ].map((p) => (
          <div key={p.name} className={`rounded-2xl p-5 border ${p.highlight ? "bg-gradient-primary border-transparent text-primary-foreground scale-[1.02]" : "glass border-border"}`}>
            {p.highlight && <div className="text-[10px] uppercase tracking-widest mb-1 opacity-80">Most Popular</div>}
            <div className="text-xs uppercase opacity-80 mb-1">{p.name}</div>
            <div className="font-display text-3xl font-bold">{p.price}<span className="text-xs opacity-70">/mo</span></div>
            <ul className="text-xs mt-3 space-y-1.5 opacity-90">
              {p.perks.map((x) => <li key={x} className="flex items-center gap-1.5">✓ {x}</li>)}
            </ul>
            <button className={`mt-4 w-full py-2 rounded-full text-xs font-semibold ${p.highlight ? "bg-background/20" : "bg-gradient-primary text-primary-foreground"}`}>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonial */}
    <section className="px-6 py-8">
      <div className="glass rounded-2xl p-6 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />)}
        </div>
        <p className="text-sm italic text-muted-foreground">"GymPro transformed my fitness journey. Coaches are world-class and the community is unmatched."</p>
        <div className="text-xs mt-3 font-semibold">— Priya S., Member since 2023</div>
      </div>
    </section>

    <SiteFooter brand="GymPro" accent="from-primary to-cyan" />
  </div>
);

/* ====================== ESTATE ====================== */
const EstatePreview = ({ image }: { image: string }) => (
  <div>
    <SiteNav brand="EstateEdge" links={["Buy", "Rent", "Sell", "Agents", "Blog"]} accent="from-violet to-primary" Icon={Home} />

    {/* Hero with search */}
    <section className="relative h-80">
      <img src={image} alt="EstateEdge hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
      <div className="absolute inset-x-0 bottom-6 px-6">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">Find Your Dream Home</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">Curated properties from trusted agents nationwide.</p>
        <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 flex-1 px-3">
            <Search size={14} className="text-muted-foreground" />
            <input disabled placeholder="City, neighborhood, or ZIP" className="flex-1 bg-transparent text-sm outline-none py-2 placeholder:text-muted-foreground" />
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 border-l border-border">
            <Filter size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Any Price</span>
          </div>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet to-primary text-primary-foreground text-sm font-semibold">Search</button>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="px-6 py-6 border-b border-border">
      <div className="grid grid-cols-4 gap-2 text-xs">
        {["Apartments","Villas","Commercial","Plots"].map((c)=>(
          <button key={c} className="glass rounded-xl py-2.5 hover:bg-white/[0.06] transition-colors font-medium">{c}</button>
        ))}
      </div>
    </section>

    {/* Listings */}
    <section className="px-6 py-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-xs text-violet uppercase tracking-widest">Featured</span>
          <h4 className="font-display text-2xl font-bold">Hand-picked Properties</h4>
        </div>
        <button className="text-xs text-primary flex items-center gap-1">View all <ChevronRight size={12} /></button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { p: "₹4.4 Cr", b: "3 Bed · 2 Bath · 1,800 sqft", loc: "Downtown", img: estate1, tag: "New" },
          { p: "₹10.2 Cr", b: "5 Bed · 4 Bath · 3,200 sqft", loc: "Hillside", img: estate4, tag: "Featured" },
          { p: "₹2.9 Cr", b: "2 Bed · 1 Bath · 1,100 sqft", loc: "Riverside", img: estate3, tag: "Hot" },
          { p: "₹7.6 Cr", b: "4 Bed · 3 Bath · 2,500 sqft", loc: "Suburb Heights", img: estate2 },
        ].map((l, i) => (
          <article key={i} className="glass rounded-2xl overflow-hidden card-glow group">
            <div className="h-40 relative overflow-hidden">
              <img src={l.img} alt={`Property in ${l.loc}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              {l.tag && <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-violet to-primary text-primary-foreground font-semibold">{l.tag}</span>}
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition-transform">
                <Heart size={14} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-baseline justify-between">
                <div className="font-display font-bold text-lg">{l.p}</div>
                <span className="text-[10px] text-muted-foreground">For Sale</span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1"><Bed size={11} /> {l.b.split("·")[0].trim()}</span>
                <span className="flex items-center gap-1"><Bath size={11} /> {l.b.split("·")[1]?.trim()}</span>
                <span className="flex items-center gap-1"><Maximize size={11} /> {l.b.split("·")[2]?.trim()}</span>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin size={11} /> {l.loc}</span>
                <button className="text-xs text-primary font-semibold">Tour →</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* CTA banner */}
    <section className="px-6 py-8">
      <div className="glass-strong rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-violet/10 to-primary/10">
        <div>
          <h4 className="font-display text-xl font-bold">Selling your home?</h4>
          <p className="text-xs text-muted-foreground">Get a free valuation from our expert agents.</p>
        </div>
        <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet to-primary text-primary-foreground text-sm font-semibold whitespace-nowrap">List with Us</button>
      </div>
    </section>

    <SiteFooter brand="EstateEdge" accent="from-violet to-primary" />
  </div>
);

/* ====================== RESTAURANT ====================== */
const RestaurantPreview = ({ image }: { image: string }) => (
  <div>
    <SiteNav brand="TasteHouse" links={["Menu", "Reservations", "Chef", "Events", "Contact"]} accent="from-cyan to-violet" Icon={UtensilsCrossed} />

    {/* Hero */}
    <section className="relative h-80">
      <img src={image} alt="TasteHouse hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      <div className="absolute inset-x-0 bottom-8 px-6 text-center">
        <span className="text-xs text-cyan uppercase tracking-[0.3em]">Fine Dining · Est. 2018</span>
        <h3 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-3">Flavors That<br/>Tell a Story</h3>
        <div className="flex justify-center gap-2 mt-4">
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan to-violet text-primary-foreground text-sm font-semibold flex items-center gap-1.5">
            <Calendar size={14} /> Reserve Table
          </button>
          <button className="px-5 py-2.5 rounded-full glass-strong text-sm font-semibold">View Menu</button>
        </div>
      </div>
    </section>

    {/* About strip */}
    <section className="px-6 py-6 grid grid-cols-3 gap-4 text-center border-y border-border bg-surface/30">
      {[{i:Award,t:"Michelin Star"},{i:Users,t:"50+ Seats"},{i:Clock,t:"Open 11am–11pm"}].map((x)=>(
        <div key={x.t} className="flex flex-col items-center gap-1">
          <x.i size={18} className="text-cyan" />
          <div className="text-xs text-muted-foreground">{x.t}</div>
        </div>
      ))}
    </section>

    {/* Menu */}
    <section className="px-6 py-8">
      <div className="text-center mb-5">
        <span className="text-xs text-cyan uppercase tracking-widest">Menu</span>
        <h4 className="font-display text-2xl font-bold">Chef's Specials</h4>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { n: "Truffle Risotto", d: "Wild mushrooms, parmesan, fresh herbs", p: "₹2,400", img: foodRisotto, tag: "Vegetarian" },
          { n: "Wagyu Steak", d: "Grass-fed, charred to perfection, jus", p: "₹5,200", img: foodSteak, tag: "Signature" },
          { n: "Seared Salmon", d: "Lemon butter, asparagus, capers", p: "₹2,900", img: foodSalmon },
          { n: "Lava Cake", d: "Dark chocolate, vanilla bean ice cream", p: "₹1,200", img: foodCake, tag: "Dessert" },
        ].map((m) => (
          <article key={m.n} className="glass rounded-2xl p-3 flex items-center gap-3 card-glow">
            <img src={m.img} alt={m.n} loading="lazy" className="w-20 h-20 rounded-xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-semibold text-sm truncate">{m.n}</div>
                <div className="text-base text-cyan font-bold whitespace-nowrap">{m.p}</div>
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">{m.d}</div>
              {m.tag && <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-cyan border border-border">{m.tag}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Reservation */}
    <section className="px-6 py-8 bg-surface/30 border-y border-border">
      <div className="max-w-md mx-auto text-center">
        <h4 className="font-display text-xl font-bold mb-1">Reserve Your Table</h4>
        <p className="text-xs text-muted-foreground mb-4">Best seats fill up fast — book 24h in advance.</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {["Date","Time","Guests"].map((l)=>(
            <div key={l} className="glass-strong rounded-lg p-2 text-left">
              <div className="text-[10px] text-muted-foreground">{l}</div>
              <div className="text-xs font-semibold">{l==="Date"?"Apr 22":l==="Time"?"7:30 PM":"2 People"}</div>
            </div>
          ))}
        </div>
        <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-cyan to-violet text-primary-foreground text-sm font-semibold">Confirm Reservation</button>
      </div>
    </section>

    {/* Reviews */}
    <section className="px-6 py-8">
      <div className="glass rounded-2xl p-5 flex items-center gap-4">
        <div className="text-center shrink-0">
          <div className="font-display text-3xl font-bold text-cyan">4.9</div>
          <div className="flex justify-center mt-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-500 text-yellow-500" />)}
          </div>
        </div>
        <div className="border-l border-border pl-4 flex-1">
          <p className="text-xs italic text-muted-foreground">"An unforgettable culinary journey. Every dish is a work of art." — Food Critic Weekly</p>
          <div className="text-[10px] text-muted-foreground mt-1">Based on 1,200+ guest reviews</div>
        </div>
      </div>
    </section>

    <SiteFooter brand="TasteHouse" accent="from-cyan to-violet" />
  </div>
);

/* ====================== HOSTEL ====================== */
const HostelPreview = ({ image }: { image: string }) => (
  <div>
    <SiteNav brand="StayNest" links={["Rooms", "Locations", "Experiences", "About", "Contact"]} accent="from-primary to-violet" Icon={BedDouble} />

    {/* Hero with booking */}
    <section className="relative h-80">
      <img src={image} alt="StayNest hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      <div className="absolute inset-x-0 bottom-6 px-6">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-1 text-center">Your Home Away From Home</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">120+ hostels across 30 cities. Book in 60 seconds.</p>
        <div className="glass-strong rounded-2xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs max-w-2xl mx-auto">
          <div className="px-2"><div className="text-muted-foreground mb-0.5 text-[10px] uppercase">Location</div><div className="font-semibold">Goa, India</div></div>
          <div className="px-2 sm:border-l border-border"><div className="text-muted-foreground mb-0.5 text-[10px] uppercase">Check-in</div><div className="font-semibold">Apr 20</div></div>
          <div className="px-2 sm:border-l border-border"><div className="text-muted-foreground mb-0.5 text-[10px] uppercase">Check-out</div><div className="font-semibold">Apr 24</div></div>
          <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-primary to-violet text-primary-foreground font-semibold">Search</button>
        </div>
      </div>
    </section>

    {/* Perks */}
    <section className="px-6 py-6 grid grid-cols-4 gap-2 border-b border-border">
      {[{i:Wifi,t:"Free WiFi"},{i:Coffee,t:"Breakfast"},{i:Shield,t:"Secure"},{i:Clock,t:"24/7"}].map((x)=>(
        <div key={x.t} className="text-center glass rounded-xl py-3">
          <x.i size={16} className="mx-auto text-cyan mb-1" />
          <div className="text-[10px] text-muted-foreground">{x.t}</div>
        </div>
      ))}
    </section>

    {/* Rooms */}
    <section className="px-6 py-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-xs text-cyan uppercase tracking-widest">Stay</span>
          <h4 className="font-display text-2xl font-bold">Available Rooms</h4>
        </div>
        <button className="text-xs text-primary flex items-center gap-1">All rooms <ChevronRight size={12} /></button>
      </div>
      <div className="space-y-3">
        {[
          { n: "Cozy Dorm Bed", g: "1 Guest · Shared", p: "₹799", tag: "Best Value", img: roomDorm, perks: ["Locker","Reading Light","AC"] },
          { n: "Private Twin Room", g: "2 Guests · Ensuite", p: "₹1,999", tag: "Popular", img: roomTwin, perks: ["Private Bath","Balcony","WiFi"] },
          { n: "Deluxe Suite", g: "4 Guests · Premium", p: "₹4,999", tag: "Premium", img: roomSuite, perks: ["King Bed","Sea View","Lounge"] },
        ].map((r) => (
          <article key={r.n} className="glass rounded-2xl overflow-hidden card-glow flex flex-col sm:flex-row">
            <img src={r.img} alt={r.n} loading="lazy" className="w-full sm:w-40 h-32 sm:h-auto object-cover shrink-0" />
            <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-semibold text-sm">{r.n}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-cyan border border-border">{r.tag}</span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Users size={11} /> {r.g}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {r.perks.map((p)=>(<span key={p} className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-muted-foreground">{p}</span>))}
                </div>
              </div>
              <div className="text-right shrink-0 sm:border-l sm:border-border sm:pl-4">
                <div className="font-display font-bold text-xl">{r.p}<span className="text-[10px] text-muted-foreground font-normal">/night</span></div>
                <button className="mt-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-violet text-primary-foreground text-xs font-semibold">Book Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Reviews */}
    <section className="px-6 py-8 bg-surface/30 border-y border-border">
      <div className="text-center mb-4">
        <span className="text-xs text-cyan uppercase tracking-widest">Reviews</span>
        <h4 className="font-display text-2xl font-bold">Loved by Travelers</h4>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { n: "Maya · Berlin", q: "Best hostel I've stayed at. Spotless rooms and amazing staff." },
          { n: "Arjun · Mumbai", q: "Made friends from 12 countries in one weekend. Will return!" },
        ].map((r)=>(
          <div key={r.n} className="glass rounded-xl p-4">
            <div className="flex mb-1">{[...Array(5)].map((_,i)=><Star key={i} size={11} className="fill-yellow-500 text-yellow-500" />)}</div>
            <p className="text-xs italic text-muted-foreground">"{r.q}"</p>
            <div className="text-[10px] mt-2 font-semibold">— {r.n}</div>
          </div>
        ))}
      </div>
    </section>

    <SiteFooter brand="StayNest" accent="from-primary to-violet" />
  </div>
);

const previewMap = { gym: GymPreview, estate: EstatePreview, restaurant: RestaurantPreview, hostel: HostelPreview };

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
                  View Live Template
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal — full scrollable mini-website preview */}
      {active && PreviewComp && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[95vh] md:h-[90vh] glass-strong rounded-2xl md:rounded-3xl overflow-hidden flex flex-col animate-fade-in-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mock browser chrome */}
            <div className="shrink-0 border-b border-border flex items-center gap-2 px-3 md:px-4 py-2.5 bg-surface/80">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-background/60 text-xs text-muted-foreground truncate flex items-center gap-2">
                <span className="text-emerald-500">●</span> https://{active.name.toLowerCase()}.com
              </div>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close preview"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable mini-website viewport */}
            <div className="flex-1 overflow-y-auto bg-background overscroll-contain">
              <PreviewComp image={active.image} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Templates;
