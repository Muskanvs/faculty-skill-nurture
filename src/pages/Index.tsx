
import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Faculty collaboration"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="heading-2 mb-6">
                    Why Faculty <span className="gradient-text">Assessment Matters</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Regular skill assessment helps faculty members identify areas of strength and
                    opportunities for growth, leading to improved teaching outcomes and student
                    satisfaction.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      "Data-driven insights for professional development",
                      "Targeted training recommendations based on assessment results",
                      "Track progress over time with comprehensive reporting",
                      "Build a culture of continuous improvement",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1 mr-3">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-pattern">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="heading-2 mb-6">
                Ready to Enhance Your <span className="gradient-text">Teaching Skills?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of faculty members who are already benefiting from our
                comprehensive assessment and training platform.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="/signup"
                  className="btn-primary text-base px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started Today
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
