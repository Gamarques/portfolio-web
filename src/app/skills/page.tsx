"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const hardSkills = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Nest.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "TypeORM", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      category: "Banco de Dados",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      category: "DevOps & Ferramentas",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Comunicação clara",
      description: "Capacidade de explicar ideias técnicas para devs e não-devs de forma eficiente."
    },
    {
      name: "Trabalho em equipe",
      description: "Colaboração efetiva com equipes multidisciplinares em ambiente ágil."
    },
    {
      name: "Resolução de problemas",
      description: "Abordagem analítica para identificar e resolver problemas complexos."
    },
    {
      name: "Adaptabilidade",
      description: "Rápida adaptação a novas tecnologias, frameworks e ambientes de trabalho."
    },
    {
      name: "Organização",
      description: "Gerenciamento eficiente de backlog, prazos e versionamento de código."
    },
    {
      name: "Autonomia e proatividade",
      description: "Capacidade de trabalhar de forma independente e tomar iniciativa."
    }
  ];

  return (
    <main className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">💻</span> Hard Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hardSkills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#161b22] p-5 rounded-md border border-[#30363d]"
            >
              <h3 className="text-lg font-medium text-[#58A6FF] mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0D1117] rounded-full h-2.5">
                      <div 
                        className="bg-[#238636] h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">🤝</span> Soft Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#161b22] p-4 rounded-md border border-[#30363d]"
            >
              <h3 className="text-white font-medium mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">📚</span> Certificações & Cursos
        </h2>

        <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d] mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-medium">BACHAREL - Sistemas de Informação</h3>
            <span className="text-gray-400 text-xs bg-[#0D1117] px-2 py-1 rounded">2020 - 2024</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Universidade São Judas Tadeu</p>
          <div className="flex items-center text-gray-300 text-sm">
            <span className="text-green-500 mr-2">›</span>
            <span>Formação completa</span>
          </div>
        </div>

        <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d] mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-medium">BOOTCAMP Santander - Frontend</h3>
            <span className="text-gray-400 text-xs bg-[#0D1117] px-2 py-1 rounded">110 horas</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Plataforma DIO (Digital Innovation One)</p>
          <div className="flex items-center text-gray-300 text-sm">
            <span className="text-green-500 mr-2">›</span>
            <span>Desenvolvimento frontend com foco em aplicações web modernas</span>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="/GabrielM_CV.pdf" 
            className="inline-flex items-center px-4 py-2 bg-[#238636] text-white text-sm font-medium rounded-md hover:bg-[#2ea043] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver currículo completo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
