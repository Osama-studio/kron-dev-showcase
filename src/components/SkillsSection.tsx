import { Code, Smartphone, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 85 },
        { name: "Java", level: 80 },
        { name: "Dart", level: 82 },
        { name: "Firebase", level: 90 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 85 }
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 92 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 78 },
        { name: "Vercel", level: 90 },
        { name: "Linux", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver 
              robust, scalable, and innovative solutions.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-elevation transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16">
            <div className="glass-card p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold mb-6">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "TypeScript", "Express.js", "Next.js", "GraphQL", "Redis", 
                  "Kubernetes", "Terraform", "Jenkins", "Supabase", "Prisma",
                  "Socket.io", "Jest", "Cypress", "Webpack", "Babel"
                ].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-card border border-primary/20 rounded-full text-sm font-medium hover:border-primary/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 text-center">Experience Level</h4>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-muted-foreground">Years of Professional Development</div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 text-center">Learning Approach</h4>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-muted-foreground">Continuous Learning & Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;