import { motion } from "framer-motion";

function ImageReveal({ children, className = "" }) {
  return (
    <div className={`image-reveal-wrapper ${className}`}>
      <motion.div
        className="image-reveal-inner"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ImageReveal;