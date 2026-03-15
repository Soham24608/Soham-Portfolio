import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Soham24608", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sohambhonge", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sohambhonge?igsh=MXVvZWY1a3h3bW1paQ==", label: "Instagram" },
  { icon: Mail, href: "mailto:sohambhonge73@gmail.com", label: "Email" },
];

const Hero = () => (
  <section className="min-h-screen flex items-center hero-bg pt-16">
    <div className="container grid md:grid-cols-2 gap-12 items-center py-20">
      <div className="order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
          Hi, I'm <span className="text-gradient">Soham Bhonge</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Data Enthusiast | Python | SQL | Power BI | Looker Studio
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Download Resume
          </a>
        </div>
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden profile-ring">
          <img
            src={profilePhoto}
            alt="Soham Bhonge"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
