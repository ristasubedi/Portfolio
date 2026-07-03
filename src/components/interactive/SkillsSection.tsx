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

const colorClasses: Record<string, { bg: string; text: string; bar: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", bar: "bg-blue-500" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", bar: "bg-indigo-500" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", bar: "bg-violet-500" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-700", bar: "bg-cyan-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", bar: "bg-purple-500" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", bar: "bg-emerald-500" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-b border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-700">
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100 mt-3">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
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
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colorClasses[category.color].bg} ${colorClasses[category.color].text}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-slate-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
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
