'use client';

import {motion} from 'motion/react';
import Image from 'next/image';
import {ArrowRight, Instagram, MapPin, MessageCircle, Sparkles} from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: {opacity: 0, y: 30},
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
    hidden: {opacity: 0, y: 15},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut' as const}},
  };

  const links = [
    {
      title: 'Agendar pelo WhatsApp',
      icon: <MessageCircle className="h-5 w-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Localizacao',
      icon: <MapPin className="h-5 w-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Ver trabalhos no Instagram',
      icon: <Instagram className="h-5 w-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
    {
      title: 'Servicos e valores',
      icon: <Sparkles className="h-5 w-5 text-white" strokeWidth={1.5} />,
      url: '#',
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5EFEA] px-4 py-12 sm:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[60vw] w-[60vw] rounded-full bg-white/40 blur-[100px] mix-blend-overlay" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[70vw] w-[70vw] rounded-full bg-[#D8B78A]/20 blur-[120px] mix-blend-overlay" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[460px] flex-col items-center rounded-[2.5rem] bg-[#FFFEFD] p-10 text-center shadow-[0_24px_60px_-15px_rgba(59,43,43,0.08)] sm:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative mb-6">
          <div className="relative z-10 h-[120px] w-[120px] rounded-full border border-[#D8B78A]/40 p-1 shadow-sm sm:h-[130px] sm:w-[130px]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
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

        <motion.div variants={itemVariants} className="flex w-full flex-col items-center">
          <h1 className="font-serif mb-3 text-4xl font-medium leading-none tracking-tight text-[#3B2B2B] sm:text-[42px]">
            Amanda Ramos
          </h1>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8A7873] sm:text-[12px]">
            Nail Designer
          </p>

          <div className="flex w-full max-w-[200px] items-center justify-center gap-4 py-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D8B78A]/60 to-[#D8B78A]/60" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#D8B78A]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D8B78A]/60 to-[#D8B78A]/60" />
          </div>

          <div className="mb-10 flex flex-col items-center space-y-1.5">
            <p className="text-[14px] font-light tracking-wide text-[#7A6B67] sm:text-[15px]">
              Agilidade + acabamento impecavel
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 w-full space-y-4">
          {links.map((link) => (
            <motion.a
              key={link.title}
              href={link.url}
              className="group flex h-[72px] w-full items-center justify-between rounded-[24px] bg-[#B97A6A] px-3 shadow-[0_8px_20px_rgba(185,122,106,0.15)] transition-all duration-300 hover:bg-[#b07262] hover:shadow-[0_12px_25px_rgba(185,122,106,0.25)]"
              whileHover={{y: -2, scale: 1.01}}
              whileTap={{scale: 0.98}}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </div>
                <span className="text-[15px] font-medium tracking-wide text-white">{link.title}</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full pr-2 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.footer variants={itemVariants} className="mt-auto w-full pt-4">
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#8A7873]/70">
            (c) 2026 Amanda Ramos Nails <span className="mx-1">-</span> Todos os direitos reservados
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
