import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col items-center py=-8 shadow-lg pt-9">
      <div className="profile-pic w-40 h-40 bg-gray-700 rounded-full mb-4">
        <Image 
            src="/perfil_pic.jpeg"
            alt="perfil-icon"
            width={120}
            height={120}
            className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="profile-name font-bold text-lg mb-1">Gabriel Garcia Marques</div>
      <div className="tittle text-gray-400 mb-6">Desenvolvedor Full-stack</div>
      <div className="socials mb-6">
        <ol className="flex space-x-4">
          <li><div className="social1 w-6 h-6 bg-gray-700 rounded-full">
              <a href="https://github.com/Gamarques" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Image
                    src="/github.svg"
                    alt="github-icon"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </a>
            </div></li>
          <li><div className="social2 w-6 h-6 bg-gray-700 rounded-full">
             <a href="https://www.linkedin.com/in/gabrielgamarques/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Image
                    src="/linkedin.svg"
                    alt="linkedin-icon"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </a>
            </div></li>
          <li><div className="social3 w-6 h-6 bg-gray-700 rounded-full">
            <a href="https://mahogany-club-253.notion.site/Code-challenges-2717bc86d3ff8174972bc9385bd618f2?pvs=74" target="_blank" rel="noopener noreferrer" title="code challeges">
                <Image
                    src="/Notion-logo.png"
                    alt="Notion-icon"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </a>
            </div></li>
        </ol>
      </div>
      <div className="contact w-full px-4 flex flex-col">
        <div className="mb-6 space-y-3">
          <div className="contact-item w-full bg-gray-800 rounded-lg px-3 py-2 flex items-center">
            <FontAwesomeIcon 
              icon={faLocationDot} 
              className="text-red-500 w-4 h-4 mr-3 flex-shrink-0" 
            />
            <span className="text-xs text-gray-200">São Paulo, SP</span>
          </div>
          
          <div className="contact-item w-full bg-gray-800 rounded-lg px-3 py-2 flex items-center">
            <a href="http://api.whatsapp.com/send/?phone=5511976803936&text=Ola%2C+Vim+atrav%C3%A9s+do+seu+site" target="_blank">
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-green-500 w-4 h-4 mr-3 flex-shrink-0"
                />
            </a>
            <span className="text-xs text-gray-200">Me mande uma mensagem</span>
          </div>
          
          <div className="contact-item w-full bg-gray-800 rounded-lg px-3 py-2 flex items-center">
            <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 w-4 h-4 mr-3 flex-shrink-0" 
            />
            <span className="text-xs text-gray-200">gabrielgamarques1@gmail.com</span>
          </div>
        </div>
        
        <a
          href="/GabrielM_CV.pdf"
          className="w-full block py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer" 
          title="Baixar Currículo"
        >
          📄 Download CV
        </a>
      </div>
    </aside>
  );
}