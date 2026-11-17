
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { PROFILE } from "@/constants/profile";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-foreground">{PROFILE.shortName}</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {PROFILE.title}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href={PROFILE.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href={PROFILE.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href={PROFILE.social.medium} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <span className="font-serif font-black text-sm">M</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href={`mailto:${PROFILE.social.email}`} 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
        
        {/* <div className="border-t border-border mt-8 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {currentYear} Gandluru Mohammed Yaseen. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
