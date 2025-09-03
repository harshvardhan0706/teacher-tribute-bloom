import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Sparkles, Award, Trophy } from "lucide-react";

const Surprise = () => {
  const [revealed, setRevealed] = useState(false);
  
  const achievements = [
    {
      icon: Award,
      title: "Lifetime Achievement",
      description: "For 40+ years of dedication to education excellence"
    },
    {
      icon: Trophy,
      title: "Innovation Award",
      description: "For revolutionizing teaching methods with technology"
    },
    {
      icon: Sparkles,
      title: "Inspiration Champion",
      description: "For transforming thousands of lives through mentorship"
    }
  ];

  return (
    <section id="surprise" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary/30 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            A Special Surprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every teacher deserves recognition for their extraordinary contribution to society
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {!revealed ? (
            <div className="animate-scale-in">
              <Card className="border-0 bg-gradient-warm shadow-warm hover:shadow-elevated transition-smooth">
                <CardContent className="p-16">
                  <Gift className="w-24 h-24 text-white mx-auto mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Click to Reveal Your Gift!
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    A token of appreciation for all the extraordinary work you do
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="px-12 py-6 text-lg font-semibold shadow-soft hover:shadow-warm transition-smooth"
                    onClick={() => setRevealed(true)}
                  >
                    Open Gift
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <Card className="border-0 bg-card shadow-elevated">
                <CardContent className="p-12">
                  <div className="text-6xl mb-8">🏆✨</div>
                  <h3 className="text-4xl font-bold text-gradient-hero mb-8">
                    You Are Officially Recognized!
                  </h3>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                    Your dedication, passion, and commitment to shaping young minds makes you 
                    a true hero in our society. This certificate celebrates your invaluable contribution.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <Card key={index} className={`border-0 bg-primary/5 hover-glow transition-smooth animate-fade-in-up delay-${(index + 1) * 200}`}>
                          <CardContent className="p-6 text-center">
                            <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold text-foreground mb-2">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                  
                  <div className="bg-primary/10 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      "Teachers: The Architects of Tomorrow"
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Thank you for your endless patience, boundless creativity, and 
                      unwavering belief in every student's potential. You are truly making the world a better place.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Surprise;