import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Sparkles, Award, Trophy, Play, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const Surprise = () => {
  const [revealed, setRevealed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  
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

  const mediaItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      title: "Inspiring Classroom Moments",
      description: "Capturing the magic of learning in action"
    },
    {
      type: "image", 
      src: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop",
      title: "Student Success Stories",
      description: "Celebrating achievements and breakthroughs"
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      title: "Teacher Appreciation Video",
      description: "A heartfelt message from students around the world"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      title: "Global Education Impact",
      description: "Teachers making a difference worldwide"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Science Lab Adventures",
      description: "Hands-on learning experiences that spark curiosity"
    },
    {
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      poster: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      title: "Creative Teaching Methods",
      description: "Innovative approaches to engage every learner"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      title: "Art & Creativity Sessions",
      description: "Nurturing artistic expression and imagination"
    },
    {
      type: "video",
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      poster: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
      title: "Graduation Celebrations",
      description: "Proud moments of achievement and success"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => setShowGallery(true), 1000);
  };

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
                    onClick={handleReveal}
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
                  
                  <div className="bg-primary/10 rounded-2xl p-8 mb-12">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      "Teachers: The Architects of Tomorrow"
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Thank you for your endless patience, boundless creativity, and 
                      unwavering belief in every student's potential. You are truly making the world a better place.
                    </p>
                  </div>

                  {/* Photo & Video Gallery */}
                  {showGallery && (
                    <div className="animate-fade-in-up delay-300">
                      <div className="flex items-center justify-center mb-8">
                        <Camera className="w-6 h-6 text-accent mr-2" />
                        <h4 className="text-2xl font-bold text-foreground">Memory Lane</h4>
                        <Play className="w-6 h-6 text-accent ml-2" />
                      </div>
                      
                      <div className="relative max-w-4xl mx-auto">
                        {/* Main Media Display */}
                        <div className="relative bg-card rounded-3xl overflow-hidden shadow-elevated">
                          <div className="aspect-video relative">
                            {mediaItems[currentSlide].type === "image" ? (
                              <img
                                src={mediaItems[currentSlide].src}
                                alt={mediaItems[currentSlide].title}
                                className="w-full h-full object-cover animate-fade-in-right"
                              />
                            ) : (
                              <video
                                src={mediaItems[currentSlide].src}
                                poster={mediaItems[currentSlide].poster}
                                controls
                                className="w-full h-full object-cover animate-fade-in-right"
                              />
                            )}
                            
                            {/* Navigation Arrows */}
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-soft hover:shadow-warm transition-smooth opacity-90 hover:opacity-100"
                              onClick={prevSlide}
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-soft hover:shadow-warm transition-smooth opacity-90 hover:opacity-100"
                              onClick={nextSlide}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {/* Media Info */}
                          <div className="p-6 bg-gradient-subtle">
                            <h5 className="text-xl font-semibold text-foreground mb-2 animate-fade-in-left">
                              {mediaItems[currentSlide].title}
                            </h5>
                            <p className="text-muted-foreground animate-fade-in-left delay-100">
                              {mediaItems[currentSlide].description}
                            </p>
                          </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex justify-center mt-6 space-x-3">
                          {mediaItems.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`relative w-20 h-12 rounded-lg overflow-hidden transition-smooth hover:scale-105 ${
                                currentSlide === index 
                                  ? 'ring-2 ring-accent shadow-warm' 
                                  : 'opacity-70 hover:opacity-100'
                              }`}
                            >
                              <img
                                src={item.type === "video" ? item.poster : item.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {item.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Play className="w-4 h-4 text-white drop-shadow-lg" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Slide Counter */}
                        <div className="text-center mt-4">
                          <span className="text-sm text-muted-foreground">
                            {currentSlide + 1} of {mediaItems.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
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