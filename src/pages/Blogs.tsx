import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogsSection from "@/components/BlogsSection";
import { BookOpen } from "lucide-react";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto mb-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 text-accent px-3.5 py-1 text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Technical Writing & Engineering Articles
            </span>
            <h1 className="text-4xl font-bold mb-4">Medium Publications</h1>
            <p className="text-muted-foreground">
              Deep dives, implementation notes, and research writeups on Multimodal RAG, Generative AI, Computer Vision, and production MLOps.
            </p>
          </div>

          <BlogsSection preview={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
