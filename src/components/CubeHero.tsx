"use client";

import { motion, useReducedMotion } from "framer-motion";

export function CubeHero() {
  const reduce = useReducedMotion();

  const faceBase =
    "absolute left-1/2 top-1/2 h-16 w-16 border-[3px] border-logi-black sm:h-20 sm:w-20";

  return (
    <div
      className="relative mx-auto h-36 w-36 perspective-[600px] sm:h-44 sm:w-44"
      aria-hidden
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.85, rotateX: -8, rotateY: 16 }}
        animate={
          reduce
            ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }
            : {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              }
        }
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={
            reduce
              ? undefined
              : { rotateY: [0, 14, 0, -10, 0], rotateX: [0, 4, 0, -4, 0] }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Isometric-style faces */}
          <div
            className={`${faceBase} bg-gradient-to-br from-logi-orange to-[#ff8534]`}
            style={{
              transform: "translate(-50%, -85%) skewX(-18deg) scaleY(0.52)",
            }}
          />
          <div
            className={`${faceBase} bg-gradient-to-br from-logi-blue to-[#003d82]`}
            style={{
              transform:
                "translate(-95%, -20%) rotate(60deg) skewX(-18deg) scaleY(0.55)",
            }}
          />
          <div
            className={`${faceBase} border-slate-800 bg-gradient-to-br from-white to-slate-200`}
            style={{
              transform:
                "translate(-5%, -20%) rotate(-60deg) skewX(18deg) scaleY(0.55)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
