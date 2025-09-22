import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Marques | Desenvolvedor Full-Stack",
  description: "Portfolio de Gabriel Garcia Marques, desenvolvedor Full-Stack com experiência em Next.js, React, TypeScript e mais.",
  icons: {
    icon: '/code-icon.svg',
    shortcut: '/code-icon.svg',
    apple: '/code-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 w-full lg:w-auto overflow-x-hidden bg-[#0D1117]">
            {/* Navbar component */}
            <Navbar />
            {/* GitHub-like background grid */}
            <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" 
                 style={{
                   backgroundImage: `
                     linear-gradient(to right, #30363d 1px, transparent 1px),
                     linear-gradient(to bottom, #30363d 1px, transparent 1px)
                   `,
                   backgroundSize: '40px 40px'
                 }}>
            </div>
            {/* Main content */}
            <div className="relative z-10 px-4 lg:px-6 py-6 min-h-screen flex flex-col">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
