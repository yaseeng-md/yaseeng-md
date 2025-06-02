
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ExperienceSection = () => {
  const experiences =[
  {
    title: "Machine Learning Intern",
    company: "Data Valley.ai",
    duration: "Jan 2024 – Apr 2024",
    description: "Developed and optimized machine learning models for real-world business use cases, with a primary focus on building a robust recommendation system.",
    responsibilities: [
      "Designed and deployed a personalized movie recommendation system tailored for a client’s use case.",
      "Implemented collaborative filtering techniques including Cosine Similarity and Boltzmann Machines to enhance prediction accuracy and user satisfaction."
    ],
  }
];

  const certifications =[
  {
    name: "DeepLearning.AI Natural Language Processing Specialization",
    issuer: "Coursera",
    date: "2025",
    description: "Gained a solid understanding of Natural Language Processing principles, including how computers interpret, generate, and represent human language, along with the mathematical foundations behind NLP models.",
  },
  {
    name: "DeepLearning.AI TensorFlow Developer Certification",
    issuer: "Coursera",
    date: "2024",
    description: "Mastered TensorFlow and its practical applications across diverse projects and data formats, focusing on efficient model deployment and optimization techniques.",
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2023",
    description: "Learned foundational machine learning concepts, best practices for model development, and the underlying mathematical principles from the ground up.",
  },
  {
    name: "Medical Image Processing",
    issuer: "NPTEL",
    date: "2023",
    description: "Explored advanced preprocessing techniques and feature extraction methods in medical imaging, with an emphasis on computational efficiency and diagnostic accuracy.",
  },
  {
    name: "Reinforcement Learning",
    issuer: "NPTEL",
    date: "2023",
    description: "Studied core reinforcement learning algorithms through expert-led instruction and applied hands-on projects to understand policy optimization and reward-based systems.",
  }
];


  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card key={index} className="border border-border/40 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {job.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Certifications & Education</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-border/40 shadow-sm h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
