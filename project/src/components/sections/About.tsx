import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, TrendingUp, Zap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { profile } from "../../data/profile";
import FloatingShapes from "../ui/FloatingShapes";

const pillars = [
  { icon: Brain,      title: "AI & Data Engineering",   description: "Building intelligent pipelines that transform raw data into actionable insights. From data ingestion to ML model deployment.",              gradient: "from-dm-cyan to-dm-purple",    glow: "cyan" },
  { icon: Layers,     title: "Full-Stack Architecture",  description: "Designing end-to-end systems with Spring Boot backends and modern frontends. Clean architecture, REST APIs, and scalable databases.",   gradient: "from-dm-cyan to-dm-cyan-dim",  glow: "blue" },
  { icon: TrendingUp, title: "Quantitative Finance",     description: "Developing algorithmic trading tools and performance analytics. Risk metrics, PnL tracking, and systematic strategy evaluation.",         gradient: "from-emerald-500 to-teal-600", glow: "emerald" },
  { icon: Zap,        title: "Systems Thinking",         description: "Approaching every problem from first principles. Whether it's a C++ management system or a cloud-native microservice.",                   gradient: "from-dm-purple to-dm-cyan",    glow: "purple" },
];

const About: React.FC = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-dm-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-dm-purple/5 rounded-full blur-[100px]" />
    </div>
    <FloatingShapes section="about" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeader tag="About Me" title={<>Engineering at the <GradientText>intersection</GradientText> of code & data</>} subtitle="I don't just write code — I build systems that solve real problems at scale." />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <AnimatedSection direction="left">
          <div className="space-y-5">
            <p className="text-lg text-dm-text-dim leading-relaxed">
              I'm a software engineer from <span className="text-dm-text font-medium">Morocco</span>, currently pursuing an advanced degree in{" "}
              <span className="text-dm-cyan font-medium">Software Engineering with a Big Data & AI specialization</span>. My journey started with systems programming in C++ and quickly expanded into enterprise Java, data science, and algorithmic trading.
            </p>
            <p className="text-lg text-dm-text-dim leading-relaxed">
              I believe great software is built at the intersection of <span className="text-dm-text">rigorous engineering</span> and <span className="text-dm-text">deep domain knowledge</span>. Whether I'm architecting a Spring Boot microservice, building a quantitative trading journal, or modeling a complex operational domain in C# — I bring the same systematic, first-principles approach.
            </p>
            <p className="text-lg text-dm-text-dim leading-relaxed">
              My goal is to work on <span className="text-dm-text">high-impact AI and data systems</span> that operate at scale — combining my engineering background with growing expertise in machine learning and distributed architectures.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {profile.traits.map((trait) => (
                <div key={trait.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-dm-card/60 border border-dm-border text-dm-text-dim text-sm font-mono hover:border-dm-cyan/30 transition-colors">
                  <span>{trait.icon}</span><span>{trait.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <GlassCard className="p-0 overflow-hidden" gradient="from-dm-cyan to-dm-purple">
            <div className="flex items-center gap-2 px-4 py-3 bg-dm-surface/80 border-b border-dm-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="ml-2 text-xs text-dm-text-muted font-mono">profile.ts</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-1">
              <p><span className="text-dm-purple">const</span> <span className="text-dm-cyan">engineer</span> <span className="text-dm-text-dim">=</span> <span className="text-dm-text">{"{"}</span></p>
              <p className="pl-4"><span className="text-emerald-400">name</span><span className="text-dm-text-dim">:</span> <span className="text-dm-cyan">"Ilyass Moumni"</span><span className="text-dm-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">role</span><span className="text-dm-text-dim">:</span> <span className="text-dm-cyan">"Software Engineer"</span><span className="text-dm-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">focus</span><span className="text-dm-text-dim">:</span> <span className="text-dm-text">[</span></p>
              <p className="pl-8"><span className="text-dm-cyan">"Full-Stack Dev"</span><span className="text-dm-text-dim">,</span></p>
              <p className="pl-8"><span className="text-dm-cyan">"AI & Big Data"</span><span className="text-dm-text-dim">,</span></p>
              <p className="pl-8"><span className="text-dm-cyan">"Quant Trading"</span></p>
              <p className="pl-4"><span className="text-dm-text">],</span></p>
              <p className="pl-4"><span className="text-emerald-400">languages</span><span className="text-dm-text-dim">:</span> <span className="text-dm-text">[</span><span className="text-dm-cyan">"Java"</span><span className="text-dm-text-dim">,</span> <span className="text-dm-cyan">"Python"</span><span className="text-dm-text-dim">,</span> <span className="text-dm-cyan">"C#"</span><span className="text-dm-text">],</span></p>
              <p className="pl-4"><span className="text-emerald-400">available</span><span className="text-dm-text-dim">:</span> <span className="text-emerald-400">true</span><span className="text-dm-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">passion</span><span className="text-dm-text-dim">:</span> <span className="text-dm-cyan">"Building things that matter"</span></p>
              <p><span className="text-dm-text">{"}"}</span></p>
              <p className="pt-2 text-dm-text-muted">// Let's build something great together</p>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <StaggerItem key={pillar.title}>
              <GlassCard className="p-6 h-full" gradient={pillar.gradient} glowColor={pillar.glow}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-dm-text font-semibold mb-2">{pillar.title}</h3>
                <p className="text-dm-text-dim text-sm leading-relaxed">{pillar.description}</p>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);

export default About;
