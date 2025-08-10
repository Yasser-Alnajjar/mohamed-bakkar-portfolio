"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";
import { Badge, Button } from "./atoms";

export const Experience = () => {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "Eraa Soft",
      location: "Cairo, Egypt",
      period: "June 2024 - Present",
      description: [
        "Designed high-quality visuals for social media, print materials, and other marketing assets",
        "Edited and produced engaging video content to promote projects and advertising campaigns",
        "Ensured all designs aligned with brand identity, project goals, and guidelines",
        "Collaborated with the marketing team to understand campaign needs and deliver creative assets on time",
        "Analyzed design trends and competitors to create innovative and competitive visual content",
        "Strong written and instructional design skills, with ability to translate complex information into clear and visually appealing formats",
      ],
      tech: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Social Media Design",
        "Print Design",
      ],
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      location: "Cairo, Egypt",
      period: "2022 - Present",
      description: [
        "Conceptualized and executed creative ideas, layouts, and designs for various clients",
        "Developed graphics, illustrations, and layouts for company logos, social media pages, and marketing materials",
        "Produced visuals aligned with brand identity, ensuring aesthetic appeal and consistency",
        "Created diverse illustration styles tailored to client needs and project objectives",
        "Designed corporate identities and logos, utilizing appropriate colors and layouts for each graphic",
        "Prepared rough drafts, presented ideas, and revised designs based on client feedback",
        "Tested designs across various media formats to ensure compatibility and quality",
        "Stayed updated with design trends, technologies, and market competition to enhance creativity",
        "Collaborated with clients and teams to produce high-quality presentations, newsletters, and marketing materials",
        "Translated strategic directions into polished designs adhering to brand guidelines",
      ],
      tech: [
        "Adobe Creative Suite",
        "Brand Identity",
        "Logo Design",
        "Social Media",
        "Print Materials",
        "Client Communication",
      ],
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
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            My journey in Graphic Design, from intern to senior developer
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="col-span-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 mt-6"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-muted-foreground leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.tech.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Section */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Want to know more?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Download my complete CV to see detailed information about my
              experience, education, and achievements in graphic design.
            </p>
            <Button className="mx-auto">Download Full CV</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
