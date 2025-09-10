import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const Surprise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaItems = [
     {
      type: "video",
      src: "public/IMG_5303.MP4",
      poster: "public/smiling-volunteer-with-box-of-food-donate-at-crisis-center-png.webp",
      title: "Teacher Appreciation Video",
      description: "A heartfelt message from students around the world"
    },
      {
      type: "video",
      src: "public/Happy Teachers day.mp4",
       poster: "public/images (8).jpg",
      title: "Teacher Appreciation Video",
      description: "A heartfelt message from students around the world"
    },
    {
      type: "image",
      src: "public/lookbook.png",
      title: "Inspiring Classroom Moments",
      description: "Capturing the magic of learning in action"
    },
    {
      type: "image", 
      src: "public/lookbook 2.png",
      title: "Student Success Stories",
      description: "Celebrating achievements and breakthroughs"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
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
            Memory Lane
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of special moments and memories
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Camera className="w-6 h-6 text-accent mr-2" />
            <h4 className="text-2xl font-bold text-foreground">Photo & Video Gallery</h4>
            <Play className="w-6 h-6 text-accent ml-2" />
          </div>
          
          <div className="relative">
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
      </div>
    </section>
  );
};

export default Surprise;