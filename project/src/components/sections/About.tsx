import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, TrendingUp, Zap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { profile } from "../../data/profile";

const pillars = [
  {
    icon: Brain,
    title: "AI & Data Engineering",
    description:
      "Building intelligent pipelines that transform raw data into actionable insights. From data ingestion to ML model deployment.",
    gradient: "from-violet-500 to-purple-600",
    glow: "violet",
  },
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    description:
      "Designing end-to-end systems with Spring Boot backends and modern frontends. Clean architecture, REST APIs, and scalable databases.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "blue",
  },
  {
    icon: TrendingUp,
    title: "Quantitative Finance",
    description:
      "Developing algorithmic trading tools and performance analytics. Risk metrics, PnL tracking, and systematic strategy evaluation.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "emerald",
  },
  {
    icon: Zap,
    title: "Systems Thinking",
    description:
      "Approaching every problem from first principles. Whether it's a C++ management system or a cloud-native microservice.",
    gradient: "from-amber-500 to-orange-600",
    glow: "orange",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="About Me"
            title={
              <>
                Engineering at the{" "}
                <GradientText gradient="from-indigo-400 to-violet-400">
                  intersection
                </GradientText>{" "}
                of code & data
              </>
            }
            subtitle="I don't just write code — I build systems that solve real problems at scale."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio narrative */}
          <AnimatedSection direction="left">
            <div className="space-y-5">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a software engineer from{" "}
                <span className="text-white font-medium">Morocco</span>, currently pursuing an
                advanced degree in{" "}
                <span className="text-indigo-400 font-medium">Software Engineering with a Big Data & AI specialization</span>.
                My journey started with systems programming in C++ and quickly expanded into
                enterprise Java, data science, and algorithmic trading.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                I believe great software is built at the intersection of{" "}
                <span className="text-slate-200">rigorous engineering</span> and{" "}
                <span className="text-slate-200">deep domain knowledge</span>. Whether I'm
                architecting a Spring Boot microservice, building a quantitative trading journal,
                or modeling a complex operational domain in C# — I bring the same systematic,
                first-principles approach.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My goal is to work on{" "}
                <span className="text-slate-200">high-impact AI and data systems</span> that
                operate at scale — combining my engineering background with growing expertise
                in machine learning and distributed architectures.
              </p>

              {/* Trait pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {profile.traits.map((trait) => (
                  <div
                    key={trait.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300 text-sm font-mono"
                  >
                    <span>{trait.icon}</span>
                    <span>{trait.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Visual element — code block style */}
          <AnimatedSection direction="right" delay={0.2}>
            <GlassCard className="p-0 overflow-hidden" gradient="from-indigo-500 to-violet-600">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs text-slate-500 font-mono">profile.ts</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm space-y-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> <span className="text-slate-400">=</span> <span className="text-slate-300">{"{"}</span></p>
                <p className="pl-4"><span className="text-emerald-400">name</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Ilyass Moumni"</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-emerald-400">role</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Software Engineer"</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-emerald-400">focus</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span></p>
                <p className="pl-8"><span className="text-amber-300">"Full-Stack Dev"</span><span className="text-slate-400">,</span></p>
                <p className="pl-8"><span className="text-amber-300">"AI & Big Data"</span><span className="text-slate-400">,</span></p>
                <p className="pl-8"><span className="text-amber-300">"Quant Trading"</span></p>
                <p className="pl-4"><span className="text-slate-300">],</span></p>
                <p className="pl-4"><span className="text-emerald-400">languages</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span><span className="text-amber-300">"Java"</span><span className="text-slate-400">,</span> <span className="text-amber-300">"Python"</span><span className="text-slate-400">,</span> <span className="text-amber-300">"C#"</span><span className="text-slate-300">],</span></p>
                <p className="pl-4"><span className="text-emerald-400">available</span><span className="text-slate-400">:</span> <span className="text-emerald-400">true</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-emerald-400">passion</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Building things that matter"</span></p>
                <p><span className="text-slate-300">{"}"}</span></p>
                <p className="pt-2 text-slate-500">// Let's build something great together</p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Pillars grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <GlassCard
                  className="p-6 h-full"
                  gradient={pillar.gradient}
                  glowColor={pillar.glow}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
