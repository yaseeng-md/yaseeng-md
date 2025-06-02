
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12">
            I'm always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Mail size={32} />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <a
                href="mailto:gandlurumohammedyaseen@gmail.com"
                className="text-muted-foreground hover:text-accent text-sm break-all"
              >
                gandlurumohammedyaseen@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Phone size={32} />
              </div>
              <h3 className="font-medium mb-2">Phone</h3>
              <a
                href="tel:+918328377285"
                className="text-muted-foreground hover:text-accent"
              >
                +91 8328377285
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Linkedin size={32} />
              </div>
              <h3 className="font-medium mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/yaseeng-md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                yaseeng-md
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Github size={32} />
              </div>
              <h3 className="font-medium mb-2">GitHub</h3>
              <a
                href="https://github.com/yaseeng-md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                yaseeng-md
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
