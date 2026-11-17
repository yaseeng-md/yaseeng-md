import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "@/constants/profile";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-grid hero-gradient min-h-[90vh] flex items-center pt-28 pb-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Introduction & Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in [--animation-delay:200ms]">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {PROFILE.role}
              </span>
            </div>
            
            <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
              <span className="block mb-2 text-foreground">Hello, I'm</span>
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
            </h1>
            
            <p className="animate-fade-in [--animation-delay:400ms] mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              {PROFILE.bio}
            </p>
            
            <div className="animate-fade-in [--animation-delay:600ms] mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => navigate('/projects')} className="gap-2 shadow-sm">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a 
                  href={PROFILE.resume} 
                  download="Gandluru_Mohammed_Yaseen_Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait Photograph Column */}
          <div className="flex-shrink-0 animate-fade-in [--animation-delay:300ms]">
            <div className="relative group">
              {/* Subtle ambient halo complementing the theme */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-accent/25 via-accent/10 to-transparent blur-xl opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-border/80 bg-card shadow-2xl ring-1 ring-border/50">
                <img
                  src={PROFILE.image.src}
                  alt={PROFILE.image.alt}
                  width={800}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative gradient masks */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0 pointer-events-none" />
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
