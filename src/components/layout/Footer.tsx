"use client";

import React from "react";
import BrandIcon from "../interactive/BrandIcons";
import { Heart, Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 text-slate-300 dark:text-slate-300 border-t border-slate-800 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white dark:text-white mb-3">
              Technical Portfolio
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 leading-relaxed mb-4">
              Software systems engineered with mathematical and algorithmic rigor.
              Building high-performance, predictable architectures.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/ristasubedi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <BrandIcon name="siGithub" size={20} color="currentColor" />
              </a>
              <a
                href="https://www.linkedin.com/in/rista-subedi-18725a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <BrandIcon name="siLinkedin" size={20} color="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using</span>
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
