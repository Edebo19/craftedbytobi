import Logo from "./Logo";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Logo size="small" />
          <p className="text-lg">Crafted by Tobi</p>
        </div>
        <p className="text-amber-300">Creating beautiful furniture, one piece at a time.</p>
      </div>
    </footer>
  );
};


export default Footer
