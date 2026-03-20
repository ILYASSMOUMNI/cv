import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  gradient?: string; // e.g. "from-blue-500 to-violet-600"
  glowColor?: string; // e.g. "blue"
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hover = true,
  onClick,
  gradient,
  glowColor,
}) => {
  const glowStyles: Record<string, string> = {
    blue: "hover:shadow-blue-500/20",
    violet: "hover:shadow-violet-500/20",
    emerald: "hover:shadow-emerald-500/20",
    pink: "hover:shadow-pink-500/20",
    orange: "hover:shadow-orange-500/20",
    indigo: "hover:shadow-indigo-500/20",
  };

  const glow = glowColor ? glowStyles[glowColor] ?? "" : "";

  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm",
        "transition-all duration-300",
        hover && `hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-xl ${glow}`,
        onClick && "cursor-pointer",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {gradient && (
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-5 bg-gradient-to-br",
            gradient
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Minimal badge component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "glass";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) => {
  const variants = {
    default: "bg-white/[0.08] text-slate-300 border-white/[0.1]",
    primary: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    danger: "bg-red-500/20 text-red-300 border-red-500/30",
    glass: "bg-white/[0.05] text-slate-400 border-white/[0.08] backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-mono font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

// Gradient text component
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  gradient = "from-indigo-400 via-violet-400 to-purple-400",
}) => (
  <span
    className={cn(
      "bg-gradient-to-r bg-clip-text text-transparent",
      gradient,
      className
    )}
  >
    {children}
  </span>
);

// Section header component
interface SectionHeaderProps {
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  centered = true,
}) => (
  <div className={cn("mb-16", centered && "text-center")}>
    {tag && (
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-4",
          centered && "justify-center w-full"
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
        <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
          {tag}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
