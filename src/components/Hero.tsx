
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-grid hero-gradient min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="animate-fade-in [--animation-delay:200ms]">
            <p className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-sm mb-6">
              Machine Learning Engineer
            </p>
          </div>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="block mb-2">Hello, I'm</span>
            <span className="text-accent">Gandluru Mohammed Yaseen</span>
          </h1>
          
          <p className="animate-fade-in [--animation-delay:400ms] mt-6 md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 text-pretty">
            Machine Learning Engineer | MLOps Enthusiast | AI Researcher passionate about building real-world AI solutions. 
            Focused on developing scalable machine learning systems and deploying models that solve complex problems.
          </p>
          
          <div className="animate-fade-in [--animation-delay:600ms] mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={() => navigate('/projects')}>
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0" />
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-0" />
    </div>
  );
};

export default Hero;
