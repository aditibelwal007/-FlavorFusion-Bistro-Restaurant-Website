import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.header
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>Welcome to Bistro Bliss</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Delicious food made with love</motion.p>
      <motion.a
        href="#menu"
        className="btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Menu
      </motion.a>
    </motion.header>
  );
}
