import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const ContactSection = ({ onWhatsAppContact }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-r from-amber-900 to-yellow-800 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Start Your Project?
        </motion.h3>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Let's bring your furniture dreams to life. Contact me today for a consultation and quote.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onWhatsAppContact}
            className="bg-green-600 cursor-ponter hover:bg-green-700 px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-colors"
          >
            <MessageCircle size={24} />
            <p className="text-[12px] md:text-xl">Message on WhatsApp</p>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default ContactSection
