import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#templates", label: "Templates" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-card" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="font-display text-xl md:text-2xl font-bold tracking-tight"
        >
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-gradient-primary">GM</span>
          <span className="text-muted-foreground">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-border mt-3 animate-fade-in">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                  className="block text-base font-medium text-foreground/90 hover:text-primary py-2 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="block text-center mt-2 px-5 py-3 rounded-full font-semibold bg-gradient-primary text-primary-foreground"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
