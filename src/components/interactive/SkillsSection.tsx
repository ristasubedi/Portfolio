"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu, Brain, Layers } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Languages",
    color: "blue",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Go", level: 85 },
      { name: "Swift", level: 80 },
    ],
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Frameworks",
    color: "indigo",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
    ],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Databases",
    color: "violet",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "ClickHouse", level: 78 },
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "DevOps & Cloud",
    color: "cyan",
    skills: [
      { name: "Docker/K8s", level: 88 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 87 },
      { name: "Terraform", level: 80 },
    ],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI & ML",
    color: "purple",
    skills: [
      { name: "Deep Learning", level: 92 },
      { name: "Computer Vision", level: 88 },
      { name: "NLP", level: 85 },
      { name: "MLOps", level: 83 },
    ],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Systems",
    color: "emerald",
    skills: [
      { name: "Distributed Systems", level: 90 },
      { name: "Microservices", level: 88 },
      { name: "gRPC/WebSockets", level: 85 },
      { name: "System Design", level: 92 },
    ],
  },
];

// Dark mode optimal color configurations for background chips, text highlights, and filled tracks
const colorClasses: Record<string, { bg: string; text: string; bar: string }> = {
  blue: { bg: "bg-blue-950/50 border-blue-800/50", text: "text-blue-400", bar: "bg-blue-500" },
  indigo: { bg: "bg-indigo-950/50 border-indigo-800/50", text: "text-indigo-400", bar: "bg-indigo-500" },
  violet: { bg: "bg-violet-950/50 border-violet-800/50", text: "text-violet-400", bar: "bg-violet-500" },
  cyan: { bg: "bg-cyan-950/50 border-cyan-800/50", text: "text-cyan-400", bar: "bg-cyan-500" },
  purple: { bg: "bg-purple-950/50 border-purple-800/50", text: "text-purple-400", bar: "bg-purple-500" },
  emerald: { bg: "bg-emerald-950/50 border-emerald-800/50", text: "text-emerald-400", bar: "bg-emerald-500" },
};

export default function SkillsSection() {
  return (
    /* MAIN CONTAINER FIXED TO MATCH THE REFINED ABOUT ME LOOK */
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 bg-slate-900 rounded-2xl shadow-2xl mb-8 border border-slate-800 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
            Technical Arsenal
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-100 mt-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Proficiency across full-stack development, systems architecture, and machine learning infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-800 p-6 hover:border-cyan-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg border ${colorClasses[category.color].bg} ${colorClasses[category.color].text}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                    </div>
                    {/* Dark empty progress bar track background */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: idx * 0.1 + 0.2, ease: "easeOut" }}
                        className={`h-full ${colorClasses[category.color].bar} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
