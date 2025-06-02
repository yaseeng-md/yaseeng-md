
import { Card, CardContent } from "./ui/card";
import { 
  Code, Database, 
  CodeSquare, DatabaseIcon, ServerIcon, Speech 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "SQL"],
    },
    {
      title: "Frameworks",
      icon: <CodeSquare size={24} />,
      skills: ['MLOps', 'Scikit-Learn', 'NLTK', 'PyTorch', 'TensorFlow', 'Keras', 'Flask', 'Streamlit', 'MongoDB', 'Huggingface'],
    },
    {
      title: "Tools",
      icon: <ServerIcon size={24} />,
      skills: ['Docker', 'GIT', 'MySQL', 'Power BI', 'Tableau', 'Microsoft Excel', 'MongoDB Compass'],
    },
    {
      title: "Amazon Web Services",
      icon: <Database size={24} />,
      skills: ['S3', 'EC2', 'Kinesis Data Streams', 'Kinesis Data Firehose', 'FSx', 'Lambda'],
    },
    {
      title: "Languages",
      icon: <Speech size={24} />,
      skills: ["English","Hindi","Telugu","Kannada"],
    },
  ];

  return (
    <section id="skills" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit for building advanced machine learning solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-block px-3 py-1 text-sm bg-background border border-border/40 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
