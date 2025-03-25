
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a backend
    console.log("Form submitted:", formData);
    
    // Show success message using toast
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
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
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Have questions or feedback about FacultySkills? We'd love to hear from you.
                    Use the form below to get in touch with our support team.
                  </p>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="bg-muted/30 p-8 rounded-xl space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <a href="mailto:support@facultyskills.com" className="text-primary hover:underline">
                        support@facultyskills.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Phone</h3>
                      <p>(555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Address</h3>
                      <p>
                        FacultySkills, Inc.<br />
                        123 Education Lane<br />
                        Academic City, AC 10101
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Hours</h3>
                      <p>Monday - Friday: 9AM - 5PM EST</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">How do I reset my password?</h3>
                        <p className="text-muted-foreground">
                          You can reset your password by clicking on the "Forgot Password" link on the login page.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Are the assessments timed?</h3>
                        <p className="text-muted-foreground">
                          Yes, most assessments have a time limit that will be displayed before you start the assessment.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">How often should I take assessments?</h3>
                        <p className="text-muted-foreground">
                          We recommend taking assessments every 3-6 months to track your progress over time.
                        </p>
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

export default Contact;
