
import { Button } from "./ui/button";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample project data
const featuredProjects: ProjectCardProps[] = [
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
