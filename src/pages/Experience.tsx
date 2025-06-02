
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Experience & Education</h1>
            <p className="text-muted-foreground">
              My professional journey and educational background in machine learning and AI.
            </p>
          </div>

          <ExperienceSection />

          <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12">Education</h2>

          <Card className="border border-border/40 shadow-sm">
            <CardContent className="p-6 space-y-8">

              {/* M.Tech */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">M.Tech in Artificial Intelligence & Machine Learning</h3>
                    <p className="text-muted-foreground">Lovely Professional University, Phagwara</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    2024 - Present
                  </span>
                </div>
                <p className="text-muted-foreground">GPA: 8.89</p>
              </div>

              <hr className="border-t border-border" />

              {/* B.Tech */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">B.Tech in Artificial Intelligence & Machine Learning</h3>
                    <p className="text-muted-foreground">Sri Venkateswara Engineering College, Tirupati</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    2021 - 2024
                  </span>
                </div>
                <p className="text-muted-foreground">GPA: 7.93</p>
              </div>

              <hr className="border-t border-border" />

              {/* Diploma */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Diploma in Electronics and Communication Engineering</h3>
                    <p className="text-muted-foreground">Government Polytechnic College, Anantapur</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    2018 - 2021
                  </span>
                </div>
                <p className="text-muted-foreground">GPA: 8.3</p>
              </div>

            </CardContent>
          </Card>
        </div>



          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12">Skills</h2>
            {/* <div className="grid gap-8 md:grid-cols-2"> */}
              <div>
                <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Programming Languages:</span> Python, SQL.
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Frameworks:</span> MLOps, Scikit-Learn, NLTK, PyTorch, TensorFlow, Keras, Flask, Streamlit, MongoDB, Huggingface.
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Tools:</span>  Docker, GIT, MySQL, Power BI, Tableau, Microsoft Excel, MongoDB Compass.
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Amazon Web Services:</span> S3, EC2, Kinesis Data Streams, Kinesis Data Firehose, FSx, Lambda.
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Languages:</span> English, Telugu, Kannada, Hindi.
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-xl font-medium mb-4">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Problem Solving:</span> Analytical thinking and creative solution development
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Communication:</span> Technical documentation and presentation of complex ideas
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Collaboration:</span> Cross-functional team experience and remote work capabilities
                  </li>
                  <li className="bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">Continuous Learning:</span> Self-directed study and adaptation to new technologies
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
