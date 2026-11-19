export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  mediumUrl: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  claps?: string;
  category: "Generative AI";
  featured?: boolean;
}

// export const blogs: BlogPost[] = [
export const blogs: BlogPost[] = [
  {
    id: "query-router",
    title: "One Query, Multiple Destinations The Architecture Behind Query Routers",
    excerpt:
      "An exploration of how intelligent query routers direct user queries to the most suitable destinations using adaptive routing strategies, LangGraph, and agentic AI architecture.",
    mediumUrl:
      "https://medium.com/@gandlurumohammedyaseen/one-query-multiple-destinations-the-architecture-behind-query-routers-bdb4b2109cf1?sharedUserId=gandlurumohammedyaseen",
    publishedDate: "Nov 19, 2026",
    readTime: "50 min read",
    category: "Generative AI",
    tags: [
      "Query Router",
      "LLM Router",
      "Semantic Router",
      "RAG",
      "Agentic Routing",
      "Agents",
      "AI",
    ],
    featured: true
  },
  {
    id: "multimodal-rag-evidence-grounding",
    title: "The Page Was Right. The Answer Was Still Wrong.",
    excerpt:
      "Exploring how multimodal retrieval, graph-augmented knowledge, reranking, and evidence-based grounding address the hidden failures of conventional RAG systems when answering questions about complex documents.",
    mediumUrl:
      "https://medium.com/@gandlurumohammedyaseen/the-page-was-right-the-answer-was-still-wrong-1b466bc5401e?sharedUserId=gandlurumohammedyaseen",
    publishedDate: "Oct 29, 2026",
    readTime: "11 min read",
    category: "Generative AI",
    tags: [
      "Multimodal RAG",
      "ColPali",
      "Knowledge Graphs",
      "Neo4j",
      "Qdrant",
      "Jina Reranker",
      "Retrieval Evaluation",
      "AI Engineering"
    ],
    featured: true
  },
  {
    id: "reverse-engineer-anything-architecture",
    title: "Inside the Architecture of Reverse Engineer Anything",
    excerpt:
      "A deep dive into how REA connects AI agents with reverse-engineering tools through MCP and CLI, orchestrates investigation workflows, and transforms raw analysis into structured findings with supporting evidence and explicit limitations.",
    mediumUrl:
      "https://medium.com/@gandlurumohammedyaseen/rea-medium-article-inside-the-architecture-of-reverse-engineer-anything-b5535be29026?sharedUserId=gandlurumohammedyaseen",
    publishedDate: "Oct 20, 2026",
    readTime: "9 min read",
    category: "Generative AI",
    tags: [
      "Agentic AI",
      "MCP",
      "AI Agents",
      "Reverse Engineering",
      "Software Architecture",
      "Tool Orchestration",
      "Evidence-Based AI"
    ],
    featured: true
  }
];
  // {
  //   id: "multimodal-rag-colpali",
  //   title: "Deep Dive into Multimodal RAG with ColPali and Neo4j Knowledge Graphs",
  //   excerpt:
  //     "Why OCR-based chunking fails on visual and layout-heavy documents, and how combining ColPali late-interaction embeddings with graph topology creates superior context-aware retrieval.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/deep-dive-into-multimodal-rag-with-colpali-and-knowledge-graphs",
  //   publishedDate: "Nov 12, 2024",
  //   readTime: "7 min read",
  //   claps: "1.4K",
  //   category: "Generative AI",
  //   tags: ["Multimodal AI", "RAG", "Knowledge Graphs", "ColPali", "Neo4j"],
  //   featured: true
  // },
  // {
  //   id: "news-intelligence-langgraph",
  //   title: "Context-Aware News Intelligence: Building an Automated Digest with LangGraph & Ollama",
  //   excerpt:
  //     "Architecting a localized AI news aggregation and clustering system that processes high-volume RSS feeds without exceeding local GPU memory and context constraints.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/context-aware-news-intelligence-building-an-automated-digest-with-langgraph-ollama",
  //   publishedDate: "Oct 28, 2024",
  //   readTime: "9 min read",
  //   claps: "1.6K",
  //   category: "Generative AI",
  //   tags: ["LangGraph", "Ollama", "Local LLMs", "MLOps", "Python"],
  //   featured: true
  // },
  // {
  //   id: "sar-image-colorization-gan",
  //   title: "SAR Image Colorization: Training Pix2Pix GANs with Custom Perceptual Loss",
  //   excerpt:
  //     "A hands-on architectural walkthrough on transforming grayscale Synthetic Aperture Radar (SAR) imagery into realistic optical color spectrums using conditional adversarial networks.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/sar-image-colorization-training-pix2pix-gans-with-custom-perceptual-loss",
  //   publishedDate: "Aug 24, 2024",
  //   readTime: "6 min read",
  //   claps: "980",
  //   category: "Computer Vision",
  //   tags: ["Computer Vision", "GANs", "PyTorch", "Deep Learning"],
  //   featured: true
  // },
  // {
  //   id: "audio-deepfake-detection-mfcc",
  //   title: "Audio Deepfake Detection: Engineering MFCC & LFCC Spectral Features with LSTMs",
  //   excerpt:
  //     "How to discriminate synthetic voices and AI voice cloning attempts by combining multi-spectral cepstral analysis with bidirectional recurrent neural networks.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/audio-deepfake-detection-engineering-mfcc-lfcc-spectral-features-with-lstms",
  //   publishedDate: "Jul 15, 2024",
  //   readTime: "8 min read",
  //   claps: "1.2K",
  //   category: "Audio & NLP",
  //   tags: ["Audio AI", "Deep Learning", "Cybersecurity", "LSTM"],
  //   featured: false
  // },
  // {
  //   id: "vision-transformers-content-moderation",
  //   title: "Vision Transformers vs. CNNs for Explicit Visual Content Moderation",
  //   excerpt:
  //     "Benchmarking standard linear patch projection against convolutional patch extraction in Swin Transformers for high-accuracy, edge-deployable visual safety moderation.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/vision-transformers-vs-cnns-for-explicit-visual-content-moderation",
  //   publishedDate: "May 19, 2024",
  //   readTime: "5 min read",
  //   claps: "820",
  //   category: "Computer Vision",
  //   tags: ["Vision Transformers", "Swin ViT", "AI Safety", "Content Moderation"],
  //   featured: false
  // },
  // {
  //   id: "scaling-recommender-systems",
  //   title: "Scaling Recommendation Engines in Production: From Cosine Similarity to Boltzmann Machines",
  //   excerpt:
  //     "Practical lessons, algorithmic tradeoffs, and latency considerations when building hybrid collaborative filtering recommendation systems for web applications.",
  //   mediumUrl: "https://medium.com/@yaseeng-md/scaling-recommendation-engines-in-production-hybrid-filtering",
  //   publishedDate: "Mar 04, 2024",
  //   readTime: "6 min read",
  //   claps: "750",
  //   category: "MLOps",
  //   tags: ["MLOps", "Recommender Systems", "Scikit-Learn", "Flask"],
  //   featured: false
  // }
// ];
