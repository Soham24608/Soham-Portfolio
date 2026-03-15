const skillCategories = [
  {
    category: "Programming & Querying",
    skills: ["C", "Python", "SQL"],
  },
  {
    category: "Data Visualization",
    skills: ["Power BI", "Google Looker Studio", "MS Excel"],
  },
  {
    category: "Analytical Abilities",
    skills: ["Data Cleaning", "EDA", "Insight Generation", "Dashboard Development"],
  },
  {
    category: "Web & Data Collection",
    skills: ["Web Scraping", "BeautifulSoup", "Data Extraction"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Jupyter Notebook", "Anaconda", "Git", "GitHub", "VS Code", "PostgreSQL", "MySQL"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 section-alt">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        <span className="text-gradient">Skills</span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <h3 className="font-heading font-semibold text-foreground mb-3">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
