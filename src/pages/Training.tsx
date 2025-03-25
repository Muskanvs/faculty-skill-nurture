
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

const Training: React.FC = () => {
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
                  <BreadcrumbPage>Training</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-6">Training & Learning Modules</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Access a wide range of training modules designed to enhance your teaching skills
                    and help you become a more effective educator.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/4">
                    <div className="bg-muted/30 p-6 rounded-xl sticky top-24">
                      <h2 className="text-xl font-semibold mb-4">Filter Modules</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Categories</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <input type="checkbox" id="cat-teaching" className="mr-2" />
                              <label htmlFor="cat-teaching">Teaching Methodology</label>
                            </li>
                            <li className="flex items-center">
                              <input type="checkbox" id="cat-tech" className="mr-2" />
                              <label htmlFor="cat-tech">Technology in Education</label>
                            </li>
                            <li className="flex items-center">
                              <input type="checkbox" id="cat-assessment" className="mr-2" />
                              <label htmlFor="cat-assessment">Student Assessment</label>
                            </li>
                            <li className="flex items-center">
                              <input type="checkbox" id="cat-communication" className="mr-2" />
                              <label htmlFor="cat-communication">Communication Skills</label>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">Duration</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <input type="checkbox" id="dur-short" className="mr-2" />
                              <label htmlFor="dur-short">Less than 1 hour</label>
                            </li>
                            <li className="flex items-center">
                              <input type="checkbox" id="dur-medium" className="mr-2" />
                              <label htmlFor="dur-medium">1-3 hours</label>
                            </li>
                            <li className="flex items-center">
                              <input type="checkbox" id="dur-long" className="mr-2" />
                              <label htmlFor="dur-long">More than 3 hours</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded mb-3">Teaching Methodology</span>
                        <h3 className="text-xl font-medium mb-2">Effective Lesson Planning</h3>
                        <p className="text-muted-foreground mb-4">Learn how to create engaging and effective lesson plans that achieve learning objectives.</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Duration: 2 hours</span>
                          <button className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300">
                            Enroll
                          </button>
                        </div>
                      </div>
                      <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded mb-3">Technology in Education</span>
                        <h3 className="text-xl font-medium mb-2">Digital Tools for Classroom Engagement</h3>
                        <p className="text-muted-foreground mb-4">Discover digital tools and platforms that can enhance student engagement and participation.</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Duration: 1.5 hours</span>
                          <button className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300">
                            Enroll
                          </button>
                        </div>
                      </div>
                      <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded mb-3">Student Assessment</span>
                        <h3 className="text-xl font-medium mb-2">Formative Assessment Strategies</h3>
                        <p className="text-muted-foreground mb-4">Learn techniques for ongoing assessment that helps students improve throughout the learning process.</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Duration: 2.5 hours</span>
                          <button className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300">
                            Enroll
                          </button>
                        </div>
                      </div>
                      <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded mb-3">Communication Skills</span>
                        <h3 className="text-xl font-medium mb-2">Effective Feedback Techniques</h3>
                        <p className="text-muted-foreground mb-4">Develop skills to provide meaningful feedback that motivates and guides student improvement.</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Duration: 45 minutes</span>
                          <button className="btn-primary bg-primary text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-all-300">
                            Enroll
                          </button>
                        </div>
                      </div>
                    </div>
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

export default Training;
