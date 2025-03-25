
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/ui/PageTransition";
import { motion } from "framer-motion";
import { BarChart, BookOpen, Calendar, Check, FileText } from "lucide-react";

const Dashboard = () => {
  // This would be fetched from a real backend in a complete application
  const userData = {
    name: "Dr. John Doe",
    upcomingAssessments: [
      { id: 1, title: "Teaching Methodology", date: "2023-06-15", duration: "45 min" },
      { id: 2, title: "Research Skills", date: "2023-06-22", duration: "60 min" },
    ],
    recentAssessments: [
      { id: 1, title: "Communication Skills", score: 85, date: "2023-05-20" },
      { id: 2, title: "Technology Proficiency", score: 72, date: "2023-05-15" },
      { id: 3, title: "Course Design", score: 90, date: "2023-05-10" },
    ],
    recommendedTraining: [
      { id: 1, title: "Effective Online Teaching", duration: "3 hours" },
      { id: 2, title: "Technology Tools for Education", duration: "4 hours" },
      { id: 3, title: "Research Methodology Workshop", duration: "5 hours" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-grow pt-20">
          <div className="section-container py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="heading-2 mb-2">Welcome, {userData.name}</h1>
                <p className="text-muted-foreground">
                  Here's an overview of your assessment progress and recommended training.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn-primary">Start New Assessment</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                    <FileText size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Completed Assessments</h3>
                </div>
                <div className="text-3xl font-bold mb-2">3</div>
                <p className="text-sm text-muted-foreground">Last completed on May 20, 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                    <BarChart size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Average Score</h3>
                </div>
                <div className="text-3xl font-bold mb-2">82%</div>
                <p className="text-sm text-muted-foreground">Across all assessments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Training Modules</h3>
                </div>
                <div className="text-3xl font-bold mb-2">3</div>
                <p className="text-sm text-muted-foreground">Recommended based on assessments</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Upcoming Assessments</h3>
                  <Calendar size={20} className="text-muted-foreground" />
                </div>

                {userData.upcomingAssessments.length > 0 ? (
                  <div className="space-y-4">
                    {userData.upcomingAssessments.map((assessment) => (
                      <div
                        key={assessment.id}
                        className="flex items-start p-4 rounded-lg bg-white/50 border border-border"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                          <FileText size={16} className="text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">{assessment.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-1">
                            <span>
                              {new Date(assessment.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="hidden sm:inline mx-2">•</span>
                            <span>{assessment.duration}</span>
                          </div>
                        </div>
                        <button className="btn-secondary text-xs px-3 py-1 h-auto">
                          Start
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground p-4">
                    No upcoming assessments scheduled
                  </p>
                )}

                <div className="mt-6 text-center">
                  <a href="/assessment" className="text-primary hover:text-primary/80 text-sm font-medium">
                    View All Assessments
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recommended Training</h3>
                  <BookOpen size={20} className="text-muted-foreground" />
                </div>

                {userData.recommendedTraining.length > 0 ? (
                  <div className="space-y-4">
                    {userData.recommendedTraining.map((module) => (
                      <div
                        key={module.id}
                        className="flex items-start p-4 rounded-lg bg-white/50 border border-border"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                          <BookOpen size={16} className="text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">{module.title}</h4>
                          <div className="text-sm text-muted-foreground mt-1">
                            Duration: {module.duration}
                          </div>
                        </div>
                        <button className="btn-secondary text-xs px-3 py-1 h-auto">
                          Enroll
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground p-4">
                    No training modules recommended at this time
                  </p>
                )}

                <div className="mt-6 text-center">
                  <a href="/training" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Browse All Training Modules
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 glass-card rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Assessment Results</h3>
                <BarChart size={20} className="text-muted-foreground" />
              </div>

              {userData.recentAssessments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Assessment</th>
                        <th className="text-center py-3 px-4 font-medium text-muted-foreground">Date</th>
                        <th className="text-center py-3 px-4 font-medium text-muted-foreground">Score</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.recentAssessments.map((assessment) => (
                        <tr key={assessment.id} className="border-b border-border last:border-0">
                          <td className="py-3 px-4">{assessment.title}</td>
                          <td className="py-3 px-4 text-center">
                            {new Date(assessment.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="inline-flex items-center">
                              <div className="w-full bg-secondary rounded-full h-2 mr-2 w-16">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${assessment.score}%` }}
                                ></div>
                              </div>
                              <span className="font-medium">{assessment.score}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button className="text-primary hover:text-primary/80 text-sm font-medium">
                              View Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-muted-foreground p-4">
                  No assessment results available
                </p>
              )}

              <div className="mt-6 text-center">
                <a href="/reports" className="text-primary hover:text-primary/80 text-sm font-medium">
                  View All Results
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Dashboard;
