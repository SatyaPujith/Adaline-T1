import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';


// --- Badge Icons ---
const BadgeSOC2 = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono text-center p-1 leading-tight text-stone-600">
    AICPA<br /><span className="font-bold">SOC2</span>
  </div>
);
const BadgeGDPR = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono p-1 text-stone-600">
    ★ GDPR ★
  </div>
);
const BadgeHIPAA = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono text-center p-1 leading-tight text-stone-600">
    HIPAA<br />COMPLIANT
  </div>
);

// --- Animated Counter Component ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parse the number and suffix
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const decimals = value.includes('.') ? value.split('.')[1].replace(/[^0-9]/g, '').length : 0;

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    // Format based on decimals
    if (decimals > 0) {
      return current.toFixed(decimals) + suffix;
    }
    return Math.floor(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};


const reliabilityStats = [
  { value: '200M+', label: 'API calls\nper day', desc: 'Handles massive\nscale effortlessly' },
  { value: '5B+', label: 'Tokens\nper day', desc: 'Built for limitless\nprocessing power' },
  { value: '300+', label: 'Number of\nAI models', desc: 'Flexibility for\nevery application' },
  { value: '99.998%', label: 'Historical\nuptime', desc: 'Always on,\nalways reliable' },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background mb-24">
      <div className="max-w-7xl mx-auto">

        {/* --- PART 1: Architecture --- */}

        {/* Header Block */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1c1c1c] mb-8 max-w-4xl"
          >
            For world-class product<br className="hidden sm:block" /> and engineering teams
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-stone-200">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-600 max-w-xl leading-relaxed"
            >
              Adaline is the end-to-end platform for world-class product and engineering teams building AI-powered applications.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#2e2b26] hover:bg-[#1a1916] text-[#fdfcf8] px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors"
            >
              START FOR FREE
            </motion.button>
          </div>
        </div>

        {/* Architect Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <div className="max-w-4xl mx-auto border border-stone-800/10 bg-[#fdfcf8] p-2 sm:p-4 rounded-sm">
            <img
              src="/images/architecture-diagram.jpg"
              alt="Adaline Platform Architecture"
              className="w-full h-auto opacity-90 mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* Footer Stats/Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Speed</h3>
            <p className="text-stone-600 text-sm">Move fast without compromise</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Security</h3>
            <p className="text-stone-600 text-sm">Protection at every step</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Scale</h3>
            <p className="text-stone-600 text-sm">A platform that grows with you</p>
          </motion.div>

          {/* Badges Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 md:justify-end"
          >
            <BadgeSOC2 />
            <BadgeGDPR />
            <BadgeHIPAA />
          </motion.div>
        </div>


        {/* --- PART 2: Reliability --- */}
        <div className="mt-40 mb-20 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-normal tracking-tight text-[#1c1c1c] mb-6"
            >
              Precisely engineered for<br />unparalleled reliability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-600 max-w-lg leading-relaxed text-sm sm:text-base"
            >
              Adaline powers the workflows of world-class product and engineering teams with unmatched performance and reliability.
            </motion.p>
          </div>

          {/* Stats List */}
          <div className="border-t border-stone-800/10">
            <div className="divide-y divide-stone-800/10 border-b border-stone-800/10 border-dashed">
              {reliabilityStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-12 py-8 sm:py-10 items-start sm:items-center gap-4 border-dashed border-stone-300"
                  style={{ borderBottomStyle: 'dashed' }}
                >
                  {/* Value */}
                  <div className="sm:col-span-5 text-4xl sm:text-5xl md:text-6xl font-normal text-[#1c1c1c] tracking-tight tabular-nums">
                    <Counter value={stat.value} />
                  </div>

                  {/* Label */}
                  <div className="sm:col-span-3 text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide whitespace-pre-line">
                    {stat.label}
                  </div>

                  {/* Desc */}
                  <div className="sm:col-span-4 text-xs sm:text-sm text-stone-500 whitespace-pre-line">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
