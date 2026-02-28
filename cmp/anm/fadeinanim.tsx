"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

export default function FadeInAnim(
  { style, children }: { style?: CSSProperties; children: ReactNode }
) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}