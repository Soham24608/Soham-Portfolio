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
        Skills & <span className="text-gradient">Technologies</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-heading font-semibold text-primary mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20"
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
