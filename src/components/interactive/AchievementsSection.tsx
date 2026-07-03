"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Cpu, GraduationCap, LineChart, Network, Sparkles, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "NVIDIA Hackathon: Autonomous Agentic AI Workflow",
    description: "Architected an autonomous AI agent workflow using NVIDIA frontier language models to automate multi-step data retrieval, reasoning, API orchestration, and tool-calling pipelines.",
    date: "Apr 2026",
    color: "green",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Apple AWSEM Mentorship Program",
    description: "Selected for a competitive technical mentorship program pairing top computing students with senior Apple engineering leadership for code optimization and architecture reviews.",
    date: "Dec 2023 - Jun 2024",
    color: "blue",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Goldman Sachs Sales & Trading Program",
    description: "Chosen for a highly selective program accepting 100 participants from 11,000+ applicants, building deeper exposure to markets, trading strategy, and financial analysis.",
    date: "2024",
    color: "yellow",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "HU Capstone Scholar",
    description: "Prestigious, multi-year institutional merit scholarship awarded by Howard University for exceptional academic achievement",
    date: "2022-2026",
    color: "blue",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "UNCF HBCU Tech-E Leadership Summit",
    description: "Selected for a competitive, nationwide technical leadership summit hosting top HBCU talent in computer science and engineering.",
    date: "2023",
    color: "purple",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Apple Pathways Alliance",
    description: "Accepted into Apple's competitive scholars program featuring workshops, technical training, and networking with Apple engineers.",
    date: "2024",
    color: "blue",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Mordecai W. Johnson Scholarship",
    description: "Awarded Howard University's competitive academic honor for continuing students maintaining a high-tier cumulative GPA.",
    date: "2025",
    color: "green",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Howard University",
    location: "Washington, D.C.",
    year: "2022-2026",
    focus: "Focus on Software Engineering & Algorithms",
    achievements: ["GPA: 3.98/4.0", "Summa Cum Laude", "Dean's List - All Semesters", "HU Capstone Scholar"],
  },
];

const leadershipHighlights = [
  {
    icon: Sparkles,
    title: "CodePath x Base10 Tech Leadership Access",
    body: "Joined a selective technology access program with exposure to leaders including Meta CTO Andrew Bosworth, Google DeepMind Chief Scientist Jeff Dean, Notion founder Ivan Zhao, and Handshake co-founder Garrett Lord.",
  },
  {
    icon: Network,
    title: "Industry Networking & Recruiting Engagement",
    body: "Built connections with recruiters and software engineers across major technology companies, strengthening perspective on AI's evolving role in product and infrastructure.",
  },
  {
    icon: LineChart,
    title: "Research Assistant, Capital One",
    body: "Collaborated remotely on a five-person research team to detect WiFi radio-frequency signal anomalies, convert binary datasets into real-valued features, visualize statistical moments, and train Kernel SVM and Keras Sequential models with 85% training and 80% testing accuracy.",
  },
];

const colorClasses: Record<string, string> = {
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-16 border-b border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {/* Achievements */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-50 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300 text-xs font-bold uppercase tracking-wider border border-yellow-100 dark:border-yellow-700">
              Recognition
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100 mt-3">
              Achievements & Honors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colorClasses[achievement.color]} border`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-950 dark:text-slate-100">{achievement.title}</h3>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded shrink-0">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-700">
              Academic Background
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100 mt-3">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-700">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-100">{edu.degree}</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">{edu.school}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">{edu.location}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg self-start">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 italic">{edu.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-700"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-700">
              Leadership & Access
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100 mt-3">
              Research & Industry Exposure
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {leadershipHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-slate-100">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
