import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { ProjectCardProps } from "@/components/ProjectCard";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Sample project data
  const projects: Record<string, ProjectCardProps> = {
    "amg" :{
      id : "amg",
      title : "Agentic Multimodal Graph Augmented Retrieval System",
      description : "AMG is an end-to-end multimodal Retrieval-Augmented Generation (RAG) system engineered for complex, layout-intensive documents (e.g., technical papers, financial filings, manuals, and reports containing tables, charts, infovis, and figures).",
      image : "/rag.jpg",
      techStack : ["Vector Databases", "Neo4j", "Qdrant", "ColPali", "Qwen 3.1VL", "NVIDIA Nemotron 3.5 Super-VL", "Query Router", "RAG", "BraveAPI", "Jina Reranker"],
      metrics : "Benchmarked retrieval on ViDoRe v3 ArXivQA, achieving 84% Recall@1 and 96% Recall@10, Recall@1 92% and MRR@20 0.9355 across 100-query evaluation suite.",
      githubUrl : "https://github.com/yaseeng-md/Agentic_Multimodal_Graph_Augmented_Retrieval_System"
    },
    "ai-weekly-digest" : {
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

    //  "llama-website-summarization": {
    //   id: "llama-website-summarization",
    //   title: "Website Article Summarization with LLaMA 2",
    //   description:
    //     "Currently developing a fine-tuned LLaMA 2 7B model for summarizing website content using parameter-efficient training methods like LoRA. Incorporates Serper API for search-based retrieval and BeautifulSoup for web scraping.",
    //   image: "/llama-summary.jpg",
    //   techStack: ["Python", "LLaMA 2", "PEFT", "BeautifulSoup", "Serper API", "Streamlit", "Hugging Face"],
    //   metrics:
    //     "Targeting to decrese ROUGE score, reduce the model size and memory usage and decreasing inference time",
    //   githubUrl: "https://github.com/yaseeng-md/llama-website-summarization" 
    // },
    
    "sar-image-colorization": {
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
   "explicit-content-detection": {
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
    "audio-deepfake-detection": {
      id: "audio-deepfake-detection",
      title: "Audio Deepfake Detection",
      description:
        "Created an ML system to identify manipulated audio recordings by analyzing spectral inconsistencies and voice patterns.",
      image: "/audio.jpg",
      techStack: ["Librosa", "PyTorch", "MFCC", "LSTM", "Streamlit"],
      metrics: "98% accuracy with MFCC-LSTM; 96% with LFCC-LSTM",
      githubUrl: "https://github.com/yaseeng-md/Audio-DeepFake-Detection",
    },
    "recommendation-system": {
      id: "recommendation-system",
      title: "Recommendation System",
      description:
        "Designed a hybrid recommendation system combining collaborative filtering and content-based approaches with Flask web deployment.",
      image: "/recc.jpg",
      techStack: ["Flask", "Python", "Scikit-Learn", "Cosine Similarity"],
      metrics: "22% increase in user engagement metrics after implementation",
      githubUrl: "https://github.com/yaseeng-md/Movie_recommedation_Systems",
    },

    "real-time-fight-detection": {
  id: "real-time-fight-detection",
  title: "Real-Time Fight Detection",
  description:
    "Built a deep learning system for detecting violent activity in surveillance footage using models like 2D CNN + LSTM, BiLSTM, and 3D CNNs. Compared architectures for optimal spatiotemporal pattern recognition. Included training notebooks, prediction module, and saved weights for real-time deployment.",
  image: "/fight.jpg",
  techStack: ["CNN", "LSTM", "BiLSTM", "3D CNN", "Python", "Tensorflow","OpenCV"],
  metrics: "Evaluated across multiple architectures using Top-1 accuracy",
  githubUrl: "https://github.com/yaseeng-md/Real_Time_Fight_Detection_Through_Surveillance_Cameras",
}

  //   "rag-qa-system" : {
  //     id: "rag-qa-system",
  //     title: "RAG-based QA System with LLMs",
  //     description: "Implemented real-time question answering using Serper API and Ollama LLMs. Full-stack deployment with Streamlit frontend, Flask backend, and MongoDB storage.",
  //     image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  //     techStack: ["Streamlit", "Flask", "MongoDB", "Ollama", "Huggingface","SERER API"],
  //     metrics: "Real-time, context-aware search-enabled LLM responses",
  //     githubUrl: "https://github.com/yaseeng-md/Question-And-Answering-RAGs",
  // }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = id ? projects[id] : null;

  if (!project) {
    return <NotFound />;
  }

  const projectDetails: Record<string, string> = {


  "amg": `
Designed and developed an end-to-end Agentic Multimodal Graph-Augmented Retrieval-Augmented Generation (RAG) system for complex, layout-intensive documents, including research papers, financial filings, technical manuals, and reports containing tables, charts, figures, and infographics. Integrated ColPali for visual document retrieval, Qdrant for vector similarity search, Docling for document processing, Neo4j for knowledge graph management, and LangGraph for orchestrating retrieval and reasoning workflows.

Integrated NVIDIA Nemotron 3.5 Super-VL for LLM-based entity, relationship, and claim extraction, transforming retrieved document information into provenance-linked Neo4j knowledge graphs. Incorporated Redis for caching and coordination, enabling efficient management of retrieval and graph-related operations. Integrated multimodal model components, including Qwen 3.1VL and Nemotron 3.5 Super-VL, within the system's document understanding capabilities.

Developed a query routing layer to direct user queries across internal knowledge retrieval and external web search using Brave Search API. Combined multimodal retrieval with graph-based context enrichment and Jina Reranker m0 to improve the relevance of retrieved document content before generation. This architecture supports knowledge-grounded responses by combining visual document evidence, structured relationships, and external information retrieval.

Benchmarked retrieval performance on the ViDoRe v3 ArXivQA dataset using a 100-query evaluation suite. Achieved 84% Recall@1 and 96% Recall@10 during initial retrieval; integrated Jina Reranker m0, improving Recall@1 to 92% and MRR@20 from 0.8771 to 0.9355. Implemented RAGAS-based evaluation using Nemotron 3.5 as an LLM judge for faithfulness and context precision, while optimizing inference through 4-bit NF4 quantization and GPU memory management.
`,
"ai-weekly-digest":
`Developed an automated AI-powered news intelligence pipeline that aggregates articles from multiple RSS feeds, collects article content, and stores individual articles as Markdown files with structured JSON metadata for downstream processing and retrieval.

Implemented an article clustering pipeline using a cluster manager and cluster registry to group related news articles into meaningful topics. Integrated SQLite for structured metadata management and cluster tracking, enabling organized article processing and pending-cluster selection.

Built an LLM-powered summarization workflow using LangGraph and locally hosted Ollama with Qwen 2.5 3B, orchestrating article processing, batch construction, and structured summarization. Designed the pipeline to process groups of related articles together, preserving cross-article context while generating consolidated topic-level summaries.

Investigated context-window-aware batching using the Qwen tokenizer and a greedy token-budgeting strategy to dynamically determine batch sizes based on article length and available context capacity. The approach targets processing larger articles in smaller batches and shorter articles in larger batches, while controlling num_ctx and num_predict to reduce output truncation, GPU memory pressure, and local inference failures.

Optimized the local inference workflow for resource-constrained environments using configurable Ollama generation parameters, controlled batch processing, and sequential model execution to reduce GPU memory contention and improve pipeline reliability.`,


    "llama-website-summarization":
`This project aims to automate the summarization of website content using large language models, addressing a growing need for digestible information in the age of information overload. Traditional summarization methods often struggle with noisy, unstructured web data and lack domain adaptability. To overcome this, I’m fine-tuning a LLaMA 2 7B model using parameter-efficient training techniques like LoRA, allowing for efficient training and deployment on low-resource devices.

The pipeline integrates the Serper API to retrieve real-time website content and uses BeautifulSoup to parse and extract meaningful article data. This preprocessed content is then passed through a tailored summarization model designed to produce concise, coherent, and factual summaries.

The project is still in development, with target metrics including a ROUGE-L score above 40, inference latency under 2 seconds, and a 40–60% reduction in model size via LoRA. These goals aim to make the system highly usable for real-world applications such as content aggregation, SEO optimization, and research summarization — all while maintaining deployability on edge devices or lightweight servers.`,
    
    "sar-image-colorization": `
Developed a hybrid loss-based Pix2Pix Conditional GAN framework for SAR-to-optical image translation using the SEN1-2 dataset. Implemented a U-Net generator and PatchGAN discriminator to transform grayscale Sentinel-1 SAR imagery into optical-like images while preserving spatial structures, terrain characteristics, and visual fidelity. Evaluated the approach across agricultural, urban, barrenland, and grassland regions.

Introduced a multi-objective loss formulation combining adversarial, L1 reconstruction, perceptual, Structural Similarity (SSIM), Peak Signal-to-Noise Ratio (PSNR), and Spectral Angle Mapper (SAM) objectives. Designed the hybrid optimization strategy to balance pixel-level reconstruction accuracy, perceptual realism, structural preservation, and spectral consistency during image translation.

Conducted a comparative analysis of RGB and LAB color spaces to investigate their influence on SAR image colorization. Leveraged LAB's separation of luminance (L) and chrominance (A/B) channels to simplify intensity-to-color mapping and improve structural preservation. Performed extensive ablation studies across different loss combinations and land-cover categories to analyze their impact on reconstruction quality.

Achieved the best LAB-based results of 32.55 dB PSNR and 0.9881 SSIM on agricultural scenes, 26.98 dB PSNR and 0.9699 SSIM on urban scenes, 34.65 dB PSNR and 0.9909 SSIM on barrenland, and 28.10 dB PSNR and 0.9686 SSIM on grassland. Also demonstrated improved training efficiency, reducing average epoch time from approximately 1 minute 45 seconds in RGB to 1 minute 4 seconds in LAB.
`,
    "explicit-content-detection": `
Developed a Transformer-based explicit content detection framework using Vision Transformer (ViT), Swin Vision Transformer (SwinViT), and a proposed Saliency-Guided Vision Transformer (SG-ViT). Evaluated the architectures on Adult Content and NudeNet datasets, benchmarking their performance against conventional CNN architectures, including ResNet-50, EfficientNet, MobileNet, and a custom shallow CNN.

Introduced a saliency-guided attention mechanism by combining gradient magnitude maps and local entropy maps to capture complementary structural and textural information. Formulated a weighted saliency representation, S(x,y) = αG(x,y) + βE(x,y), where gradient maps emphasize edges and structural boundaries while entropy maps capture local texture complexity and uncertainty. Integrated the resulting saliency information into the Vision Transformer to guide self-attention toward discriminative image regions.

Conducted extensive ablation studies to investigate the influence of patch sizes and saliency weighting parameters on classification performance. Evaluated different configurations of α and β, identifying a patch size of 16 and an optimal gradient-to-entropy weighting of α = 0.6 and β = 0.4. Demonstrated how balancing structural and textural information improves classification performance across different datasets.

Achieved 98.41% accuracy, 98.21% recall, 97.28% precision, and 98.40% F1-score on the Adult Content dataset. On the NudeNet dataset, achieved 98.86% accuracy, 96.31% recall, 97.38% precision, and 96.86% F1-score. The proposed SG-ViT outperformed the evaluated conventional CNN and Transformer baselines, demonstrating the effectiveness of saliency-guided visual feature learning for explicit content classification.`,


    "audio-deepfake-detection": `As the misuse of synthetic voices grows, I developed a comprehensive AI-based solution for detecting audio deepfakes. The system combines spectral feature extraction using MFCC and LFCC with deep learning architectures such as CNNs and bidirectional LSTMs.

I engineered a pipeline that processes audio clips to extract temporal and frequency features, feeding them into models trained on genuine and fake datasets. The MFCC-LSTM combination reached 98% accuracy, while LFCC-LSTM achieved 96%.

A real-time interface was developed using Streamlit, allowing users to upload audio files and receive instant authenticity evaluations. This project is highly relevant for digital forensics, fraud detection, and safeguarding audio communication integrity.`,
  
  "recommendation-system": `This project implements a movie recommendation system using collaborative filtering techniques. The core methodology involves computing cosine similarity between users to identify and suggest movies that align with individual preferences. By analyzing user behavior and preferences, the system effectively recommends movies that similar users have enjoyed.

The implementation is inspired by a tutorial from the CampusX platform, focusing on the fundamental aspects of recommendation systems. The project includes various Jupyter notebooks demonstrating different approaches, such as user-based collaborative filtering and genre-wise recommendations. These notebooks provide a comprehensive understanding of how similarity measures can be utilized to enhance recommendation accuracy.

While the frontend interface is not developed, the backend logic is robust and can be integrated into web applications or further expanded upon. This project serves as a foundational model for building more complex recommendation systems and offers valuable insights into the mechanics of user-based filtering techniques.`,


  "real-time-fight-detection": `This project focuses on detecting fights in real-time through surveillance camera footage. It explores various deep learning architectures to identify violent activities, including combinations of 2D Convolutional Neural Networks (CNNs) with Long Short-Term Memory (LSTM) networks, Bidirectional LSTMs (BiLSTM), and 3D CNNs.

The approach involves a comparative study of different model architectures:

2D CNN + LSTM: Utilizes spatial feature extraction from individual frames, followed by temporal analysis to capture motion patterns indicative of fights.

2D CNN + BiLSTM: Enhances temporal modeling by considering both past and future frame sequences, improving the detection of complex actions.

3D CNN: Processes sequences of frames as volumetric data, capturing spatiotemporal features directly, which is beneficial for recognizing dynamic activities.

3D CNN + LSTM/BiLSTM: Combines the strengths of 3D spatial-temporal feature extraction with advanced temporal modeling to improve accuracy.

Each model was trained and evaluated on a dataset comprising fight and non-fight video clips. The performance metrics, such as Top-1 accuracy, were used to assess and compare the effectiveness of each architecture.

The repository includes Jupyter notebooks for each model variant, a prediction module for inference, and saved model weights for reproducibility. This project serves as a comprehensive study on the application of deep learning techniques for real-time violence detection in surveillance systems.`




};

  const additionalDescription = projectDetails[project.id] || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.metrics && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Results</h3>
                  <p className="bg-secondary/50 p-3 rounded-md">{project.metrics}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mb-8">
                {project.githubUrl && (
                  <Button asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <div className="prose max-w-none">
              {additionalDescription.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}

              {!additionalDescription && (
                <p className="mb-4 text-muted-foreground">
                  This project showcases my expertise in machine learning and AI development.
                  I focused on creating effective solutions for real-world problems while
                  maintaining high performance standards and robust implementation practices.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
