import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds total loading time
        const steps = 100;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-end px-4 pb-4 md:px-10 md:pb-10 bg-[#eff0eb]"
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1] // Custom bezier for "rapid" but smooth "curtain" effect
                }
            }}
        >
            <div className="relative font-sans text-[15vh] md:text-[25vh] leading-none tracking-tighter text-[#2a3025] font-semibold">
                {count}
            </div>
        </motion.div>
    );
};
