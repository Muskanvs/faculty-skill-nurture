
import React from "react";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-grow pt-24 pb-16">
          <div className="section-container">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-6">About FacultySkills</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    FacultySkills is a comprehensive platform designed to empower faculty members 
                    with the tools they need to assess and enhance their teaching skills.
                  </p>
                  
                  <p className="mb-4">
                    Our mission is to provide educators with personalized assessments and targeted 
                    training opportunities that help them grow professionally and improve student outcomes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground mb-6">
                  We envision a future where all faculty members have access to high-quality
                  professional development resources that are tailored to their specific needs
                  and teaching contexts.
                </p>
              </section>

              <section className="bg-muted/30 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Skills Assessment</h3>
                    <p>Comprehensive assessment tools that help faculty members identify their strengths and areas for improvement.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Training Modules</h3>
                    <p>Targeted training resources designed to address specific skill gaps and enhance teaching effectiveness.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Progress Tracking</h3>
                    <p>Detailed reports and analytics to monitor growth and development over time.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Personalized Recommendations</h3>
                    <p>AI-driven suggestions for training modules based on assessment results.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-muted-foreground mb-6">
                  FacultySkills was founded by a team of experienced educators and technologists
                  who understand the challenges faced by faculty members in today's rapidly
                  evolving educational landscape.
                </p>
              </section>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default About;
