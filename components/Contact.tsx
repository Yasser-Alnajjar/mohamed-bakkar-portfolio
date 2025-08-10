"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button, Input, Label, Textarea } from "./atoms";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "mohamed.bakkar.gh@gmail.com",
      link: "mailto:mohamed.bakkar.gh@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "01158719833",
      link: "tel:+201158719833",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Cairo - Maadi, Egypt",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-bakkar-66877a333",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          <path d="M8 12h8" />
          <path d="M12 8h4" />
          <path d="M12 16h4" />
        </svg>
      ),
      name: "Behance",
      url: "https://www.behance.net/assskk734837",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Section Header */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Contact Form */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Send me a message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className=" px-4 py-3 h-auto"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      className=" px-4 py-3 h-auto"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    className=" px-4 py-3 h-auto"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    className=" px-4 py-3 h-auto"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <Button type="submit">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
            <motion.div
              className="col-span-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-medium">
                    Available for new opportunities
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently open to full-time positions, freelance projects,
                  and interesting collaborations in graphic design. Let's
                  discuss how we can work together!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="col-span-12 lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/80 transition-colors duration-300 group"
                  >
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-foreground transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button asChild key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Location
              </h3>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-yellow-200/10 rounded-lg border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Cairo - Maadi, Egypt
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
