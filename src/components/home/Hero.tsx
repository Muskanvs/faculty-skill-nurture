
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedGradient from "../ui/AnimatedGradient";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 pb-16 overflow-hidden">
      <AnimatedGradient />
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-4">
                Faculty Development Platform
              </span>
              <h1 className="heading-1 mb-6">
                Elevate Faculty Skills Through{" "}
                <span className="gradient-text">Intelligent Assessment</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A comprehensive platform designed to help faculty members identify strengths,
                improve weaknesses, and track professional growth through data-driven
                assessments and personalized training modules.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup"
                  className="btn-primary text-base inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                </Link>
                <Link 
                  to="/about"
                  className="btn-secondary text-base inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 glass-card rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Faculty Assessment Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-5 bottom-16 glass-card p-4 rounded-lg shadow-lg max-w-[200px] z-20 hidden md:block"
              >
                <div className="font-medium text-sm mb-1">Skill Progress</div>
                <div className="w-full h-2 bg-secondary rounded-full mb-2">
                  <div className="w-[75%] h-full bg-primary rounded-full"></div>
                </div>
                <div className="text-xs text-muted-foreground">75% completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-5 top-16 glass-card p-4 rounded-lg shadow-lg max-w-[200px] z-20 hidden md:block"
              >
                <div className="font-medium text-sm mb-1">Recommended Training</div>
                <p className="text-xs text-muted-foreground">3 new modules based on your recent assessment</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
