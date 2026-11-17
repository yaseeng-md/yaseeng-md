import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { PROFILE } from "@/constants/profile";
import { Sparkles, Brain, Cpu } from "lucide-react";

/**
 * AboutSection presents the developer's professional identity,
 * research background, and profile photograph where an About context is needed.
 */
const AboutSection = () => {
  return (
    <Card className="border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden mb-16">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Portrait with professional rounded squircle frame */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-border/80 bg-card shadow-md">
                <img
                  src={PROFILE.image.src}
                  alt={PROFILE.image.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* About Biography & Highlights */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <Badge variant="secondary" className="gap-1.5 font-medium">
                <Brain className="h-3.5 w-3.5 text-accent" /> {PROFILE.role}
              </Badge>
              <Badge variant="outline" className="gap-1.5 font-medium">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> MLOps Enthusiast
              </Badge>
              <Badge variant="outline" className="gap-1.5 font-medium">
                <Cpu className="h-3.5 w-3.5 text-accent" /> Deep Learning & CV
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">{PROFILE.name}</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {PROFILE.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Specialization in Deep Learning & MLOps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>M.Tech in AI & Machine Learning (GPA 8.89)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Hands-on with PyTorch, TensorFlow & LLMs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Scalable End-to-End AI Pipelines</span>
              </div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
