import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Certified cloud architects and engineers",
  "24/7 dedicated support team",
  "Proven methodology and best practices",
  "Transparent pricing with no hidden fees",
  "Agile delivery and continuous improvement",
  "Industry-leading security standards",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Your Trusted <span className="text-gradient">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Arantes Tech Solutions, we combine deep technical expertise with 
              strategic thinking to deliver solutions that not only meet today's 
              challenges but prepare you for tomorrow's opportunities.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card rounded-3xl p-8 relative z-10">
              <div className="space-y-6">
                {/* Experience */}
                <div className="flex items-center gap-6 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary-foreground">10+</span>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">Years of Experience</div>
                    <div className="text-muted-foreground text-sm">Delivering excellence since 2014</div>
                  </div>
                </div>

                {/* Team */}
                <div className="flex items-center gap-6 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary-foreground">40+</span>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">Expert Engineers</div>
                    <div className="text-muted-foreground text-sm">Certified professionals worldwide</div>
                  </div>
                </div>

                {/* Clients */}
                <div className="flex items-center gap-6 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary-foreground">100+</span>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">Happy Clients</div>
                    <div className="text-muted-foreground text-sm">Across multiple industries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
