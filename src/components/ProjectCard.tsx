
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  techStack,
  metrics,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border/40 bg-card transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
          {techStack.length > 3 && (
            <Badge variant="outline" className="font-normal">
              +{techStack.length - 3}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-2">
        {metrics && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Results:</span> {metrics}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/projects/${id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
