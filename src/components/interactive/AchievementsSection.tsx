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

// Re-tuned badge color backgrounds and text lines to fit nicely directly in dark mode canvas grids
const colorClasses: Record<string, string> = {
  yellow: "bg-yellow-950/40 text-yellow-400 border-yellow-800/60",
  blue: "bg-blue-950/40 text-blue-400 border-blue-800/60",
  purple: "bg-purple-950/40 text-purple-400 border-purple-800/60",
  green: "bg-emerald-950/40 text-emerald-400 border-emerald-800/60",
};

export default function AchievementsSection() {
  return (
    /* MAIN WRAPPER SYNCED WITH ABOUT ME BOX TEMPLATE */
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-12 bg-slate-900 rounded-2xl shadow-2xl mb-8 border border-slate-800 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {/* Achievements */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
              Recognition
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-100 mt-3">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Achievements & Honors
              </span>
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
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-800 p-6 hover:border-cyan-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colorClasses[achievement.color]} border`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-100">{achievement.title}</h3>
                      <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 shrink-0">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
              Academic Background
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-100 mt-3">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Education
              </span>
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
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-800 p-6 hover:border-cyan-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-950/50 text-indigo-400 border border-indigo-800/60">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                        <p className="text-cyan-400 font-semibold mt-1">{edu.school}</p>
                        <p className="text-sm text-slate-400">{edu.location}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 self-start">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mb-4 italic">{edu.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="text-xs font-mono font-semibold bg-gradient-to-r from-indigo-950/40 to-blue-950/40 text-indigo-300 px-3 py-1.5 rounded-full border-2 border-indigo-900/60"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
              Leadership & Access
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-100 mt-3">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Research & Industry Exposure
              </span>
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
                  className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-800 p-5 hover:border-cyan-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-emerald-950/50 text-emerald-400 border border-emerald-800/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
