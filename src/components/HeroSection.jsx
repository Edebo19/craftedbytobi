import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gradient-to-r from-amber-100 to-yellow-50"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-amber-900 mb-6"
        >
          Made for You. Crafteds by Hand.
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-amber-700 max-w-2xl mx-auto mb-8"
        >
          Custom furniture tailored to your space, your style, and your life — no shortcuts, just craftsmanship.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-8 text-amber-800"
        >
          <div className="flex items-center gap-2">
            <Award className="text-yellow-600" />
            <span className="font-semibold">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-yellow-600" />
            <span className="font-semibold">Custom Designs</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-yellow-600" />
            <span className="font-semibold">Timely Delivery</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default HeroSection
