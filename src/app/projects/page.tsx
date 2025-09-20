"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Site pessoal construído com Next.js e TailwindCSS com design inspirado no GitHub/VSCode.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      image: "/project1.jpg",
      github: "https://github.com/Gamarques/portfolio-web",
      demo: "https://gabrielmarques.dev"
    },
    {
      id: 2,
      title: "Recomendador de filmes",
      description: "Aplicação para recomendação de filmes atraves de Machine Learning",
      tags: ["Python", "Streamlit", "Pandas", "Machine Learning"],
      image: "/project2.jpg",
      github: "https://github.com/Gamarques/Movie-recomendation-system",
      demo: ""
    },
    {
      id: 3,
      title: "Amazon webscrapper",
      description: "Aplicação para buscar produtos no site da amazon",
      tags: ["Express", "TypeScript", "Bun.js"],
      image: "/project3.jpg",
      github: "https://github.com/Gamarques/Test-Project-Repository",
      demo: ""
    },
    {
      id: 4,
      title: "Yu-gi-oh! | Jo-ken-po",
      description: "Jogo de jo-ken-po inspirado no jogo de cartas/anime Yu-Gi-Oh!.",
      tags: ["Html5", "Javascript", "CSS"],
      image: "/project4.jpg",
      github: "https://github.com/Gamarques/dio-js-yugioh-challenge",
      demo: "https://gamarques.github.io/dio-js-yugioh-challenge/"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">🚀</span> Meus Projetos
        </h2>
        
        <p className="text-gray-300 mb-6">
          Aqui estão alguns dos projetos em que trabalhei. Cada projeto representa um desafio único 
          que me ajudou a aprimorar minhas habilidades e conhecimentos como desenvolvedor.
        </p>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-[#161b22] rounded-md border border-[#30363d] hover:border-[#58A6FF] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-5 flex-grow">
                <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                  <span className="text-[#58A6FF] mr-2">📂</span> {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 py-4 border-t border-[#30363d] flex justify-between items-center bg-[#0D1117]/50">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#58A6FF] hover:underline flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Repositório
                </a>
                {project.demo?.trim() && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#58A6FF] hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">💡</span> Outros Projetos
        </h2>
        
        <p className="text-gray-300 mb-6">
          Além dos projetos destacados acima, também tenho outros projetos e experimentos 
          em meu repositório GitHub. Fique à vontade para explorar e entrar em contato 
          se tiver alguma dúvida ou sugestão.
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://github.com/Gamarques"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#238636] text-white text-sm font-medium rounded-md hover:bg-[#2ea043] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Ver mais projetos no GitHub
          </a>
        </div>
      </motion.div>
    </main>
  );
}
