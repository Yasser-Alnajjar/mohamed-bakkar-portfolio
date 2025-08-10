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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Section Header */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            About Me
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            Get to know me better and understand what drives my passion for
            Graphic Design
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Left Column - Bio */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                Who I Am
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                What I Do
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I create compelling visual designs that communicate brand
                  messages effectively and engage target audiences. My approach
                  combines creative expertise with strategic thinking to deliver
                  solutions that exceed expectations.
                </p>
                <p>
                  From concept development to final execution, I ensure every
                  design element serves a purpose and contributes to the overall
                  message. I work closely with clients to understand their
                  vision and translate it into visually stunning and effective
                  designs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                My Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary flex-shrink-0 mt-1">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                        {strength.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                Education & Background
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Graphic Design Certification
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Professional training in Adobe Creative Suite and design
                      principles
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Continuous Learning
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Regularly updating skills through online courses and
                      industry trends
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
