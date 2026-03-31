"use client";

import { motion, useReducedMotion } from "framer-motion";

type Quote = { text: string; author: string };

export function TestimonialGrid({ quotes }: { quotes: Quote[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {quotes.map((q, i) => (
        <motion.blockquote
          key={i}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
        >
          <p className="text-sm leading-relaxed text-white/90">
            &ldquo;{q.text}&rdquo;
          </p>
          <footer className="mt-3 text-xs text-logi-orange">— {q.author}</footer>
        </motion.blockquote>
      ))}
    </div>
  );
}
