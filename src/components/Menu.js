import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Truffle Pasta', desc: 'Creamy, earthy, unforgettable', price: '$22' },
  { name: 'Fire-Grilled Steak', desc: 'Perfectly seared with garlic butter', price: '$30' },
  { name: 'Garden Salad', desc: 'Fresh greens with vinaigrette', price: '$12' },
];

export default function Menu() {
  return (
    <motion.section id="menu" className="section menu"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Our Favorites</h3>
      <div className="menu-items">
        {menuItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="item"
            whileHover={{ scale: 1.05 }}
          >
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
