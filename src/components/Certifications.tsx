import { Award } from "lucide-react";

const certifications = [
  { title: "IBM SkillsBuild Completion Certificate", file: "/certificates/Completion_Certificate_SkillsBuild.pdf" },
  { title: "Data Analytics Job Simulation", file: "/certificates/Data_Analytics_Job_Simulation.pdf" },
  { title: "Data Visualization Associate Internship", file: "/certificates/Data_Visualization_Associate_Internship.pdf" },
  { title: "Power BI Certificate", file: "/certificates/Power_BI.pdf" },
  { title: "Python Certificate", file: "/certificates/Python.pdf" },
  { title: "Project Exhibition Certificate", file: "/certificates/Soham_Bhonge_Certificate.pdf" },
];

const Certifications = () => (
  <section id="certifications" className="py-20">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        <span className="text-gradient">Certifications</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-5 border border-border card-hover flex items-start gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">View Certificate →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
