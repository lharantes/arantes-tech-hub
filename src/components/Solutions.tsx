import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with minimal disruption.",
    tags: ["AWS", "Azure", "GCP"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "DevOps & Automation",
    description: "Accelerate delivery with CI/CD pipelines and infrastructure as code.",
    tags: ["Kubernetes", "Docker", "Terraform"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage AI to unlock new insights and automate complex processes.",
    tags: ["ML Ops", "NLP", "Computer Vision"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Enterprise Architecture",
    description: "Design scalable systems that align technology with business goals.",
    tags: ["Microservices", "API", "Integration"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Industry-Leading <span className="text-gradient">Cloud Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored solutions designed to meet the unique demands of modern enterprises.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
