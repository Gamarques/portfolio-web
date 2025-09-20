"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCodeBranch, faBookOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'home', href: '/', icon: faCircleUser },
    { name: 'projects', href: '/projects', icon: faCodeBranch },
    { name: 'experience', href: '/experiences', icon: faBookOpen },
    { name: 'skills', href: '/skills', icon: faLaptopCode },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117] border-b border-[#30363d] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-mono font-bold text-xl flex items-center">
                <span className="text-[#58A6FF]">$</span>
                <span className="ml-2 text-[#58A6FF]">gamarques</span>
                <span className="text-white">@</span>
                <span className="text-green-400">dev</span>
                <span className="text-white ml-2">~</span>
                <span className="text-gray-400 ml-1 animate-pulse">▌</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-mono transition-all duration-300 flex items-center group ${
                    isActive(item.href)
                      ? 'text-[#58A6FF]'
                      : 'text-gray-300 hover:text-[#58A6FF]'
                  }`}
                >
                  <span className="text-green-400 mr-1">/</span>
                  <span className="group-hover:underline underline-offset-4">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#58A6FF] hover:bg-[#161b22]"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0D1117] border-t border-[#30363d] backdrop-blur-md">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-base font-mono flex items-center ${
                isActive(item.href)
                  ? 'text-[#58A6FF] border-l border-[#58A6FF] pl-2'
                  : 'text-gray-300 hover:text-[#58A6FF] hover:bg-[#161b22]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}