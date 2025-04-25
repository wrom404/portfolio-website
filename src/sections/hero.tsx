import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I am Wendel Rom";

  useEffect(() => {
    const startDelay = 1300; // 1.3 second before typing starts
    const typingSpeed = 100; // 0.1s per character
    let currentIndex = 0;

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="w-full" id="hero">
      <motion.div className="min-h-screen flex flex-col justify-center items-center text-center bg-[var(--background-color)] text-gray-100 px-4 sm:px-8 md:px-16">
        <motion.h2 className="text-gray-200 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 font-mono">
          {displayedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wide mb-3 sm:mb-5"
        >
          Software Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-lg text-indigo-500 font-mono"
        >
          {`{ TypeScript, React, Node.js, Express, PostgreSQL, TailwindCss... }`}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-sm sm:text-base text-gray-300 mt-6 sm:mt-8"
        >
          Specializing in React & Node.js, I leverage cutting-edge technologies
          to bring web projects to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10"
        >
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-gray-100 font-semibold px-6 py-3 rounded-full transition"
          >
            See my dev work
          </a>

          <a
            href="../assets/cv/cv.pdf"
            download
            className="border-b border-indigo-600 text-indigo-600 hover:text-indigo-500 hover:border-indigo-500 transition py-1.5 text-sm"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
