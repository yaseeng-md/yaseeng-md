
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import PublicationsSection from "./PublicationsSection";

const ExperienceSection = () => {
  const experiences =[
  {
    title: "AI & Vision Engineer",
    company: "Terafac Technologies Private Limited",
    duration: "Aug 2025 – Oct 2026",
    description:
      "Engineered Agentic AI systems, autonomous robotic workflows, and production-grade computer vision solutions, focusing on execution reliability, intelligent orchestration, and operational efficiency.",
    responsibilities: [
      "Developed a swarm-based Agentic AI system using the Pi harness and multiple specialized Pi agents as autonomous workers, orchestrating distinct LLM applications through distributed, role-based workflows.",
      "Architected a 3-phase execution pipeline with adaptive queue-based scheduling and indexed optimization, reducing control complexity and improving execution efficiency by approximately 30%.",
      "Engineered and deployed a production-grade autonomous path-planning pipeline, achieving an 80% task success rate in real-world robotic operations.",
      "Developed a raycasting-based successive approximation algorithm, improving pose correction accuracy from approximately 60% to nearly 100% on challenging edge cases.",
      "Built an automated regression and simulation framework using Python and Flask, covering 100+ scenarios and reducing manual validation effort by approximately 70%.",
      "Managed operations across 2 production sites, identifying system gaps, diagnosing operational bottlenecks, and implementing solutions to improve efficiency, reliability, and production throughput."
    ],
  },
  {
      title: "Machine Learning Intern",
      company: "DataValley.ai",
      duration: "Jan 2024 – May 2024",
      description:
        "Developed and optimized machine learning solutions, specializing in recommendation systems, model evaluation, and scalable backend API development.",
      responsibilities: [
        "Developed a content-based recommendation engine using TF-IDF, cosine similarity, and attribute filtering, expanding catalog coverage by 32% across low-interaction niche items.",
        "Built a Flask REST API for top-K recommendations and similar-item retrieval with fallback logic, achieving less than 45 ms average response latency under peak load.",
        "Evaluated category, content-based, and hybrid recommendation models, achieving an 18% lift in NDCG@10 and a 24% improvement in Precision@5 over standard heuristic baselines.",
        "Architected an automated testing suite using pytest, achieving 92% code coverage, and implemented Locust load testing to sustain 250+ requests/sec with less than 0.1% error rate."
      ],
    },
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

        {/* Publications Section (Positioned above Certifications) */}
        <div className="mb-16">
          <PublicationsSection />
        </div>

        <div id="certifications">
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
