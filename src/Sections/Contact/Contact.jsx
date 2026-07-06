import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Sparkle } from "lucide-react";
import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "motion/react";


const notePositionsDesktop = [
  { x: 200, y: -80, rotate: -6, text: "You cant" },
  { x: 350, y: 0, rotate: 8, text: "Nope!" },
  { x: 0, y: -90, rotate: -12, text: "Too slow" },
  { x: 140, y: 0, rotate: 10, text: "Missed me" },
  { x: -0, y: -200, rotate: -4, text: "Almost!" },
];

const notePositionsMobile = [
  { x: 60, y: -40, rotate: -6, text: "You cant" },
  { x: 110, y: 10, rotate: 8, text: "Nope!" },
  { x: 0, y: -50, rotate: -12, text: "Too slow" },
  { x: 40, y: 20, rotate: 10, text: "Missed me" },
  { x: -20, y: -70, rotate: -4, text: "Almost!" },
];

const useIsMobile = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);

    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
};


const Contact = () => {

    const isMobile = useIsMobile();
  const notePositions = isMobile ? notePositionsMobile : notePositionsDesktop;

  const [index, setIndex] = useState(0);

  const handleEnter = () => {
    setIndex((prev) => (prev + 1) % notePositions.length);
  };

  const current = notePositions[index];


  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-center">
      <div
        className="relative w-full md:w-1/2 h-80 md:h-112.5 bg-gray-100 rounded-3xl overflow-hidden shrink-0"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      >
        <motion.div
        onMouseEnter={handleEnter}
        animate={{ x: current.x, y: current.y, rotate: current.rotate }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-10 left-10 -rotate-6"
        >
          <div className="absolute -bottom-2 left-2 w-36 h-10 bg-yellow-500/40 blur-md rounded-full" />

          <div
            className="relative w-30 h-30 md:w-40 md:h-40 bg-linear-to-br from-yellow-200 to-yellow-300 shadow-xl flex items-start justify-center pt-10"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 22% 100%, 0% 78%)" }}
          >
            <span className="text-gray-800 text-xl -rotate-3" style={{ fontFamily: "'Caveat', cursive" }}>
              {current.text}
            </span>

            <div
              className="absolute bottom-0 left-0 w-8 h-8 bg-yellow-400"
              style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="uppercase font-extrabold text-gray-200 text-4xl md:text-6xl leading-[1.1] tracking-tight">
          Couldn't <br /> catch me <br /> there?
        </h1>

        <div className="flex items-center gap-3 mt-6 text-emerald-600 font-bold text-xl md:text-2xl">
          <span>Reach out to me here</span>
          <Sparkle className="w-5 h-5 shrink-0" fill="currentColor" />
          <div className="h-px flex-1 max-w-16 bg-emerald-600" />
        </div>

        <div className="mt-8 bg-gray-100 rounded-3xl p-4">
          <div className="flex flex-col md:flex-row justify-center gap-3 flex-wrap">
            <a href="#" className="flex items-center justify-start max-md:pl-3 md:justify-center gap-2 bg-white rounded-2xl w-full md:w-41 py-3.5 max-md:mb-3">
              <FaInstagram className="w-5 h-5" />
              <span className="">Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-start max-md:pl-3 md:justify-center gap-2 bg-white rounded-2xl w-full md:w-41 py-3.5 max-md:mb-3">
              <FaBehance className="w-5 h-5" />
              <span className="">Behance</span>
            </a>
            <a href="#" className="flex items-center justify-start max-md:pl-3 md:justify-center gap-2 bg-white rounded-2xl w-full md:w-41 py-3.5 max-md:mb-3">
              <FaLinkedin className="w-5 h-5" />
              <span className="">Linkedin</span>
            </a>
          </div>

          <div className="border-t border-dashed border-gray-300 my-4" />

          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:seninmailin@gmail.com" className="flex justify-start max-md:pl-3 md:justify-center items-center gap-2 bg-white rounded-2xl w-full md:w-70 py-3">
              <Mail className="w-5 h-5" />
              <span className="">anonim@gmail.com</span>
            </a>
            <a href="tel:+90XXXXXXXXXX" className="flex items-center gap-2 bg-white rounded-2xl max-md:w-full px-5 py-3">
              <Phone className="w-5 h-5" />
              <span className="">+90 XXX XXX XX XX</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;