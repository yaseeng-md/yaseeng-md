import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { publications, Publication } from "@/data/publications";
import { BookOpen, ExternalLink, Github, CheckCircle2, Award, Sparkles } from "lucide-react";

interface PublicationsSectionProps {
  /** If true, wraps content in an independent <section> container with full padding */
  standalone?: boolean;
}

const PublicationsSection = ({ standalone = false }: PublicationsSectionProps) => {
  const content = (
    <div id="publications" className="scroll-mt-24">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-2 rounded-lg bg-accent/10 text-accent">
            <BookOpen className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Publications & Research</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Peer-reviewed papers, research preprints, and deep learning architectures authored and investigated.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((paper: Publication) => (
          <Card
            key={paper.id}
            className="border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={paper.status === "Published" ? "default" : "secondary"}
                      className="font-medium"
                    >
                      {paper.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono px-2 py-0.5 rounded bg-secondary">
                      {paper.year}
                    </span>
                    <span className="text-xs text-muted-foreground italic flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-accent" />
                      {paper.venue}
                    </span>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold group-hover:text-accent transition-colors leading-snug">
                    <a
                      href={paper.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-start gap-2"
                    >
                      <span>{paper.title}</span>
                    </a>
                  </CardTitle>

                  <CardDescription className="text-sm font-medium text-foreground/80">
                    Authors: <span className="text-foreground">{paper.authors.join(", ")}</span>
                  </CardDescription>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center flex-shrink-0">
                  {paper.publicationUrl && (
                    <Button size="sm" asChild className="gap-1.5 shadow-sm">
                      <a href={paper.publicationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Publication
                      </a>
                    </Button>
                  )}
                  {paper.codeUrl && (
                    <Button size="sm" variant="outline" asChild className="gap-1.5">
                      <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pt-0">
              {/* Abstract */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  About the Paper
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Key Contributions & Highlights */}
              {paper.highlights && paper.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Contributions & Findings
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/90">
                    {paper.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantitative Metrics Banner */}
              {paper.metrics && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/5 border border-accent/15 text-sm">
                  <Award className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-semibold text-foreground">Results:</span>
                  <span className="text-muted-foreground">{paper.metrics}</span>
                </div>
              )}

              {/* Research Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs font-normal bg-background/50">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (standalone) {
    return (
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">{content}</div>
      </section>
    );
  }

  return content;
};

export default PublicationsSection;
