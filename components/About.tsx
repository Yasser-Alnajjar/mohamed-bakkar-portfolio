"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

export const About = () => {
  const strengths = [
    {
      icon: <Code size={24} />,
      title: "Creativity",
      description: "Strong creative thinking and innovative design solutions",
    },
    {
      icon: <Palette size={24} />,
      title: "Attention to Detail",
      description: "Meticulous attention to design quality and consistency",
    },
    {
      icon: <Zap size={24} />,
      title: "Communication",
      description: "Excellent teamwork and client communication skills",
    },
    {
      icon: <Users size={24} />,
      title: "Time Management",
      description: "Efficient project delivery and deadline management",
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
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Get to know me better and understand what drives my passion for
            Graphic Design
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Left Column - Bio */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Mid-Level Graphic Designer with over 3 years
                  of experience in creating impactful visual designs. My journey
                  in graphic design started with a passion for visual
                  storytelling and creative expression, which evolved into a
                  professional career delivering high-quality designs for
                  various clients.
                </p>
                <p>
                  I specialize in brand identity design, social media graphics,
                  print materials, and motion graphics. I excel in Adobe
                  Creative Suite including Photoshop, Illustrator, After
                  Effects, and Premiere Pro, creating designs that align with
                  brand guidelines and project objectives.
                </p>
                <p>
                  My strong problem-solving skills and adaptability ensure
                  efficient project delivery and high-quality design standards.
                  I'm constantly learning and adapting to new design trends to
                  deliver the best possible solutions for my clients and
                  employers.
                </p>
              </div>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                What I Do
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I create compelling visual designs that communicate brand
                  messages effectively and engage target audiences. My approach
                  combines creative expertise with strategic thinking to deliver
                  solutions that exceed expectations.
                </p>
                <p>
                  From concept to final delivery, I handle every aspect of
                  graphic design, including brand identity development, social
                  media content, print materials, motion graphics, and video
                  editing. I ensure all designs maintain brand consistency and
                  meet project requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Key Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">
                    Faculty of Sharia and Law - Al Azhar University
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    4th year - Law Major
                  </p>
                  <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Volunteering Work
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">
                    Resala Charitable Society, Al-Saff Branch
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    June 2018 - 2022
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Volunteer Graphic Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Personal Information
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Date of Birth:
                      </span>{" "}
                      7/3/2000
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Place of Birth:
                      </span>{" "}
                      Giza, Egypt
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Military Status:
                      </span>{" "}
                      Postponed conscription
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Marital Status:
                      </span>{" "}
                      Single
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
