"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">📂</span> Sobre mim
        </h2>
        
        <section className="prose max-w-none text-base leading-relaxed">
          <p className="text-gray-300">
            Olá! Sou Gabriel Garcia Marques, Bacharel em Sistemas de Informação pela Universidade São Judas Tadeu 
            e desenvolvedor com experiência em projetos Back End e Full Stack. Recentemente atuei como Back End Developer, 
            criando soluções escaláveis com Node.js, NestJS e PostgreSQL, com foco em APIs RESTful robustas, 
            autenticação segura (JWT) e automação de processos via cron jobs.
          </p>
          <p className="text-gray-300 mt-4">
            Também tive experiência como Desenvolvedor Full Stack, liderando projetos personalizados para 
            clientes utilizando o stack MERN, TypeScript e TailwindCSS, sempre priorizando performance, 
            organização e experiência do usuário. Minha atuação inclui o uso de Docker, Git e AWS para garantir 
            sustentação, versionamento confiável e deploy estruturado.
          </p>
          <p className="text-gray-300 mt-4">
            Tenho como objetivo expandir minhas habilidades técnicas, colaborar em equipes dinâmicas 
            e contribuir para o desenvolvimento de produtos digitais modernos e de alto impacto. 
            Estou disponível para oportunidades tanto como CLT quanto freelancer. Entre em contato 
            para discutirmos como posso ajudar a transformar suas ideias em soluções digitais eficientes.
          </p>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">⚡</span> Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d]">
            <h3 className="text-md font-medium text-[#58A6FF] mb-3 flex items-center">
              <span className="text-[#58A6FF] opacity-70 mr-2">⬙</span> Front-end
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> React / Next.js
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> TailwindCSS
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> HTML5 / CSS3
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Framer Motion
              </li>
            </ul>
          </div>
          
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d]">
            <h3 className="text-md font-medium text-[#58A6FF] mb-3 flex items-center">
              <span className="text-[#58A6FF] opacity-70 mr-2">⬙</span> Back-end
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Express
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Prisma
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> PostgreSQL
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> MongoDB
              </li>
            </ul>
          </div>
          
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d]">
            <h3 className="text-md font-medium text-[#58A6FF] mb-3 flex items-center">
              <span className="text-[#58A6FF] opacity-70 mr-2">⬙</span> DevOps
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Git / GitHub
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Docker
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> AWS
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> Vercel
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">›</span> CI/CD
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 bg-[#0D1117] rounded-lg p-6 border border-[#30363d]"
      >
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[#30363d] flex items-center text-[#c9d1d9]">
          <span className="text-[#58A6FF] mr-2">🚀</span> Projetos em Destaque
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d] hover:border-[#58A6FF] transition-colors">
            <h3 className="text-md font-medium text-white mb-2">Portfolio Website</h3>
            <p className="text-gray-400 text-sm mb-3">
              Site pessoal construído com Next.js e TailwindCSS com design inspirado no GitHub/VSCode.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                Next.js
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                TailwindCSS
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                Framer Motion
              </span>
            </div>
          </div>
          
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d] hover:border-[#58A6FF] transition-colors">
            <h3 className="text-md font-medium text-white mb-2">E-commerce App</h3>
            <p className="text-gray-400 text-sm mb-3">
              Aplicação completa de e-commerce com autenticação, pagamentos e gestão de produtos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                React
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                Node.js
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]">
                MongoDB
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="/projects" 
            className="inline-flex items-center px-4 py-2 bg-[#238636] text-white text-sm font-medium rounded-md hover:bg-[#2ea043] transition-colors"
          >
            Ver todos os projetos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
