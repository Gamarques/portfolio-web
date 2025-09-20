"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Back End Developer",
      company: "Empirica",
      type: "Freelance",
      period: "Janeiro 2025 - Agosto 2025 · 8 meses",
      location: "Brasil · Remota",
      description: [
        "Desenvolvi APIs RESTful seguras e escaláveis, com autenticação via JWT, versionamento e validações consistentes, aplicando Node.js, NestJS e PostgreSQL.",
        "Criei CRUDs completos com foco em performance, segurança e manutenção simplificada, utilizando TypeORM e arquitetura limpa.",
        "Implementei agendadores com cron jobs, automatizando rotinas críticas e reduzindo atividades manuais.",
        "Conduzi o desenvolvimento de um sistema de autenticação por reconhecimento facial, integrando tecnologias biométricas para aumentar a segurança.",
        "Integrei OCR (Optical Character Recognition) para extração automatizada de dados estruturados a partir de documentos e imagens.",
        "Realizei integrações com APIs externas, garantindo sincronização em tempo real e atualização contínua dos dados."
      ],
      stack: "TypeScript, Node.js, NestJS, PostgreSQL, TypeORM, REST APIs, JWT, CRON, OCR, Reconhecimento Facial"
    },
    {
      id: 2,
      title: "Desenvolvedor Full Stack",
      company: "Freelance",
      type: "Autônomo",
      period: "Janeiro 2024 - Outubro 2024 · 10 meses",
      location: "Brasil · Remota",
      description: [
        "Desenvolvi aplicações web full stack utilizando o stack MERN (MongoDB, Express, React, Node.js), entregando soluções personalizadas para diferentes clientes.",
        "Criei landing pages otimizadas para conversão, com foco em SEO, responsividade e boas práticas de usabilidade.",
        "Construí e-commerces completos, implementando carrinho de compras, checkout seguro, integrações com gateways de pagamento e sistemas de pedidos.",
        "Estruturei APIs REST e realizei integrações com serviços externos (ex: pagamentos, notificações e autenticação).",
        "Desenvolvi interfaces modernas e responsivas com React, TypeScript e TailwindCSS, garantindo alta performance e boa experiência do usuário.",
        "Implementei boas práticas de versionamento e deploy com Git e Docker, assegurando escalabilidade e manutenção das aplicações.",
        "Colaborei diretamente com clientes no levantamento de requisitos, definição de prazos e entregas, atuando de forma consultiva."
      ],
      stack: "MongoDB, Express, React, Node.js, TypeScript, TailwindCSS, Git, Docker"
    },
    {
      id: 3,
      title: "Desenvolvedor de Front-end",
      company: "Effect E-Commerce",
      type: "Estágio",
      period: "Julho 2023 - Outubro 2023 · 4 meses",
      location: "São Paulo, Brasil · Presencial",
      description: [
        "Construi layouts e componentes reutilizáveis para aplicações de e-commerce, garantindo responsividade e usabilidade.",
        "Trabalhei com as plataformas Linx e Tray, utilizando Liquid e Twig para desenvolvimento de temas e customizações.",
        "Realizei otimizações de performance aplicando métricas e boas práticas do Google Lighthouse, elevando a qualidade e velocidade das páginas.",
        "Participei de reuniões com clientes para entender necessidades e traduzir requisitos em soluções funcionais.",
        "Colaborei com o time de desenvolvimento na entrega de interfaces modernas, rápidas e alinhadas às expectativas do cliente."
      ],
      stack: "HTML, CSS, JavaScript, Liquid, Twig, Linx, Tray"
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
          <span className="text-[#58A6FF] mr-2">💼</span> Experiência Profissional
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: exp.id * 0.1 }}
              className="relative pl-6 border-l-2 border-[#30363d] hover:border-[#58A6FF] transition-colors"
            >
              {/* Círculo no início da timeline */}
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#58A6FF]"></div>
              
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="text-[#58A6FF]">{exp.company}</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-400">{exp.type}</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">{exp.period}</div>
                <div className="text-gray-400 text-sm">{exp.location}</div>
              </div>
              
              <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-3 border-t border-[#30363d]">
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">Stack Técnica:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.split(', ').map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-0.5 text-xs rounded-full bg-[#0D1117] text-[#58A6FF] border border-[#30363d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
          <span className="text-[#58A6FF] mr-2">🎓</span> Formação Acadêmica
        </h2>
        
        <div className="relative pl-6 border-l-2 border-[#30363d]">
          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#58A6FF]"></div>
          
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-white">Bacharelado em Sistemas de Informação</h3>
            <div className="flex flex-wrap items-center gap-x-2 text-sm">
              <span className="text-[#58A6FF]">Universidade São Judas Tadeu</span>
            </div>
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
          <span className="text-[#58A6FF] mr-2">🌐</span> Idiomas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
            <h3 className="text-white font-medium mb-2">Inglês</h3>
            <div className="flex items-center">
              <div className="text-gray-300 text-sm">Nível avançado (listening, writing)</div>
            </div>
          </div>
          
          <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
            <h3 className="text-white font-medium mb-2">Espanhol</h3>
            <div className="flex items-center">
              <div className="text-gray-300 text-sm">Nível intermediário</div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
