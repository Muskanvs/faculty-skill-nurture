
import React from "react";
import FeatureCard from "./FeatureCard";
import { FileText, BarChart, BookOpen, Users } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Skill Assessment",
      description:
        "Comprehensive assessment tools designed to evaluate faculty skills across various disciplines and competencies.",
    },
    {
      icon: BarChart,
      title: "Detailed Reports",
      description:
        "In-depth analytics and reports that highlight strengths, identify areas for improvement, and track progress over time.",
    },
    {
      icon: BookOpen,
      title: "Training Modules",
      description:
        "Personalized training recommendations based on assessment results, with curated resources for skill development.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Connect with peers, share insights, and learn from collective experiences through collaborative features.",
    },
  ];

  return (
    <section className="py-20 bg-pattern">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">
            Comprehensive Faculty <span className="gradient-text">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides all the tools needed to assess, analyze, and
            improve teaching and research skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
