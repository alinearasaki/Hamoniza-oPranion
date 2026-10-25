import React from 'react';
import { Play, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { YOUTUBE_SHORT_ID } from '../data';

export const VideoShowcaseSection: React.FC = () => {
  return (
    <section id="video" className="w-full bg-[#0e1b17] text-stone-100 py-18 md:py-24 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-light bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30 inline-flex items-center gap-1.5">
            <Play className="w-3.5 h-3.5 fill-emerald-400" />
            Apresentação em Vídeo
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-50 tracking-tight font-serif-title">
            Conheça a Pranion
          </h2>

          <p className="text-base sm:text-lg text-emerald-300/90 font-light">
            Antes de escolher, conheça melhor a proposta.
          </p>

          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            Este é um espaço para entender como funciona a harmonização energética, conhecer a abordagem da Pranion e descobrir o que considerar antes de escolher seu pacote. Assista ao vídeo de apresentação abaixo:
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-xl mx-auto flex flex-col items-center">
          
          {/* Elegant Smartphone Mockup / Framed Showcase */}
          <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[36px] p-3 sm:p-4 bg-gradient-to-b from-[#1b2f28] via-[#12221c] to-[#0a1411] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/80 relative">
            
            {/* Top camera notch detail */}
            <div className="w-20 h-4 bg-black/60 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-900/60"></span>
            </div>

            {/* Video Iframe in 9:16 vertical aspect */}
            <div className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-black shadow-inner border border-emerald-900/40">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_SHORT_ID}?rel=0&modestbranding=1`}
                title="Vídeo de Apresentação da Pranion - Harmonização Energética Integrativa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Bottom bar indicator */}
            <div className="w-24 h-1 bg-stone-700/60 rounded-full mx-auto mt-3"></div>
          </div>

          {/* Video footer details */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-stone-400 font-light flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Apresentação oficial com a criadora da Pranion</span>
            </p>

            <a
              href={`https://youtube.com/shorts/${YOUTUBE_SHORT_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-light transition-colors"
            >
              <span>Abrir diretamente no YouTube Shorts</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
