
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold gradient-text">FacultySkills</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering faculty members to assess and enhance their skills through
              personalized assessments and training modules.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/assessment"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Assessments
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Training Modules
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@facultyskills.com"
                  className="text-muted-foreground hover:text-primary transition-all-300"
                >
                  support@facultyskills.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} FacultySkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
