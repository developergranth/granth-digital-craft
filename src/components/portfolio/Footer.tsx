import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-xl font-bold tracking-tight inline-block mb-1">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-gradient-primary">GM</span>
            <span className="text-muted-foreground">/&gt;</span>
          </a>
          <p className="text-xs text-muted-foreground italic">
            Turning ideas into digital experiences.
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © 2025 Granth Mittal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
