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
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-700">
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100 mt-3">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
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
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl border border-blue-100 dark:border-blue-800 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-6">Contact Information</h3>
            
            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                  title="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Location</span>
              </div>
              <p className="text-slate-900 dark:text-slate-100 font-medium">San Francisco Bay Area, CA</p>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-slate-900 dark:text-slate-100 font-medium">Open to opportunities</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ristasubedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-sm"
                  title="GitHub"
                >
                  <BrandIcon name="siGithub" size={20} color="#0f172a" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rista-subedi-18725a244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-sm"
                  title="LinkedIn"
                >
                  <BrandIcon name="siLinkedin" size={20} color="#0a66c2" />
                </a>

              </div>
            </div>
          </motion.div>

          {/* Quick Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-4">Quick Links</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Prefer a specific platform? Reach out through your favorite channel.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}?subject=Let's Connect`}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                    <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-slate-100">Send Email</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Direct message</p>
                  </div>
                </div>
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rista-subedi-18725a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                    <BrandIcon name="siLinkedin" size={20} color="#0a66c2" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-slate-100">LinkedIn</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Professional network</p>
                  </div>
                </div>
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">→</span>
              </a>

              <a
                href="https://github.com/ristasubedi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                    <BrandIcon name="siGithub" size={20} color="#0f172a" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-slate-100">GitHub</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">View my code</p>
                  </div>
                </div>
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">→</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800">
              <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
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
