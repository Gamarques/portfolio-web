"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 h-screen bg-[#161b22] text-white border-r border-[#30363d] overflow-y-auto sticky top-0 scrollbar-hide">
      <div className="flex flex-col items-center py-8">
        <div className="profile-pic w-40 h-40 relative mb-6 z-10">
          <div className="absolute inset-0 rounded-full border-2 border-[#30363d] animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border border-[#58A6FF] animate-ping opacity-20"></div>
          <Image 
              src="/perfil_pic.jpeg"
              alt="perfil-icon"
              width={160}
              height={160}
              className="object-cover w-full h-full rounded-full border-4 border-[#0D1117] shadow-xl"
          />
        </div>
        <div className="profile-name font-bold text-xl mb-1 text-white">Gabriel Garcia Marques</div>
        <div className="px-4 py-1 bg-[#238636] text-xs rounded-full text-white font-medium mb-6">Full-Stack Developer</div>
        <div className="w-full px-6 mb-8">
          <div className="text-sm text-gray-300 leading-relaxed text-center">
            Bacharel em Sistemas de Informação. Desenvolvedor full stack focado em criar soluções web modernas e intuitivas.
          </div>
        </div>
        <div className="w-full px-6 mb-8">
          <h3 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'TypeORM',].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded-md bg-[#0D1117] border border-[#30363d] text-[#58A6FF]">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="socials mb-8 z-10">
          <h3 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Connect</h3>
          <ol className="flex space-x-4">
            <li>
              <a 
                href="https://github.com/Gamarques" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0D1117] border border-[#30363d] text-white hover:bg-[#161b22] hover:border-[#58A6FF] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/gabrielgamarques/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0D1117] border border-[#30363d] text-white hover:bg-[#161b22] hover:border-[#58A6FF] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://mahogany-club-253.notion.site/Code-challenges-2717bc86d3ff8174972bc9385bd618f2?pvs=74" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Code Challenges"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0D1117] border border-[#30363d] text-white hover:bg-[#161b22] hover:border-[#58A6FF] transition-colors"
              >
                <Image
                  src="/Notion-logo.png"
                  alt="Notion-icon"
                  width={18}
                  height={18}
                />
              </a>
            </li>
          </ol>
        </div>
        <div className="w-full px-6 mb-8">
          <h3 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Contato</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-300">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="text-[#58A6FF] w-4 h-4 mr-3 flex-shrink-0" 
              />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-[#58A6FF] w-4 h-4 mr-3 flex-shrink-0"
              />
              <a 
                href="http://api.whatsapp.com/send/?phone=5511976803936&text=Ola%2C+Vim+atrav%C3%A9s+do+seu+site" 
                target="_blank"
                className="hover:text-white hover:underline"
              >
                Enviar mensagem
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#58A6FF] w-4 h-4 mr-3 flex-shrink-0" 
              />
              <a 
                href="mailto:gabrielgamarques1@gmail.com"
                className="hover:text-white hover:underline break-all"
              >
                gabrielgamarques1@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-6">
          <a
            href="/GabrielM_CV.pdf"
            className="w-full block py-2.5 px-4 bg-[#238636] rounded-md text-white font-medium text-center hover:bg-[#2ea043] transition-colors"
            target="_blank"
            rel="noopener noreferrer" 
            title="Baixar Currículo"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </aside>
  );
}