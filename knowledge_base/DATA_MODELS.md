# Data Models & Schemas

This document details all data schemas, type contracts, and content records used across the application.

---

## 1. Project Entity

### Type Contract
```ts
export interface ProjectCardProps {
  id: string;               // Unique slug used in route /projects/:id
  title: string;            // Display title
  description: string;      // Concise 1-2 sentence overview
  image: string;            // Path in /public directory (e.g. "/sar.jpg")
  techStack: string[];      // Array of technology names
  metrics?: string;         // Quantitative achievements (e.g., SSIM, accuracy)
  githubUrl?: string;       // Public repository URL
  demoUrl?: string;         // Optional live deployment URL
}
```

### Complete Project Registry

| ID / Slug | Title | Key Tech Stack | Image | GitHub URL |
| :--- | :--- | :--- | :--- | :--- |
| `amg` | Agentic Multimodal Graph Augmented Retrieval System | Vector DBs, Neo4j, Qdrant, ColPali, Qwen 3.1VL, Nemotron, Jina Reranker | `/rag.jpg` | [GitHub](https://github.com/yaseeng-md/Agentic_Multimodal_Graph_Augmented_Retrieval_System) |
| `ai-weekly-digest` | AI-Powered Weekly Digest & News Intelligence | Python, RSS, LangGraph, Ollama, Qwen 2.5 3B, SQLite, Docker | `/ai-weekly-digest.jpg` | [GitHub](https://github.com/yaseeng-md/ai-weekly-digest) |
| `llama-website-summarization` | Website Article Summarization with LLaMA 2 | Python, LLaMA 2, Serper API, BeautifulSoup, Streamlit, PEFT, Hugging Face | `/llama-summary.jpg` | [GitHub](https://github.com/yaseeng-md/llama-website-summarization) |
| `sar-image-colorization` | SAR Image Colorization | Streamlit, PyTorch, OpenCV, Pix2Pix, GANs | `/sar.jpg` | [GitHub](https://github.com/yaseeng-md/SAR_Image_Colorization_Using_Deep_Learning_Algorithms) |
| `audio-deepfake-detection` | Audio Deepfake Detection | PyTorch, Librosa, Streamlit, MFCC, LSTM | `/audio.jpg` | [GitHub](https://github.com/yaseeng-md/Audio-DeepFake-Detection) |
| `explicit-content-detection` | Explicit Content Detection using Vision Transformers | PyTorch, TensorFlow, ViT, Swin ViT, Transformers, Linux | `/explicit.jpg` | [GitHub](https://github.com/yaseeng-md/Explicit-Content-Detection) |
| `recommendation-system` | Movie Recommendation System | Flask, Python, Scikit-Learn, Collaborative Filtering, Cosine Similarity | `/recc.jpg` | [GitHub](https://github.com/yaseeng-md/Movie_recommedation_Systems) |
| `real-time-fight-detection` | Real-Time Fight Detection | CNN, LSTM, BiLSTM, 3D CNN, Python, Tensorflow, OpenCV | `/fight.jpg` | [GitHub](https://github.com/yaseeng-md/Real_Time_Fight_Detection_Through_Surveillance_Cameras) |
| *(commented)* `rag-qa-system` | RAG-based QA System with LLMs | Streamlit, Flask, MongoDB, Ollama, Huggingface, SERPER API | `https://images.unsplash.com/...` | [GitHub](https://github.com/yaseeng-md/Question-And-Answering-RAGs) |

---

## 2. Work Experience Entity

### Schema
```ts
interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}
```

### Records
* **Data Valley.ai**
  * **Role**: Machine Learning Intern
  * **Duration**: Jan 2024 – Apr 2024
  * **Responsibilities**:
    - Designed and deployed personalized movie recommendation system for a client's use case.
    - Implemented collaborative filtering techniques (Cosine Similarity, Boltzmann Machines).

---

## 3. Certifications Entity

### Schema
```ts
interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  description: string;
}
```

### Records
1. **DeepLearning.AI Natural Language Processing Specialization** | Coursera (2025)
2. **DeepLearning.AI TensorFlow Developer Certification** | Coursera (2024)
3. **Introduction to Machine Learning** | NPTEL (2023)
4. **Medical Image Processing** | NPTEL (2023)
5. **Reinforcement Learning** | NPTEL (2023)

---

## 4. Education Records

Found in [src/pages/Experience.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Experience.tsx):
1. **M.Tech in Artificial Intelligence & Machine Learning**
   - Lovely Professional University, Phagwara
   - 2024 – Present | GPA: **8.89**
2. **B.Tech in Artificial Intelligence & Machine Learning**
   - Sri Venkateswara Engineering College, Tirupati
   - 2021 – 2024 | GPA: **7.93**
3. **Diploma in Electronics and Communication Engineering**
   - Government Polytechnic College, Anantapur
   - 2018 – 2021 | GPA: **8.3**

---

## 5. Publications Entity ([src/data/publications.ts](file:///C:/Users/gandl/Documents/yaseeng-md/src/data/publications.ts))

### Schema
```ts
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  publicationUrl: string;
  abstract: string;
  highlights: string[];
  metrics?: string;
  tags: string[];
  codeUrl?: string;
  doi?: string;
  status: "Published" | "Under Review" | "Preprint";
}
```

### Current Records
1. **Agentic Multimodal Graph-Augmented Retrieval (AMG)** — ColPali, Neo4j, Qdrant, Jina Reranker (Recall@1 92%, MRR@20 0.9355).
2. **Colorization of SAR Imagery via Perceptual-Loss Augmented Conditional GANs** — Pix2Pix, perceptual loss (SSIM 0.97, PSNR 27.42 dB).
3. **Explicit Visual Content Detection Using Hierarchical Vision Transformers** — Swin ViT, convolutional patch extraction (98.35% accuracy).
4. **Synthetic Speech Discrimination: Audio Deepfake Detection via MFCC-LFCC Fusion** — CNN-RNN-LSTM (98% MFCC accuracy).

---

## 6. Medium Blog Entity ([src/data/blogs.ts](file:///C:/Users/gandl/Documents/yaseeng-md/src/data/blogs.ts))

### Schema
```ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  mediumUrl: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  claps?: string;
  category: "Generative AI" | "Computer Vision" | "MLOps" | "Audio & NLP";
  featured?: boolean;
}
```

### Current Records
1. *Deep Dive into Multimodal RAG with ColPali and Neo4j Knowledge Graphs* (Nov 2024, 7 min read, 1.4K claps)
2. *Context-Aware News Intelligence: Building an Automated Digest with LangGraph & Ollama* (Oct 2024, 9 min read, 1.6K claps)
3. *SAR Image Colorization: Training Pix2Pix GANs with Custom Perceptual Loss* (Aug 2024, 6 min read, 980 claps)
4. *Audio Deepfake Detection: Engineering MFCC & LFCC Spectral Features with LSTMs* (Jul 2024, 8 min read, 1.2K claps)
5. *Vision Transformers vs. CNNs for Explicit Visual Content Moderation* (May 2024, 5 min read, 820 claps)
6. *Scaling Recommendation Engines in Production: Hybrid Filtering* (Mar 2024, 6 min read, 750 claps)

---

## 7. Central Profile Configuration ([src/constants/profile.ts](file:///C:/Users/gandl/Documents/yaseeng-md/src/constants/profile.ts))

Single source of truth for developer identity, links, and photographs:
```ts
export const PROFILE = {
  name: "Gandluru Mohammed Yaseen",
  shortName: "Yaseen G",
  role: "AI Engineer",
  title: "Machine Learning Engineer | MLOps Enthusiast | AI Researcher",
  bio: "Machine Learning Engineer | MLOps Enthusiast | AI Researcher passionate about building real-world AI solutions...",
  about: "I am a dedicated Machine Learning and AI Engineer with a strong foundation in deep learning...",
  image: {
    src: "/images/profile.webp",           // Optimized WebP production asset
    fallbackSrc: "/ProfilePic.jpg",        // Original authentic asset
    alt: "Portrait of Gandluru Mohammed Yaseen",
  },
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/yaseeng-md",
    linkedin: "https://linkedin.com/in/yaseeng-md",
    email: "gandlurumohammedyaseen@gmail.com",
    phone: "+91 8328377285",
  },
};
```

---

## 6. Contact & Social Profiles

* **Full Name**: Gandluru Mohammed Yaseen
* **Email**: `gandlurumohammedyaseen@gmail.com`
* **Phone**: `+91 8328377285`
* **LinkedIn**: `https://linkedin.com/in/yaseeng-md`
* **GitHub**: `https://github.com/yaseeng-md`
* **Resume**: `/resume.pdf` (placed in `public/`)
