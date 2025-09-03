import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const impacts = [
    {
      icon: BookOpen,
      title: "Knowledge Builders",
      description: "Transforming curiosity into understanding, one lesson at a time"
    },
    {
      icon: Heart,
      title: "Character Shapers",
      description: "Nurturing values, empathy, and integrity in young hearts"
    },
    {
      icon: Lightbulb,
      title: "Dream Igniters",
      description: "Inspiring students to reach beyond their perceived limitations"
    },
    {
      icon: Users,
      title: "Future Architects",
      description: "Building the foundation for tomorrow's leaders and innovators"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Heart of Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teachers are more than educators—they are mentors, motivators, and the unsung heroes 
            who dedicate their lives to shaping the minds and hearts of future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <Card 
                key={index} 
                className={`hover-lift shadow-soft hover:shadow-warm border-0 bg-card animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-warm">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary/5 rounded-3xl p-12 animate-fade-in-up delay-400">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 italic">
              "A teacher affects eternity; they can never tell where their influence stops."
            </blockquote>
            <cite className="text-lg text-muted-foreground font-medium">
              — Henry Adams
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;