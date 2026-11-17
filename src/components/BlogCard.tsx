import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BlogPost } from "@/data/blogs";
import { ExternalLink, Clock, Calendar, ThumbsUp, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="flex flex-col justify-between border border-border/40 bg-card/70 backdrop-blur-sm hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black font-serif font-black text-sm select-none shadow-sm">
                M
              </span>
              <span className="text-xs font-medium text-muted-foreground">Medium</span>
            </div>

            <Badge variant="secondary" className="text-xs font-normal">
              {blog.category}
            </Badge>
          </div>

          <CardTitle className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">
            <a
              href={blog.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 hover:underline"
            >
              <span>{blog.title}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-accent inline" />
            </a>
          </CardTitle>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {blog.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {blog.readTime}
            </span>
            {blog.claps && (
              <span className="flex items-center gap-1 text-accent font-medium">
                <ThumbsUp className="h-3 w-3" />
                {blog.claps}
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-1">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {blog.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal bg-background/50">
                #{tag}
              </Badge>
            ))}
            {blog.tags.length > 4 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{blog.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-2 pb-6 px-6 border-t border-border/30 mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Published on Medium</span>
        <Button size="sm" variant="ghost" asChild className="gap-1.5 text-accent hover:text-accent font-medium">
          <a href={blog.mediumUrl} target="_blank" rel="noopener noreferrer">
            Read on Medium <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
