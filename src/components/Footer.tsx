import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Soham24608" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sohambhonge" },
  { icon: Instagram, href: "https://www.instagram.com/sohambhonge?igsh=MXVvZWY1a3h3bW1paQ==" },
  { icon: Mail, href: "mailto:sohambhonge73@gmail.com" },
];

const Footer = () => (
  <footer className="py-6 bg-card border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Soham Bhonge. All rights reserved.
      </p>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
