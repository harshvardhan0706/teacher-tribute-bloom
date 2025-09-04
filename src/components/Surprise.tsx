import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const Surprise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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