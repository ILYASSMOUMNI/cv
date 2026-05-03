import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  gradient?: string;
  glowColor?: string;
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
    blue:    "hover:shadow-[0_0_30px_rgba(0,170,255,0.18)]",
    cyan:    "hover:shadow-[0_0_30px_rgba(0,170,255,0.18)]",
    violet:  "hover:shadow-[0_0_30px_rgba(204,68,255,0.18)]",
    purple:  "hover:shadow-[0_0_30px_rgba(204,68,255,0.18)]",
    emerald: "hover:shadow-[0_0_30px_rgba(0,255,157,0.15)]",
    pink:    "hover:shadow-[0_0_30px_rgba(204,68,255,0.18)]",
    orange:  "hover:shadow-[0_0_30px_rgba(0,170,255,0.15)]",
    indigo:  "hover:shadow-[0_0_30px_rgba(204,68,255,0.18)]",
    amber:   "hover:shadow-[0_0_30px_rgba(0,170,255,0.15)]",
    stone:   "hover:shadow-[0_0_30px_rgba(0,170,255,0.12)]",
  };

  const glow = glowColor ? glowStyles[glowColor] ?? "" : "";

  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border border-dm-border bg-dm-card/60 backdrop-blur-md",
        "transition-all duration-300",
        hover && `hover:border-dm-cyan/30 hover:bg-dm-card/80 ${glow}`,
        onClick && "cursor-pointer",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {gradient && (
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-[0.08] bg-gradient-to-br",
            gradient
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

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
    default: "bg-dm-surface text-dm-text-dim border-dm-border",
    primary: "bg-dm-cyan/10 text-dm-cyan border-dm-cyan/30",
    success: "bg-emerald-950/60 text-emerald-400 border-emerald-700/40",
    warning: "bg-amber-950/60 text-amber-400 border-amber-700/40",
    danger:  "bg-red-950/60 text-red-400 border-red-700/40",
    glass:   "bg-dm-surface/60 text-dm-text-dim border-dm-border",
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

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  gradient = "from-dm-cyan via-dm-purple to-dm-cyan",
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
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-dm-cyan" />
        <span className="text-dm-cyan font-mono text-sm tracking-widest uppercase">
          {tag}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-dm-cyan" />
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dm-text mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-dm-text-dim max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
