"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp, Zap, Target } from "lucide-react";
import BrandIcon from "./BrandIcons";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Google Ads",
    location: "Mountain View, CA",
    period: "May 2025 - August 2025",
    highlights: [
      {
        metric: "100%",
        label: "Model Parity",
        description: "Migrated ML training framework from AutoTFX to TFlex with identical performance",
        icon: Target
      },
      {
        metric: "+1.2%",
        label: "PR-AUC Gain",
        description: "Added Past Bid Features improving prediction accuracy",
        icon: TrendingUp
      }
    ],
    color: "cyan"
  },
  {
    role: "STEP Intern",
    company: "Google Cloud",
    location: "Sunnyvale, CA",
    period: "May 2024 - August 2024",
    highlights: [
      {
        metric: "Real-Time",
        label: "Performance Dashboard",
        description: "Built benchmarking system for bare-metal environments using Python & SQL",
        icon: Zap
      },
      {
        metric: "Enhanced",
        label: "Metrics Accuracy",
        description: "Devised data parsing utilities and visualization pipelines",
        icon: Target
      }
    ],
    color: "blue"
  },
  {
    role: "STEP Intern",
    company: "YouTube Ads",
    location: "Mountain View, CA",
    period: "May 2023 - August 2023",
    highlights: [
      {
        metric: "5 Gaps",
        label: "UX Improvements",
        description: "Analyzed and addressed key user experience issues in YouTube Ads",
        icon: Target
      },
      {
        metric: "2 Features",
        label: "Auction Ranking",
        description: "Shipped features to YouTube Ads auction for optimized user value",
        icon: TrendingUp
      }
    ],
    color: "teal"
  }
];

const colorClasses: Record<string, string> = {
  cyan: "from-cyan-500 to-blue-500",
  blue: "from-blue-500 to-indigo-500",
  teal: "from-teal-500 to-cyan-500"
};

export default function ExperienceSection() {
  return (
    /* FIXED CSS CLASS STRING BELOW TO MATCH ABOUT ME ACCURATELY */
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 bg-slate-900 rounded-2xl shadow-2xl mb-8 border border-slate-800 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold tracking-tight mt-3">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text">
              Work Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Building high-impact solutions at scale through internships at Google.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-850 rounded-2xl p-6 border-2 border-slate-800 hover:border-cyan-600 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient accent line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colorClasses[exp.color]} rounded-l-2xl`} />
              
              <div className="ml-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {/* Google Logo */}
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-lg p-2 shadow-md border border-slate-700 flex items-center justify-center">
                        <BrandIcon name="siGoogle" size={24} color="#4285F4" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-cyan-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Key Highlights - Visual Cards */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {exp.highlights.map((highlight, i) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.1 }}
                        className="group/card relative p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-800 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-950/50 to-blue-950/50 flex items-center justify-center border border-cyan-700 group-hover/card:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-0.5">
                              {highlight.metric}
                            </div>
                            <div className="text-sm font-bold text-slate-100 uppercase tracking-wide">
                              {highlight.label}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
