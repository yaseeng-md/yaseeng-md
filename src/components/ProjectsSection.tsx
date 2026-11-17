
import { Button } from "./ui/button";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample project data
const featuredProjects: ProjectCardProps[] = [
  {
    id : "amg",
    title : "Agentic Multimodal Graph Augmented Retrieval System",
    description : "AMG is an end-to-end multimodal Retrieval-Augmented Generation (RAG) system engineered for complex, layout-intensive documents (e.g., technical papers, financial filings, manuals, and reports containing tables, charts, infovis, and figures).",
    image : "/rag.jpg",
    techStack : ["Vector Databases", "Neo4j", "Qdrant", "ColPali", "Qwen 3.1VL", "NVIDIA Nemotron 3.5 Super-VL", "Query Router", "RAG", "BraveAPI", "Jina Reranker"],
    metrics : "Benchmarked retrieval on ViDoRe v3 ArXivQA, achieving 84% Recall@1 and 96% Recall@10, Recall@1 92% and MRR@20 0.9355 across 100-query evaluation suite.",
    githubUrl : "https://github.com/yaseeng-md/Agentic_Multimodal_Graph_Augmented_Retrieval_System"
  },
  {
    id: "ai-weekly-digest",
    title: "AI-Powered Weekly Digest & News Intelligence System",
    description: "An automated AI-powered news intelligence pipeline that collects articles from multiple RSS feeds, stores article content and metadata, groups related articles through clustering, and generates structured summaries using locally hosted LLMs. Built with LangGraph and Ollama, the system focuses on context-aware processing, adaptive article batching, and memory-efficient summarization to handle large volumes of news without exceeding local hardware constraints.",
    image: "/ai-weekly-digest.jpg",
    techStack: [
        "Python",
        "RSS Feeds",
        "LangGraph",
        "Ollama",
        "Qwen 2.5 3B",
        "SQLite",
        "Article Clustering",
        "Context-Aware Batching",
        "Tokenization",
        "Markdown",
        "Docker"
    ],
    metrics: "Designed for context-window-aware article batching, controlled LLM generation, and reduced local GPU memory pressure. Quantitative performance benchmarks have not yet been established.",
    githubUrl: "https://github.com/yaseeng-md/ai-weekly-digest"
  },
  // {
  //   id: "sar-image-colorization",
  //   title: "SAR Image Colorization",
  //   description: "Research-driven GAN model to enhance SAR imagery using Pix2Pix and perceptual loss, significantly improving visual interpretability for remote sensing.",
  //   image: "/sar.jpg",
  //   techStack: ["Streamlit", "PyTorch", "OpenCV", "Pix2Pix", "GANs"],
  //   metrics: "Achieved 0.97 SSIM, 27.42 dB PSNR, and 0.0021 MSE",
  //   githubUrl: "https://github.com/yaseeng-md/SAR_Image_Colorization_Using_Deep_Learning_Algorithms",
  // },
  // {
  //   id: "audio-deepfake-detection",
  //   title: "Audio Deepfake Detection",
  //   description: "Designed CNN-RNN-LSTM based deep learning models for detecting manipulated audio using MFCC and LFCC features with high accuracy.",
  //   image: "/audio.jpg",
  //   techStack: ["PyTorch", "Librosa", "Streamlit", "MFCC", "LSTM"],
  //   metrics: "98% accuracy with MFCC-LSTM; 96% with LFCC-LSTM",
  //   githubUrl: "https://github.com/yaseeng-md/Audio-DeepFake-Detection",
  // },
  {
    id: "explicit-content-detection",
    title: "Saliency-Guided Vision Transformer for Explicit Content Detection",
    description: "Developed a Saliency-Guided Vision Transformer combining gradient and entropy maps to enhance explicit content classification, achieving up to 98.86% accuracy.",
    image: "/explicit.jpg",
    techStack: [
      "PyTorch",
      "TensorFlow",
      "Vision Transformer (ViT)",
      "Swin Transformer",
      "Saliency-Guided ViT",
      "Gradient Maps",
      "Entropy Maps",
      "Linux"
    ],
    metrics: "98.86% accuracy on NudeNet; 98.41% on Adult Content.",
    githubUrl: "https://github.com/yaseeng-md/Explicit-Content-Detection",
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              A selection of my recent machine learning and AI engineering work
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link to="/projects">
              All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Button asChild>
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
