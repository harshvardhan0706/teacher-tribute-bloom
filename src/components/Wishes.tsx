import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Wishes = () => {
  const wishes = [
    {
      name: "Harsh",
      // role: "Former Student",
      message: "Wishing you a very Happy Teachers Day! 🌸 On behalf of all of us, we sincerely thank you for your constant guidance, support, and inspiration. We feel truly fortunate to have you as our mentor.",
      rating: 5
    },
    {
      name: "Sweety",
      // role: "",
      message: "Dear Teacher, on this special day, I want to thank you not just for teaching lessons from tutorials and MDN, but also for teaching lessons of life with real life examples. You inspire me to do better every day. Your dedication, patience, and wisdom have made a big difference in my life. Wishing you a very Happy Teachers Day!.",
      rating: 5
    },
    {
      name: "Alok",
      // role: "Graduate Student",
      message: "“Happy Teachers’ Day, Sir! 🙌 From all of us – thank you for teaching us, scolding us, motivating us, and still tolerating us 😜. We’re lucky to have you guiding us (even when we drive you crazy).",
      rating: 5
    },
    {
      name: "Abhinav",
      // role: "Young Professional",
      message: "Happy teachers day sir aypka favourite student ka side Se,Kya matlab mai favourite nhi hu mai nhi maanta ya😂😂.",
      rating: 5
    },
    {
      name: "Aastha",
      // role: "Artist",
      message: "Wishing you a very Happy Teacher’s Day! Your endless support, guidance, and encouragement have always inspired me to do better. Thank you for being my mentor, role model, and constant source of motivation. I feel truly blessed to have a teacher like you in my life.",
      rating: 5
    },
    {
      name: "Julybatch students",
      // role: "Community Leader",
      message: "Happy Teachers’ Day🎉 Lots of love and respect from the entire July batch 🙏. Thank you for your patience, guidance, and all the gyaan you share (even when half of us are sleepy in class 😅). We truly appreciate you and feel lucky to learn from you.",
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
                    {/* {wish.role} */}
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