
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import AnimatedGradient from "../components/ui/AnimatedGradient";
import PageTransition from "../components/ui/PageTransition";

const ResetPassword = () => {
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
                    Create New <span className="gradient-text">Password</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Enter a new password for your account to complete the password reset process.
                  </p>
                  <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-medium mb-4">Password Tips</h3>
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
                        <span className="text-sm">Use at least 8 characters</span>
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
                        <span className="text-sm">Include symbols and numbers</span>
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
                        <span className="text-sm">Don't reuse passwords</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <ResetPasswordForm />
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default ResetPassword;
