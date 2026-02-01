import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#0c0c0c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=2671&auto=format&fit=crop"
          alt="Stormy clouds background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-10 leading-tight"
        >
          The operating system
          <br />
          <span className="text-white/80">for AI engineering</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/pricing"
            className="inline-flex items-center px-8 py-4 text-sm sm:text-base font-semibold text-[#1c1c1c] bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
