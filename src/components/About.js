import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section id="about" className="section about"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h3>About Us</h3>
      <p>
        Bistro Bliss is a cozy, family-owned restaurant rooted in the belief that food should nourish the soul.
        Our chefs craft each dish with fresh, locally-sourced ingredients and a whole lot of love.
        Whether you're here for brunch, dinner, or just dessert — we welcome you like family.
      </p>
    </motion.section>
  );
}
