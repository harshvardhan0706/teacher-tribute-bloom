import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Wishes = () => {
  const wishes = [
    {
      name: "Sarah Chen",
      role: "Former Student",
      message: "Mrs. Johnson believed in me when I didn't believe in myself. Her encouragement led me to pursue engineering, and now I'm designing sustainable solutions for the future.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Parent",
      message: "Mr. Thompson transformed my daughter's relationship with mathematics. His patience and creative teaching methods turned her struggles into genuine love for learning.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Graduate Student",
      message: "Professor Williams didn't just teach literature; she taught me to think critically, to question, and to find my voice. Her impact extends far beyond the classroom.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Young Professional",
      message: "Coach Martinez taught me that excellence isn't about being perfect—it's about giving your best effort every single day. That lesson guides me in everything I do.",
      rating: 5
    },
    {
      name: "Jessica Brown",
      role: "Artist",
      message: "Ms. Garcia saw the artist in me before I did. Her art classes weren't just lessons; they were journeys of self-discovery that shaped who I am today.",
      rating: 5
    },
    {
      name: "Robert Taylor",
      role: "Community Leader",
      message: "Dr. Smith taught me that knowledge without compassion is incomplete. Her example of service inspired me to give back to my community every day.",
      rating: 5
    }
  ];

  return (
    <section id="wishes" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Heartfelt Gratitude
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stories of transformation, inspiration, and the lasting impact of exceptional educators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <Card 
              key={index} 
              className={`hover-lift shadow-soft hover:shadow-warm bg-card border-0 animate-scale-in delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(wish.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  "{wish.message}"
                </p>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground text-lg">
                    {wish.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {wish.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up delay-500">
          <div className="bg-primary/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Thank You, Teachers! 🌟
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your dedication, patience, and unwavering belief in your students create ripples 
              that extend far beyond the classroom. You are the architects of dreams, 
              the guardians of curiosity, and the champions of possibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;