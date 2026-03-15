import { BarChart3, Globe, Code, ShoppingCart } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Mobile Sales Dashboard",
    tech: "Power BI",
    description:
      "Interactive Business Intelligence dashboard to analyze mobile phone sales performance across time, location, brand, model, and payment methods. Features custom calendar integration, sales trend analysis, and comprehensive business insights.",
  },
  {
    icon: Globe,
    title: "Global Learner Enrollment & Marketing Analytics",
    tech: "Google Looker Studio · PostgreSQL",
    description:
      "Interactive dashboards analyzing global learner enrollment trends and marketing campaign performance. Transforms raw platform data into actionable insights on demographics, geographic participation, and marketing effectiveness.",
  },
  {
    icon: Code,
    title: "Books Web Scraping Project",
    tech: "Python · BeautifulSoup",
    description:
      "Web scraping workflow to collect book information from Books to Scrape. Scraped 50 pages of book listings, extracted titles, prices, and ratings, and stored data in a structured dataset for analysis.",
  },
  {
    icon: ShoppingCart,
    title: "Blinkit Sales Data Analysis",
    tech: "Data Analytics",
    description:
      "Sales data analysis project exploring Blinkit's sales patterns, providing insights into product performance, customer behavior, and business trends through data-driven visualizations.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-xs text-primary font-medium mb-3">{p.tech}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
