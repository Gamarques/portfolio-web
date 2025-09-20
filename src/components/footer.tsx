"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#0D1117] border-t border-[#30363d] py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-sm text-gray-400">
            <span className="text-[#58A6FF] font-mono">const</span> <span className="text-emerald-400 font-mono">developer</span> = <span className="text-orange-300 font-mono">&apos;Gabriel Marques&apos;</span>;
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mt-4 md:mt-0">
          © {currentYear} - Construído com Next.js & TailwindCSS
        </div>
      </div>
    </footer>
  );
}