"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@components";

export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[80vh]">
        {/* Left Column - Text Content */}
        <motion.div
          className="col-span-12 lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-primary font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Mahmod Bakkar Abdel WahaA
            </motion.h1>

            <motion.h2
              className="text-2xl lg:text-3xl font-semibold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Mid-Level Graphic Designer
            </motion.h2>
          </div>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Creative and detail-oriented Mid-Level Graphic Designer with 3 years
            of experience, seeking to deliver impactful designs, contribute to
            innovative projects, and support brand success through collaboration
            and visual storytelling.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button>
              <Download size={20} />
              Download CV
            </Button>

            <Button>
              <Mail size={20} />
              Get In Touch
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Picture */}
        <motion.div
          className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Profile Picture */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-yellow-200 rounded-full animate-float"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Mahmod Bakkar Abdel WahaA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
