import { motion } from "framer-motion";
import Logo from "./Logo";
import { MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import React from "react";


const Header = ({ onWhatsAppContact }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-amber-900 to-yellow-800 text-white shadow-2xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Logo />
            <i className="text-base font-bold md:text-3xl font-bold tracking-wide">CraftedByTobi</i>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onWhatsAppContact}
            className="bg-green-600 max-md:rounded-[50%] max-md:w-[50px] max-md:h-[50px] cursor-pointer hover:bg-green-700 px-6 py-2 rounded-full flex justify-center items-center gap-2 transition-colors"
          >
            <div className="">
                <BsWhatsapp size={30}    />
            </div>
            <p className="max-md:hidden text-[12px] md:text-lg">Contact on WhatsApp</p>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header
