
import React from "react";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FileText, ListCheck } from "lucide-react";

const Assessment: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleStartAssessment = (assessmentName: string, duration: string) => {
    toast({
      title: "Assessment Started",
      description: `You are now taking the ${assessmentName} assessment (${duration}). Good luck!`,
    });
    
    // In a real app, you would navigate to the actual assessment page
    // For now, we'll just show a toast notification
    // navigate('/assessment/take');
  };

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
                  <BreadcrumbPage>Assessment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-6">Faculty Skills Assessment</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Evaluate your teaching skills with our comprehensive assessment tools
                    designed specifically for faculty members.
                  </p>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-muted/30 p-8 rounded-xl">
                  <div className="mb-4 flex items-center">
                    <ListCheck className="h-6 w-6 mr-2 text-primary" />
                    <h2 className="text-2xl font-semibold">Available Assessments</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-medium mb-2">Teaching Methodology</h3>
                      <p className="text-muted-foreground mb-3">Evaluate your approach to lesson planning, delivery, and student engagement.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">30 minutes</span>
                        <button 
                          className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300"
                          onClick={() => handleStartAssessment("Teaching Methodology", "30 minutes")}
                        >
                          Start Assessment
                        </button>
                      </div>
                    </li>
                    <li className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-medium mb-2">Student Feedback</h3>
                      <p className="text-muted-foreground mb-3">Assess how effectively you provide constructive feedback to students.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">20 minutes</span>
                        <button 
                          className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300"
                          onClick={() => handleStartAssessment("Student Feedback", "20 minutes")}
                        >
                          Start Assessment
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-8 rounded-xl">
                  <div className="mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    <h2 className="text-2xl font-semibold">Your Assessment History</h2>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm mb-4">
                    <h3 className="text-xl font-medium mb-2">Recent Assessments</h3>
                    <p className="text-muted-foreground">You haven't taken any assessments yet. Start with one of our available assessments to track your progress.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Benefits of Regular Assessment</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Identify your teaching strengths and areas for improvement</li>
                      <li>Receive personalized training recommendations</li>
                      <li>Track your progress over time</li>
                      <li>Enhance student learning outcomes</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Assessment;
