import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollToSection('top')} className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="/images/logo-app.webp"
                  alt="Di Monk Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Di Monk
              </span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6 transition-transform duration-200"
                  style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('holidays')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Feriados
              </button>
              <button 
                onClick={() => scrollToSection('vacation-deals')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Optimizador
              </button>
              <button 
                onClick={() => scrollToSection('calendar')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Calendario
              </button>
              <button 
                onClick={() => scrollToSection('laws')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Leyes
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Fixed Overlay */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="py-2 space-y-1">
              <button
                onClick={() => scrollToSection('holidays')}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
              >
                Feriados
              </button>
              <button
                onClick={() => scrollToSection('vacation-deals')}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
              >
                Optimizador
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
              >
                Calendario
              </button>
              <button
                onClick={() => scrollToSection('laws')}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
              >
                Leyes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
} 