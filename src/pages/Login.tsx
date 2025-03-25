
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AuthForm from "../components/auth/AuthForm";
import AnimatedGradient from "../components/ui/AnimatedGradient";
import PageTransition from "../components/ui/PageTransition";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-grow flex items-center justify-center relative py-20">
          <AnimatedGradient />
          <div className="section-container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:block">
                <div className="max-w-md">
                  <h1 className="heading-2 mb-6">
                    Welcome to the <span className="gradient-text">Faculty Skills</span> Portal
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Sign in to access your personalized dashboard, assessments, and training modules.
                  </p>
                  <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-medium mb-4">Why Join Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-1 mr-3">
                          <svg
                            width="10"
                            height="10"
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
                        <span className="text-sm">Personalized skill assessments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-1 mr-3">
                          <svg
                            width="10"
                            height="10"
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
                        <span className="text-sm">Targeted training recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-1 mr-3">
                          <svg
                            width="10"
                            height="10"
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
                        <span className="text-sm">Detailed progress tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <AuthForm isLogin={true} />
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Login;
