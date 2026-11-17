
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

const Projects = () => {
  // Complete projects list
  const allProjects: ProjectCardProps[] = [
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
  //   {
  //   id: "llama-website-summarization",
  //   title: "Website Article Summarization with LLaMA 2",
  //   description: "Ongoing project focused on fine-tuning a LLaMA 2 7B model using parameter-efficient training techniques for summarizing website articles. Combines web retrieval via Serper API and scraping with BeautifulSoup, targeting lightweight deployment.",
  //   image: "/llama-summary.jpg",
  //   techStack: ["Python", "LLaMA 2", "Serper API", "BeautifulSoup", "Streamlit", "PEFT", "Hugging Face"],
  //   metrics: "Targeting to decrese ROUGE score, reduce the model size and memory usage and decreasing inference time",
  //   githubUrl: "https://github.com/yaseeng-md/llama-website-summarization" // Replace with actual URL
  // },
    
  {
    id: "sar-image-colorization",
    title: "Hybrid Loss-Based Pix2Pix GAN for SAR Image Colorization",
    description: "Developed a hybrid loss-based Pix2Pix GAN for SAR-to-optical image translation, investigating LAB and RGB color spaces to improve structural preservation, spectral consistency, and visual fidelity.",
    image: "/sar.jpg",
    techStack: [
      "PyTorch",
      "OpenCV",
      "Pix2Pix",
      "Conditional GANs",
      "U-Net Generator",
      "PatchGAN Discriminator",
      "LAB Color Space",
      "RGB Color Space",
      "Perceptual Loss",
      "SSIM",
      "PSNR",
      "Spectral Angle Mapper (SAM)"
    ],
    metrics: "LAB achieved 34.65 dB PSNR and 0.9909 SSIM on barrenland; 32.55 dB PSNR and 0.9881 SSIM on agricultural scenes.",
      githubUrl: "https://github.com/yaseeng-md/SAR_Image_Colorization_Using_Deep_Learning_Algorithms",
  },
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
  // {
  //   id: "rag-qa-system",
  //   title: "RAG-based QA System with LLMs",
  //   description: "Implemented real-time question answering using Serper API and Ollama LLMs. Full-stack deployment with Streamlit frontend, Flask backend, and MongoDB storage.",
  //   image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  //   techStack: ["Streamlit", "Flask", "MongoDB", "Ollama", "Huggingface", "SERPER API"],
  //   metrics: "Real-time, context-aware search-enabled LLM responses",
  //   githubUrl: "https://github.com/yaseeng-md/Question-And-Answering-RAGs",
  // },
  {
    id: "recommendation-system",
    title: "Movie Recommendation System",
    description: "Built a hybrid recommender using collaborative filtering (Boltzmann Machines, Cosine Similarity) with a Flask-based user interface.",
    image: "/recc.jpg",
    techStack: ["Flask", "Python", "Scikit-Learn", "Collaborative Filtering"],
    metrics: "Deployed an interactive recommender with real-time suggestions",
    githubUrl: "https://github.com/yaseeng-md/Movie_recommedation_Systems", // Update if different
  },

  {
  id: "real-time-fight-detection",
  title: "Real-Time Fight Detection",
  description:
    "Built a deep learning system for detecting violent activity in surveillance footage using models like 2D CNN + LSTM, BiLSTM, and 3D CNNs. Compared architectures for optimal spatiotemporal pattern recognition. Included training notebooks, prediction module, and saved weights for real-time deployment.",
  image: "/fight.jpg",
  techStack: ["CNN", "LSTM", "BiLSTM", "3D CNN", "Python", "Tensorflow","OpenCV"],
  metrics: "Evaluated across multiple architectures using Top-1 accuracy",
  githubUrl: "https://github.com/yaseeng-md/Real_Time_Fight_Detection_Through_Surveillance_Cameras",
}

];


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-muted-foreground">
              Explore my portfolio of machine learning and AI projects, showcasing
              my expertise in developing intelligent systems and solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
