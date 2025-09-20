"use client";

import { useState, useEffect, useRef } from "react";

type StackItem = {
  name: string;
  icon: string;
  color?: string;
};

export default function Carousel() {
  // Tecnologias originais
  const originalStackItems: StackItem[] = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38B2AC" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  ];
  
  // Duplicamos os itens para criar um efeito de rolagem infinita perfeita
  // Adicionamos os primeiros itens ao final e os últimos ao início
  const cloneCount = 3; // Número de clones em cada extremidade para rolagem suave
  const getExpandedItems = () => {
    const lastItems = originalStackItems.slice(-cloneCount);
    const firstItems = originalStackItems.slice(0, cloneCount);
    return [...lastItems, ...originalStackItems, ...firstItems];
  };
  
  const stackItems = getExpandedItems();
  const [translateX, setTranslateX] = useState(-cloneCount * 60); // Começar com os itens originais visíveis
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth = 60; // largura aproximada de cada item em pixels (incluindo gap)
  
  // Movimento contínuo suave usando requestAnimationFrame em vez de setInterval
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const speed = 0.03; // pixels por milissegundo (ajuste para mais rápido ou mais lento)
    
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      // Movimento contínuo sem paradas
      setTranslateX(prev => {
        const newPosition = prev - speed * deltaTime;
        const totalOriginalWidth = originalStackItems.length * itemWidth;
        
        // Verifica se precisa reiniciar a posição sem interromper a animação
        if (newPosition <= -totalOriginalWidth - (cloneCount * itemWidth)) {
          return -cloneCount * itemWidth;
        }
        return newPosition;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [originalStackItems.length, itemWidth, cloneCount]);

  return (
    <div className="carousel w-full flex flex-col items-center gap-2 py-2">
      <h2 className="text-sm font-bold mb-1">Tecnologias</h2>
      
      <div className="relative w-full">
        {/* Container com borda galáctica */}
        <div className="rgb-border-glow w-full mx-auto bg-[#0a0a18] px-1 py-2 overflow-hidden">
          {/* Slider que move os itens */}
          <div 
            ref={carouselRef}
            className="flex"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {/* Renderiza todos os itens em linha (original + clones) */}
            {stackItems.map((item, idx) => (
              <div key={idx} className="w-[50px] mx-[5px] flex-shrink-0 flex flex-col items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="w-8 h-8 object-contain"
                />
                <p className="text-[9px] text-white text-center mt-1 line-clamp-1">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}