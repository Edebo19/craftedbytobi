import { Award } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
import tobi from '../assets/one.jpeg'

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-amber-900 mb-6">About Me</h3>
            <p className="text-amber-700 text-lg mb-6">
              I'm Tobi, a passionate furniture craftsman with over 4 years of experience in creating bespoke pieces that tell stories. My journey began in a small workshop, and today I specialize in bringing your vision to life through exceptional woodworking and attention to detail.
            </p>
            <p className="text-amber-700 text-lg mb-6">
              Every piece I create is a testament to quality, durability, and timeless design. From concept to completion, I work closely with my clients to ensure each project exceeds expectations.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">4+</div>
                <div className="text-amber-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">35+</div>
                <div className="text-amber-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">100%</div>
                <div className="text-amber-700">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={tobi}
                alt="Tobi - Master Craftsman"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-amber-900 text-white p-4 rounded-full shadow-lg"
            >
              <Award size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection
