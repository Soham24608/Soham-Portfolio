import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Computer Engineering",
    institution: "Gangamai College of Engineering, Dhule",
    university: "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    year: "2022 – 2026",
    score: "CGPA: 8.01 / 10",
  },
  {
    degree: "HSC (12th)",
    institution: "Maharashtra State Board",
    university: "",
    year: "2020 – 2022",
    score: "56.67%",
  },
  {
    degree: "SSC (10th)",
    institution: "Maharashtra State Board",
    university: "",
    year: "2019 – 2020",
    score: "85.20%",
  },
];

const Education = () => (
  <section id="education" className="py-20 section-alt">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        <span className="text-gradient">Education</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {educationData.map((edu, i) => (
          <div key={i} className="bg-card rounded-xl p-6 card-hover border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                {edu.university && (
                  <p className="text-xs text-muted-foreground">{edu.university}</p>
                )}
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-primary font-medium">{edu.year}</span>
                  <span className="text-muted-foreground">{edu.score}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
