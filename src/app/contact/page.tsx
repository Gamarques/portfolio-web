"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faEnvelope, 
  faPaperPlane,
  faUser,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá Gabriel! Vim através do seu portfólio.
    
Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject}

Mensagem:
${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511976803936&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Vamos conversar<span className="text-[#58A6FF]">?</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Estou sempre aberto para discutir novos projetos, oportunidades criativas ou simplesmente trocar uma ideia sobre tecnologia.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-[#161b22] rounded-lg border border-[#30363d]">
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  className="text-[#58A6FF] w-5 h-5 mt-1 flex-shrink-0" 
                />
                <div>
                  <h3 className="text-white font-medium">Localização</h3>
                  <p className="text-gray-400">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#161b22] rounded-lg border border-[#30363d]">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-[#58A6FF] w-5 h-5 mt-1 flex-shrink-0" 
                />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a 
                    href="mailto:gabrielgamarques1@gmail.com"
                    className="text-gray-400 hover:text-[#58A6FF] transition-colors"
                  >
                    gabrielgamarques1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#161b22] rounded-lg border border-[#30363d]">
                <FontAwesomeIcon 
                  icon={faWhatsapp} 
                  className="text-[#58A6FF] w-5 h-5 mt-1 flex-shrink-0" 
                />
                <div>
                  <h3 className="text-white font-medium">WhatsApp</h3>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5511976803936&text=Olá%2C+vim+através+do+seu+portfólio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#58A6FF] transition-colors"
                  >
                    +55 (11) 97680-3936
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Gamarques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d] text-white hover:bg-[#238636] hover:border-[#58A6FF] transition-all duration-200"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gabrielgamarques/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d] text-white hover:bg-[#0077B5] hover:border-[#58A6FF] transition-all duration-200"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5511976803936&text=Olá%2C+vim+através+do+seu+portfólio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d] text-white hover:bg-[#25D366] hover:border-[#58A6FF] transition-all duration-200"
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
              </a>
              <a 
                href="https://mahogany-club-253.notion.site/Code-challenges-2717bc86d3ff8174972bc9385bd618f2?pvs=74" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d] text-white hover:bg-[#000000] hover:border-[#58A6FF] transition-all duration-200"
                title="Notion - Code Challenges"
              >
                <Image
                  src="/Notion-logo.png"
                  alt="Notion"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="p-6 bg-[#161b22] rounded-lg border border-[#30363d]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/perfil_pic.jpeg"
                  alt="Gabriel Garcia Marques"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full rounded-full border-2 border-[#58A6FF]"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Gabriel Garcia Marques</h3>
                <p className="text-[#58A6FF] text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bacharel em Sistemas de Informação com foco em desenvolvimento full stack. 
              Apaixonado por criar soluções web modernas e intuitivas.
            </p>
            <div className="mt-4">
              <a
                href="/GabrielM_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#238636] text-white rounded-lg hover:bg-[#2ea043] transition-colors text-sm font-medium"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2 text-[#58A6FF]" />
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:border-[#58A6FF] focus:outline-none focus:ring-1 focus:ring-[#58A6FF] transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#58A6FF]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:border-[#58A6FF] focus:outline-none focus:ring-1 focus:ring-[#58A6FF] transition-colors"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faComment} className="mr-2 text-[#58A6FF]" />
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:border-[#58A6FF] focus:outline-none focus:ring-1 focus:ring-[#58A6FF] transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faComment} className="mr-2 text-[#58A6FF]" />
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:border-[#58A6FF] focus:outline-none focus:ring-1 focus:ring-[#58A6FF] transition-colors resize-vertical"
                  placeholder="Descreva seu projeto, ideia ou como posso ajudá-lo..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#238636] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#2ea043] focus:outline-none focus:ring-2 focus:ring-[#58A6FF] focus:ring-offset-2 focus:ring-offset-[#0D1117] transition-all duration-200 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Enviar via WhatsApp
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Ao clicar em enviar, você será redirecionado para o WhatsApp com sua mensagem pré-formatada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}