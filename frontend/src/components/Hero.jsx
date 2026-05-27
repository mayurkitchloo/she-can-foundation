import { motion } from "framer-motion";
import heroBg from "../assets/hero-section.avif";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Empowering Women, <br /> Changing Lives
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          She Can Foundation is dedicated to uplifting women through education,
          mentorship, and community support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#contact"
            className="bg-[#E8431A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c73a15] transition-colors"
          >
            Get Involved
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#1a1f3a] transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
