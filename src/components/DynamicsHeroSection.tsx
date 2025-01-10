import React from 'react';
import { Link } from 'react-router-dom';

interface DynamicsHeroSectionProps {
  title: string;
  description: string;
  backgroundGradient?: string;
}

export function DynamicsHeroSection({ 
  title, 
  description,
  backgroundGradient = 'from-[#071630] via-[#00a2ed] to-[#ffb900]'
}: DynamicsHeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-[#071630] text-white">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute right-0 top-0 w-full h-full">
          <div className={`absolute right-[-10%] top-[-10%] w-[120%] h-[120%] rounded-full bg-gradient-to-br ${backgroundGradient} opacity-30 blur-3xl`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8 text-white/90">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.anegis.com/pl/ebooki/przewodnik-po-systemie-erp-w-d365"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#071630] px-6 py-2.5 rounded-md font-semibold hover:bg-white/90 transition-colors inline-block"
            >
              Pobierz przewodnik po Dynamics 365
            </a>
            <Link to="/kontakt" className="bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Umów prezentację
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
