'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, MessageCircle, Instagram, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const links = [
    {
      title: 'Agendar pelo WhatsApp',
      icon: <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Localização',
      icon: <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Ver trabalhos no Instagram',
      icon: <Instagram className="w-5 h-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Serviços e valores',
      icon: <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-24 bg-[#F5EFEA]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/40 blur-[100px] mix-blend-overlay" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#D8B78A]/20 blur-[120px] mix-blend-overlay" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-[460px] mx-auto bg-[#FFFEFD] rounded-[2.5rem] shadow-[0_24px_60px_-15px_rgba(59,43,43,0.08)] p-10 sm:p-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-full p-1 border border-[#D8B78A]/40 relative z-10 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/amanda-ramos.jpg"
                alt="Amanda Ramos"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 640px) 120px, 130px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Header Text */}
        <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-[42px] font-medium tracking-tight text-[#3B2B2B] leading-none mb-3">
            Amanda Ramos
          </h1>
          <p className="text-[11px] sm:text-[12px] font-semibold text-[#8A7873] tracking-[0.3em] uppercase">
            Nail Designer
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 py-6 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D8B78A]/60 to-[#D8B78A]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D8B78A]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D8B78A]/60 to-[#D8B78A]/60" />
          </div>

          <div className="flex flex-col items-center space-y-1.5 mb-10">
            <p className="text-[14px] sm:text-[15px] text-[#7A6B67] font-light tracking-wide">
              Agilidade + acabamento impecável
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants} className="w-full space-y-4 mb-12">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="group flex items-center justify-between w-full h-[72px] bg-[#B97A6A] rounded-[24px] px-3 shadow-[0_8px_20px_rgba(185,122,106,0.15)] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(185,122,106,0.25)] hover:bg-[#b07262]"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </div>
                <span className="font-medium text-[15px] text-white tracking-wide">
                  {link.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 pr-2">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="mt-auto w-full pt-4">
          <p className="text-[11px] text-[#8A7873]/70 tracking-wider uppercase font-medium">
            © 2026 Amanda Ramos Nails <span className="mx-1">•</span> Todos os direitos reservados
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
