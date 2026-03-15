import { Mail, Github, Linkedin, Instagram, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 section-alt">
    <div className="container max-w-2xl text-center">
      <h2 className="text-3xl font-heading font-bold mb-4">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        I'm always open to discussing data projects, internship opportunities, or just a friendly conversation.
      </p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <a href="mailto:sohambhonge73@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
          <Mail size={18} /> sohambhonge73@gmail.com
        </a>
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <MapPin size={18} /> Dhule, Maharashtra, India
        </span>
      </div>
      <div className="flex justify-center gap-4">
        {[
          { icon: Github, href: "https://github.com/Soham24608" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/sohambhonge" },
          { icon: Instagram, href: "https://www.instagram.com/sohambhonge?igsh=MXVvZWY1a3h3bW1paQ==" },
          { icon: Mail, href: "mailto:sohambhonge73@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
