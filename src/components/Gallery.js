import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import photo1 from '../assets/images/photo1.avif';
import photo2 from '../assets/images/photo2.webp';
import photo3 from '../assets/images/photo3.jpeg';

const images = [photo1, photo2, photo3];

export default function Gallery() {
  return (
    <motion.section
      className="section gallery px-4 py-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-3xl font-bold text-center mb-6">Gallery</h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-[400px] object-cover rounded-xl shadow-xl transition-transform hover:scale-105 duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
