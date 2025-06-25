
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

const Projects = () => {
  // Complete projects list
  const allProjects: ProjectCardProps[] = [
    {
    id: "llama-website-summarization",
    title: "Website Article Summarization with LLaMA 2",
    description: "Ongoing project focused on fine-tuning a LLaMA 2 7B model using parameter-efficient training techniques for summarizing website articles. Combines web retrieval via Serper API and scraping with BeautifulSoup, targeting lightweight deployment.",
    image: "/llama-summary.jpg",
    techStack: ["Python", "LLaMA 2", "Serper API", "BeautifulSoup", "Streamlit", "PEFT", "Hugging Face"],
    metrics: "Targeting to decrese ROUGE score, reduce the model size and memory usage and decreasing inference time",
    githubUrl: "https://github.com/yaseeng-md/llama-website-summarization" // Replace with actual URL
  },
    
  {
    id: "sar-image-colorization",
    title: "SAR Image Colorization",
    description: "Research-driven GAN model to enhance SAR imagery using Pix2Pix and perceptual loss, significantly improving visual interpretability for remote sensing.",
    image: "/sar.jpg",
    techStack: ["Streamlit", "PyTorch", "OpenCV", "Pix2Pix", "GANs"],
    metrics: "Achieved 0.97 SSIM, 27.42 dB PSNR, and 0.0021 MSE",
    githubUrl: "https://github.com/yaseeng-md/SAR_Image_Colorization_Using_Deep_Learning_Algorithms",
  },
  {
    id: "audio-deepfake-detection",
    title: "Audio Deepfake Detection",
    description: "Designed CNN-RNN-LSTM based deep learning models for detecting manipulated audio using MFCC and LFCC features with high accuracy.",
    image: "/audio.jpg",
    techStack: ["PyTorch", "Librosa", "Streamlit", "MFCC", "LSTM"],
    metrics: "98% accuracy with MFCC-LSTM; 96% with LFCC-LSTM",
    githubUrl: "https://github.com/yaseeng-md/Audio-DeepFake-Detection",
  },
  {
    id: "explicit-content-detection",
    title: "Explicit Content Detection using Vision Transformers",
    description: "Built ViT and Swin ViT models for detecting explicit visual content with improved feature extraction accuracy over CNNs.",
    image: "/explicit.jpg",
    techStack: ["PyTorch","TensorFlow", "ViT", "Swin ViT", "Transformers", "Linux"],
    metrics: "98.35% accuracy; 2% improvement over baseline methods",
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
