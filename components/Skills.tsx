"use client";

import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: [
        { name: "Adobe Photoshop", icon: "🎨", level: 95 },
        { name: "Adobe Illustrator", icon: "✏️", level: 90 },
        { name: "Adobe After Effects", icon: "🎬", level: 85 },
        { name: "Adobe Premiere Pro", icon: "🎥", level: 88 },
        { name: "InDesign", icon: "📄", level: 80 },
      ],
    },
    {
      category: "Design Skills",
      skills: [
        { name: "Brand Identity", icon: "🏷️", level: 90 },
        { name: "Illustrations", icon: "🎭", level: 85 },
        { name: "Social Media Design", icon: "📱", level: 92 },
        { name: "Motion Graphics", icon: "✨", level: 80 },
        { name: "Typography", icon: "🔤", level: 88 },
        { name: "Print Design", icon: "🖨️", level: 85 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Creativity", icon: "💡", level: 95 },
        { name: "Attention to Detail", icon: "🔍", level: 90 },
        { name: "Communication", icon: "💬", level: 88 },
        { name: "Teamwork", icon: "🤝", level: 85 },
        { name: "Time Management", icon: "⏰", level: 87 },
        { name: "Problem Solving", icon: "🧩", level: 82 },
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            My technical expertise spans across modern Graphic Design
            technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="col-span-12 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary text-center">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon with glow + float */}
                    <motion.div
                      className="text-5xl mb-4 text-primary"
                      animate={{
                        y: [0, -5, 0], // floating effect
                        textShadow: [
                          "0 0 0px #d6c0a3",
                          "0 0 8px #d6c0a3",
                          "0 0 0px #d6c0a3",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {skill.icon}
                    </motion.div>

                    <h4 className="font-semibold text-foreground mb-1">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="col-span-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              Additional Skills & Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Flexibility",
                "Video Editing",
                "Logo Design",
                "Layout Design",
                "Color Theory",
                "Visual Communication",
                "Client Collaboration",
                "Design Trends",
                "English (Good)",
                "Arabic (Native)",
                "Project Management",
                "Quality Assurance",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center space-x-2 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
