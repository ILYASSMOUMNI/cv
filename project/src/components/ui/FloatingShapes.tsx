import React from "react";
import { motion } from "framer-motion";

interface Shape {
  size: number;
  x: string;
  y: string;
  type: "ring" | "filled" | "diamond";
  color: string;
  opacity: number;
  duration: number;
  delay: number;
}

// Dark Matter palette: subtle cyan / purple shapes over the shader
const presets: Record<string, Shape[]> = {
  hero: [
    { size: 90,  x: "5%",  y: "12%", type: "ring",    color: "#00aaff", opacity: 0.12, duration: 9,  delay: 0   },
    { size: 50,  x: "80%", y: "10%", type: "filled",  color: "#cc44ff", opacity: 0.07, duration: 12, delay: 1   },
    { size: 120, x: "70%", y: "60%", type: "ring",    color: "#0066cc", opacity: 0.10, duration: 11, delay: 2   },
    { size: 40,  x: "12%", y: "65%", type: "diamond", color: "#00aaff", opacity: 0.10, duration: 8,  delay: 0.5 },
    { size: 70,  x: "45%", y: "5%",  type: "ring",    color: "#cc44ff", opacity: 0.08, duration: 14, delay: 3   },
    { size: 55,  x: "88%", y: "45%", type: "diamond", color: "#0066cc", opacity: 0.10, duration: 10, delay: 1.5 },
    { size: 80,  x: "6%",  y: "42%", type: "filled",  color: "#00aaff", opacity: 0.05, duration: 13, delay: 2.5 },
    { size: 45,  x: "58%", y: "82%", type: "ring",    color: "#cc44ff", opacity: 0.09, duration: 9,  delay: 4   },
    { size: 100, x: "25%", y: "78%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 15, delay: 1   },
    { size: 35,  x: "92%", y: "75%", type: "diamond", color: "#00aaff", opacity: 0.11, duration: 7,  delay: 2   },
  ],
  about: [
    { size: 70,  x: "2%",  y: "8%",  type: "ring",    color: "#00aaff", opacity: 0.10, duration: 10, delay: 0   },
    { size: 45,  x: "90%", y: "15%", type: "diamond", color: "#cc44ff", opacity: 0.10, duration: 13, delay: 1   },
    { size: 100, x: "78%", y: "55%", type: "ring",    color: "#0066cc", opacity: 0.08, duration: 11, delay: 2   },
    { size: 55,  x: "8%",  y: "55%", type: "filled",  color: "#00aaff", opacity: 0.05, duration: 9,  delay: 0.5 },
    { size: 40,  x: "50%", y: "90%", type: "diamond", color: "#cc44ff", opacity: 0.10, duration: 8,  delay: 3   },
    { size: 80,  x: "32%", y: "5%",  type: "ring",    color: "#00aaff", opacity: 0.07, duration: 14, delay: 1.5 },
    { size: 35,  x: "65%", y: "88%", type: "filled",  color: "#0066cc", opacity: 0.06, duration: 12, delay: 2.5 },
  ],
  skills: [
    { size: 60,  x: "3%",  y: "20%", type: "diamond", color: "#cc44ff", opacity: 0.10, duration: 11, delay: 0   },
    { size: 90,  x: "85%", y: "8%",  type: "ring",    color: "#00aaff", opacity: 0.09, duration: 9,  delay: 1   },
    { size: 50,  x: "75%", y: "70%", type: "filled",  color: "#0066cc", opacity: 0.06, duration: 13, delay: 2   },
    { size: 110, x: "5%",  y: "70%", type: "ring",    color: "#00aaff", opacity: 0.07, duration: 10, delay: 0.5 },
    { size: 40,  x: "42%", y: "3%",  type: "diamond", color: "#cc44ff", opacity: 0.09, duration: 8,  delay: 3   },
    { size: 70,  x: "90%", y: "50%", type: "ring",    color: "#00aaff", opacity: 0.08, duration: 14, delay: 1.5 },
    { size: 45,  x: "55%", y: "88%", type: "diamond", color: "#0066cc", opacity: 0.09, duration: 12, delay: 2   },
  ],
  projects: [
    { size: 80,  x: "1%",  y: "15%", type: "ring",    color: "#00aaff", opacity: 0.09, duration: 12, delay: 0   },
    { size: 55,  x: "87%", y: "5%",  type: "filled",  color: "#cc44ff", opacity: 0.06, duration: 10, delay: 1   },
    { size: 100, x: "72%", y: "65%", type: "ring",    color: "#0066cc", opacity: 0.08, duration: 9,  delay: 2   },
    { size: 45,  x: "10%", y: "60%", type: "diamond", color: "#00aaff", opacity: 0.10, duration: 11, delay: 0.5 },
    { size: 65,  x: "48%", y: "2%",  type: "ring",    color: "#cc44ff", opacity: 0.07, duration: 13, delay: 3   },
    { size: 40,  x: "93%", y: "40%", type: "diamond", color: "#00aaff", opacity: 0.09, duration: 8,  delay: 1.5 },
    { size: 75,  x: "28%", y: "85%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 14, delay: 2.5 },
    { size: 50,  x: "62%", y: "80%", type: "filled",  color: "#cc44ff", opacity: 0.05, duration: 10, delay: 4   },
  ],
  experience: [
    { size: 75,  x: "4%",  y: "10%", type: "ring",    color: "#cc44ff", opacity: 0.10, duration: 10, delay: 0   },
    { size: 50,  x: "88%", y: "18%", type: "diamond", color: "#00aaff", opacity: 0.09, duration: 12, delay: 1   },
    { size: 110, x: "76%", y: "58%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 11, delay: 2   },
    { size: 40,  x: "7%",  y: "62%", type: "filled",  color: "#cc44ff", opacity: 0.06, duration: 9,  delay: 0.5 },
    { size: 60,  x: "45%", y: "4%",  type: "diamond", color: "#00aaff", opacity: 0.08, duration: 14, delay: 3   },
    { size: 85,  x: "91%", y: "48%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 8,  delay: 1.5 },
    { size: 45,  x: "35%", y: "88%", type: "diamond", color: "#cc44ff", opacity: 0.09, duration: 13, delay: 2   },
  ],
  dashboard: [
    { size: 85,  x: "2%",  y: "8%",  type: "ring",    color: "#00aaff", opacity: 0.09, duration: 11, delay: 0   },
    { size: 50,  x: "84%", y: "12%", type: "filled",  color: "#cc44ff", opacity: 0.06, duration: 9,  delay: 1   },
    { size: 105, x: "68%", y: "62%", type: "ring",    color: "#0066cc", opacity: 0.08, duration: 12, delay: 2   },
    { size: 45,  x: "9%",  y: "58%", type: "diamond", color: "#00aaff", opacity: 0.09, duration: 10, delay: 0.5 },
    { size: 70,  x: "44%", y: "3%",  type: "ring",    color: "#cc44ff", opacity: 0.07, duration: 13, delay: 3   },
    { size: 40,  x: "90%", y: "42%", type: "diamond", color: "#00aaff", opacity: 0.10, duration: 8,  delay: 1.5 },
    { size: 60,  x: "22%", y: "82%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 14, delay: 2   },
    { size: 55,  x: "60%", y: "85%", type: "filled",  color: "#cc44ff", opacity: 0.05, duration: 10, delay: 4   },
  ],
  contact: [
    { size: 80,  x: "3%",  y: "12%", type: "ring",    color: "#cc44ff", opacity: 0.09, duration: 10, delay: 0   },
    { size: 55,  x: "86%", y: "8%",  type: "diamond", color: "#00aaff", opacity: 0.10, duration: 12, delay: 1   },
    { size: 100, x: "74%", y: "65%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 9,  delay: 2   },
    { size: 40,  x: "6%",  y: "60%", type: "filled",  color: "#cc44ff", opacity: 0.05, duration: 11, delay: 0.5 },
    { size: 65,  x: "46%", y: "5%",  type: "diamond", color: "#00aaff", opacity: 0.08, duration: 13, delay: 3   },
    { size: 75,  x: "92%", y: "45%", type: "ring",    color: "#0066cc", opacity: 0.07, duration: 8,  delay: 1.5 },
    { size: 50,  x: "30%", y: "86%", type: "ring",    color: "#cc44ff", opacity: 0.08, duration: 14, delay: 2   },
  ],
};

interface FloatingShapesProps {
  section: keyof typeof presets;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ section }) => {
  const shapes = presets[section] ?? presets.about;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            opacity: s.opacity,
            borderRadius: s.type !== "diamond" ? "50%" : "4px",
            background: s.type === "filled" ? s.color : "transparent",
            border: s.type !== "filled" ? `1.5px solid ${s.color}` : "none",
            transform: s.type === "diamond" ? "rotate(45deg)" : "none",
          }}
          animate={{
            y: [0, -18, 8, -12, 0],
            x: [0, 10, -8, 14, 0],
            rotate:
              s.type === "diamond"
                ? [45, 90, 45, 20, 45]
                : [0, 6, -4, 8, 0],
            scale: [1, 1.08, 0.96, 1.05, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
