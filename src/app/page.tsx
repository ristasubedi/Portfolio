// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import SkillsSection from "../components/interactive/SkillsSection";
import AchievementsSection from "../components/interactive/AchievementsSection";
import ContactSection from "../components/interactive/ContactSection";
import ExperienceSection from "../components/interactive/ExperienceSection";
import ScrollToTop from "../components/interactive/ScrollToTop";
import ParticleBackground from "../components/interactive/ParticleBackground";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { projectsData } from "../data/projects";
import TerminalSimulation from "../components/interactive/TerminalSimulation";
import { ExternalLink, Terminal, Cpu, Sparkles, Sun, Moon } from "lucide-react";
import BrandIcon from "../components/interactive/BrandIcons";

export default function Home() {
  const [filter, setFilter] = useState<
    "All" | "Systems & SWE" | "AI & Data Science"
  >("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0.2]);

  // Load theme preference from localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply dark class to document element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tag === filter);

  // Track mouse for spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <ParticleBackground />
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 shadow-[0_0_18px_rgba(6,182,212,0.65)]"
        style={{ scaleX: smoothScrollProgress }}
      />
      <div className="pointer-events-none fixed left-5 top-1/2 z-40 hidden h-48 w-1 -translate-y-1/2 overflow-hidden rounded-full bg-slate-200/70 shadow-inner dark:bg-slate-700/70 lg:block">
        <motion.div
          className="h-full w-full origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-teal-400"
          style={{ scaleY: smoothScrollProgress }}
        />
      </div>
      <main 
        className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white overflow-hidden transition-colors duration-300"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight effect that follows cursor */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: isDarkMode 
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
              : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1), transparent 80%)`
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-900/40 dark:to-blue-900/40 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-900/40 dark:to-cyan-900/40 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-200 to-sky-200 dark:from-blue-900/40 dark:to-sky-900/40 rounded-full blur-3xl opacity-15 dark:opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-cyan-200 to-teal-200 dark:from-cyan-900/40 dark:to-teal-900/40 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Hero Section */}
        <motion.section
          className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 overflow-hidden"
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 dark:from-cyan-700/60 dark:to-blue-700/60 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 dark:from-teal-700/60 dark:to-cyan-700/60 rounded-full blur-3xl" 
            />
          </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1,
              rotate: 0,
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-16 h-16 text-cyan-500 drop-shadow-2xl filter" style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))' }} />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Building Tomorrow's Systems Today
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-700 max-w-3xl leading-relaxed font-medium"
          >
            Hey, I'm Rista :) I design systems, optimize algorithms, and build things that scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 pt-4 items-center"
          >
            {/* GitHub Link */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400"
            >
              <BrandIcon name="siGithub" size={24} color={isDarkMode ? "#f1f5f9" : "#0f172a"} />
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400"
            >
              <BrandIcon name="siLinkedin" size={24} color={isDarkMode ? "#60a5fa" : "#0a66c2"} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

        {/* Profile Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl mb-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-200 dark:border-cyan-700 shadow-md">
              Professional Profile
            </div>
            <h2 className="text-5xl font-bold tracking-tight mt-3">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Profile Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-3 flex justify-center md:justify-start"
            >
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-52 h-52 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400 via-blue-400 to-teal-400 p-1.5"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/profile.jpg?v=20260703"
                      alt="Profile photo"
                      width={208}
                      height={208}
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </motion.div>
                {/* Enhanced Animated decorative rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.2, 0.6],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(6,182,212,0.4), rgba(59,130,246,0.4), rgba(20,184,166,0.4), rgba(6,182,212,0.4))',
                    filter: 'blur(20px)'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Bio & Competencies */}
            <div className="md:col-span-9 grid md:grid-cols-3 gap-8">
              {/* Bio */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 space-y-4"
              >
                <p className="text-slate-700 leading-relaxed text-lg">
                  I'm an aspiring software engineer specializing in building robust, scalable systems
                  with a focus on performance optimization and algorithmic efficiency. My work
                  spans systems programming, distributed architectures, and data-intensive applications.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  With expertise in both low-level systems design and high-level application architecture,
                  I approach engineering challenges with mathematical rigor and a commitment to elegant,
                  maintainable solutions.
                </p>
              </motion.div>

              {/* Core Competencies */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-teal-950/30 rounded-2xl border-2 border-cyan-200/50 dark:border-cyan-700/50 p-6 h-fit shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Core Competencies
                  </span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Systems Architecture & Design",
                    "Algorithm Optimization",
                    "Data Structures & Analysis",
                    "Machine Learning & AI",
                    "Full-Stack Development"
                  ].map((skill, idx) => (
                    <motion.li 
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">•</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Project Registry Showcase */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl mb-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Project Registry
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 font-medium">
              Filter engineering repositories by specialized core domain.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/40 dark:to-blue-950/40 p-1.5 rounded-2xl border-2 border-cyan-300/60 dark:border-cyan-700/60 self-start sm:self-auto shadow-xl"
          >
            {(["All", "Systems & SWE", "AI & Data Science"] as const).map(
              (cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                  }`}
                >
                  {cat === "All" ? "🎯 Complete Matrix" : cat}
                </motion.button>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                key={project.id}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300"
                style={{
                  boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                  border: '2px solid transparent',
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(rgb(30, 41, 59), rgb(30, 41, 59)), linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #14b8a6 100%)'
                    : 'linear-gradient(white, white), linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #14b8a6 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-teal-500/5 dark:from-cyan-400/10 dark:via-blue-400/10 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <motion.h3 
                        className="text-xl font-bold text-slate-950 dark:text-slate-100 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300"
                      >
                        {project.title}
                      </motion.h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        {project.date && (
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {project.date}
                          </p>
                        )}
                        {project.repositoryUrl && (
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            GitHub <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/50 dark:to-blue-950/50 text-cyan-700 dark:text-cyan-300 tracking-wider uppercase border border-cyan-200/50 dark:border-cyan-700/50 shadow-sm"
                    >
                      {project.tag}
                    </motion.span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100 dark:border-slate-700 mb-6">
                    <div>
                      <h4 className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" /> Engineering Impact
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.engineeringImpact}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-600 dark:text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" /> Technical Depth
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.technicalDepth}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4">
                  {project.techStack.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -2,
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      }}
                      className="text-[10px] font-mono font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-full border-2 border-cyan-200/50 dark:border-cyan-700/50 cursor-default hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </section>

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Floating Theme Toggle Button - Stacked above Terminal */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-28 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 border-2 border-white/20"
        aria-label="Toggle theme"
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.button>

      {/* Global Navigation Terminal - Floating Button */}
      <TerminalSimulation />

      {/* Footer */}
      <Footer />
    </>
  );
}
