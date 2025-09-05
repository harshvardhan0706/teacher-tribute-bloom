import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Happy Teachers' Day!</h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
              To every teacher who has ever inspired, challenged, supported, or believed in their students—
              your impact is immeasurable and your legacy eternal.
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-primary-foreground/80">Made by harsh </span>
              <Heart className="w-5 h-5 text-accent mx-2 animate-pulse" />
              <span className="text-primary-foreground/80">for educators everywhere</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              Teachers' Day Tribute • Celebrating Education Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;