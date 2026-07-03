"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MapPin, Calendar } from "lucide-react";
import BrandIcon from "./BrandIcons";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "ristasubedi2002@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12 bg-slate-900 rounded-2xl shadow-2xl mb-8 border border-slate-800 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/50 text-cyan-300 text-xs font-bold uppercase tracking-wider border-2 border-cyan-800 shadow-md">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-100 mt-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Let's Build Something Together
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and discussions about software engineering and systems design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border-2 border-slate-800 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
            
            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-slate-200 hover:text-cyan-400 transition-colors font-medium"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</span>
              </div>
              <p className="text-slate-200 font-medium">San Francisco Bay Area, CA</p>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-slate-200 font-medium">Open to fulltime/internship opportunities</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ristasubedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 rounded-lg hover:bg-slate-800 transition-all border-2 border-slate-800 hover:border-cyan-600 hover:shadow-xl"
                  title="GitHub"
                >
                  {/* Color adjusted for sleek layout line contrast */}
                  <BrandIcon name="siGithub" size={20} color="#f1f5f9" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rista-subedi-18725a244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 rounded-lg hover:bg-slate-800 transition-all border-2 border-slate-800 hover:border-cyan-600 hover:shadow-xl"
                  title="LinkedIn"
                >
                  {/* Kept brand blue but brightened for clean dark-mode presentation */}
                  <BrandIcon name="siLinkedin" size={20} color="#0077b5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border-2 border-slate-800 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Quick Links</h3>
            <p className="text-slate-400 text-sm mb-6">
              Prefer a specific platform? Reach out through your favorite channel.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}?subject=Let's Connect`}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950 hover:bg-slate-900 border-2 border-slate-800 hover:border-cyan-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-600">
                    <Mail className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Send Email</p>
                    <p className="text-xs text-slate-400">Direct message</p>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rista-subedi-18725a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950 hover:bg-slate-900 border-2 border-slate-800 hover:border-cyan-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-600">
                    <BrandIcon name="siLinkedin" size={20} color="#0077b5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">LinkedIn</p>
                    <p className="text-xs text-slate-400">Professional network</p>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">→</span>
              </a>

              <a
                href="https://github.com/ristasubedi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950 hover:bg-slate-900 border-2 border-slate-800 hover:border-cyan-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-600">
                    <BrandIcon name="siGithub" size={20} color="#f1f5f9" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">GitHub</p>
                    <p className="text-xs text-slate-400">View my code</p>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">→</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-cyan-950/20 rounded-xl border-2 border-cyan-900/40">
              <p className="text-xs text-cyan-300 leading-relaxed">
                <strong>Response Time:</strong> I typically respond within 24-48 hours. 
                For urgent inquiries, please mention "Urgent" in your subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
