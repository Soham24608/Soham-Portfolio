import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mobile Sales Dashboard",
    tech: ["Power BI", "Power Query", "DAX"],
    description:
      "Interactive Business Intelligence dashboard to analyze mobile phone sales performance across time, location, brand, model, and payment methods.",
    link: "#",
  },
  {
    title: "Global Learner Enrollment & Marketing Analytics",
    tech: ["Google Looker Studio", "PostgreSQL"],
    description:
      "Interactive dashboards analyzing global learner enrollment trends and marketing campaign performance with actionable insights.",
    link: "#",
  },
  {
    title: "Books Web Scraping Project",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    description:
      "Web scraping workflow to collect book information from 50 pages, extracting titles, prices, and ratings into structured datasets.",
    link: "#",
  },
  {
    title: "Blinkit Sales Data Analysis",
    tech: ["Data Analytics", "Python", "Excel"],
    description:
      "Sales data analysis exploring Blinkit's sales patterns, providing insights into product performance and business trends.",
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-heading font-semibold text-foreground leading-snug pr-2">{p.title}</h3>
              <a href={p.link} className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1">
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
