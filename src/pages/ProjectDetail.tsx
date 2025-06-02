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
    "sar-image-colorization": {
      id: "sar-image-colorization",
      title: "SAR Image Colorization",
      description:
        "Developed a deep learning model to colorize Synthetic Aperture Radar (SAR) imagery using GANs and U-Net architectures.",
        image: "/public/sar.jpg",
      techStack: ["PyTorch", "GANs", "Computer Vision", "Remote Sensing"],
      metrics: "Achieved 0.97 SSIM, 27.42 dB PSNR, and 0.0021 MSE",
      githubUrl:
        "https://github.com/yaseeng-md/SAR_Image_Colorization_Using_Deep_Learning_Algorithms",
    },
    "explicit-content-detection": {
      id: "explicit-content-detection",
      title: "Explicit Content Detection",
      description:
        "Built a robust AI system for detecting and filtering explicit content using Vision Transformers and deep learning.",
      image: "/public/explicit.jpg",
      techStack: ["PyTorch","TensorFlow","ViT", "Swin ViT", "Transformers", "Linux"],
      metrics: "98.35% accuracy; 2% improvement over CNN methods",
      githubUrl: "https://github.com/yaseeng-md/Explicit-Content-Detection",
    },
    "audio-deepfake-detection": {
      id: "audio-deepfake-detection",
      title: "Audio Deepfake Detection",
      description:
        "Created an ML system to identify manipulated audio recordings by analyzing spectral inconsistencies and voice patterns.",
      image: "/public/audio.jpg",
      techStack: ["Librosa", "PyTorch", "MFCC", "LSTM", "Streamlit"],
      metrics: "98% accuracy with MFCC-LSTM; 96% with LFCC-LSTM",
      githubUrl: "https://github.com/yaseeng-md/Audio-DeepFake-Detection",
    },
    "recommendation-system": {
      id: "recommendation-system",
      title: "Recommendation System",
      description:
        "Designed a hybrid recommendation system combining collaborative filtering and content-based approaches with Flask web deployment.",
      image: "/public/recc.jpg",
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
    "sar-image-colorization": `This project addresses a key challenge in the geospatial domain: enhancing the interpretability of grayscale Synthetic Aperture Radar (SAR) images. SAR imagery, while rich in structural data, lacks visual clarity. I implemented a deep learning pipeline using Pix2Pix GAN architecture combined with a custom perceptual loss function to generate colorized versions of SAR images.

The training process involved paired datasets of SAR and optical imagery, enabling the model to learn complex mappings between radar features and plausible color representations. This significantly improved downstream analytical tasks such as classification and segmentation.

The model achieved 0.97 SSIM, 27.42 dB PSNR, and 0.0021 MSE — representing a 510% jump in SSIM and 143% increase in PSNR compared to the baseline. These results make the model highly applicable in terrain analysis, environmental monitoring, and remote sensing applications.`,

    "explicit-content-detection": `In this project, I built a high-precision AI system to detect explicit and inappropriate content in images and videos using Vision Transformer (ViT) and Swin ViT models. These advanced models outperformed CNNs by providing more detailed feature extraction and understanding of visual contexts.

  To enhance the feature extraction, tried Convolutional Patch Extraction and Feed Forward Patch Extraction. 

To boost performance and generalization, I fine-tuned pre-trained transformer models using custom datasets and integrated Hugging Face Transformers for flexibility. The system was containerized and deployed on Linux servers to ensure scalability in real-world moderation platforms.

The final model achieved an accuracy of 98.35%, a 2% improvement over conventional CNN-based detectors. Its efficient inference speed and robust classification make it viable for real-time use in content moderation pipelines on social platforms.`,

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
