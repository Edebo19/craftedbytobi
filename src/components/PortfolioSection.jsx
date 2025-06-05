import { motion, AnimatePresence} from "framer-motion";
import { ChevronLeft, ChevronRight} from 'lucide-react';
import React, { useState } from "react";
import two from '../assets/two.jpeg';
import three from '../assets/three.jpeg';
import four from '../assets/four.jpeg';
import five from '../assets/five.jpeg';
import six from '../assets/six.jpeg';
import sev from '../assets/sev.jpeg';
import eight from '../assets/eight.jpeg';
import nine from '../assets/nine.jpeg';
import ten from '../assets/ten.jpeg';
import eleven from '../assets/eleven.jpeg';
import twelve from '../assets/twelve.jpeg';
import thirteen from '../assets/thirteen.jpeg';

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Modern White Kitchen with Marble Backsplash",
      description: "leek contemporary kitchen featuring glossy white cabinets, dramatic marble-pattern backsplash, black countertops, and integrated appliances with under-cabinet lighting.",
      image: two,
      category: "Kitchen"
    },
    {
      id: 2,
      title: "Bright Blue Upholstered Bed Frame",
      description: "Vibrant blue velvet bed frame with vertical channel tufting and gold accent trim, showcased alongside gray alternatives in furniture production facility.",
      image: three,
      category: "Bedroom"
    },
    {
      id: 3,
      title: "Luxury Gold-Accented Entertainment Center",
      description: "Sophisticated living room setup with backlit wood paneling, integrated TV wall mount, custom cabinetry, and dramatic curved ceiling design with warm LED lighting.",
      image: four,
      category: "Living Room"
    },
    {
      id: 4,
      title: "Modern Purple LED Accent Wall Design",
      description: "Contemporary bedroom featuring stunning purple LED lighting, marble-effect wall panels, illuminated shelving, and coordinated ambient ceiling fixtures.",
      image: five,
      category: "Living Room"
    },
    {
      id: 5,
      title: "Opulent Yellow and Gray Living Room Suite",
      description: "Luxurious living space with elaborate coffered ceiling, marble wall treatments, golden drapery, crystal chandelier, and coordinated gray and yellow seating.",
      image: six,
      category: "Living Room"
    },
    {
      id: 6,
      title: "White Built-In Wardrobe with Pink Interior",
      description: " Clean white modular wardrobe system featuring multiple cabinet doors, drawers, and distinctive pink interior shelving for organized bedroom storage.",
      image: sev,
      category: "Wardrobe"
    },
    {
      id: 7,
      title: "Gray Upholstered Bed",
      description: "Gray velvet platform bed with tufted headboard, complete with matching bedside tables featuring gold hardware, showcased on decorative tile flooring.",
      image: eight,
      category: "Bedroom"
    },
    {
      id: 8,
      title: "Royal Blue Sectional Sofa with Coffee Table",
      description: "Plush royal blue L-shaped sectional with button tufting and coordinating white geometric coffee table, displayed in furniture workshop setting.",
      image: nine,
      category: "Living Room"
    },
    {
      id: 9,
      title: "Marble-Effect Coffee Table with Drawer",
      description: "Sleek rectangular coffee table featuring realistic marble laminate finish and integrated drawer with gold handle, crafted in furniture workshop.",
      image: ten,
      category: "Living Room"
    },
    {
      id: 10,
      title: "Vibrant Pink Wardrobe with Open Shelving",
      description: "Bold fuchsia pink wardrobe featuring dual doors, multiple drawers, and integrated open shelving unit - perfect for maximizing bedroom storage in style.",
      image: eleven,
      category: "Wardrobe"
    },
    {
      id: 11,
      title: "Multi-Functional White Storage Cabinet",
      description: "Versatile white cabinet unit featuring upper compartments, pull-out drawer, and lower shelving - ideal for kitchen, dining, or utility room organization.",
      image: twelve,
      category: "Wardrobe"
    },
    {
      id: 12,
      title: "Sophisticated Wood and Marble Media Wall",
      description: "Contemporary bedroom entertainment center combining warm wood slat panels, marble-effect sections, integrated lighting, and modern ceiling design with green accents.",
      image: thirteen,
      category: "Living Room"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50"
    >
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-amber-900 text-center mb-12"
        >
          My Recent Work
        </motion.h3>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-96">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-900 text-white px-3 py-1 rounded-full text-sm">
                    {projects[currentProject].category}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-amber-900 mb-4">
                    {projects[currentProject].title}
                  </h4>
                  <p className="text-amber-700 text-lg mb-6">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-amber-600 font-semibold">
                      Project {currentProject + 1} of {projects.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-900 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-900 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-amber-900' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection
