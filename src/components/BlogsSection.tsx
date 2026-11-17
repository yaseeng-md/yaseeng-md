import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs, BlogPost } from "@/data/blogs";
import BlogCard from "./BlogCard";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface BlogsSectionProps {
  /** If true, only displays featured blogs with a "View All Articles" link */
  preview?: boolean;
}

const categories = ["All", "Generative AI"] as const;

const BlogsSection = ({ preview = false }: BlogsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBlogs = blogs.filter((blog: BlogPost) => {
    if (preview) {
      return blog.featured;
    }
    if (selectedCategory === "All") return true;
    return blog.category === selectedCategory;
  });

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Articles & Insights</h2>
            </div>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Deep dives on machine learning architectures, MLOps best practices, multimodal RAG, and generative AI published on Medium.
            </p>
          </div>

          {preview ? (
            <Button asChild variant="ghost" className="hidden sm:flex gap-1.5 self-start md:self-auto">
              <Link to="/blogs">
                All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            /* Category Filter Buttons for Full Page */
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full text-xs font-normal"
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Blog Tiles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog: BlogPost) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Mobile View All Button for Preview */}
        {preview && (
          <div className="mt-12 text-center sm:hidden">
            <Button asChild className="w-full gap-2">
              <Link to="/blogs">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
