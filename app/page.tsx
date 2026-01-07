"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden relative font-sans">
      {/* Background decoration elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/40 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />

      {/* Left Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full max-w-xl z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-8"
      >
      <div className="flex items-center gap-1 mb-2">
        {/*  Logo */}
        <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
      
        {/* Brand Logo */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-4xl font-bold text-foreground tracking-tight">Woora</span>
          <span className="text-4xl font-bold text-[#006060]">Career</span>
        </div>

        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
          Nous construisons <br />
          <span className="text-[#006060] relative inline-block">
            l'avenir
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg font-medium">
          Woora fait peau neuve ! Nous travaillons sur une nouvelle expérience pour vous offrir les meilleurs opportunités professionnelles.
        </p>

        {/* Maintenance Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full text-primary font-bold text-sm border border-primary/20 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Site en maintenance programmée
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
          <button className="group flex items-center justify-center gap-2 bg-[#006060] hover:bg-primary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/30 w-full sm:w-auto cursor-pointer active:scale-95">
            <Mail className="w-5 h-5" />
            Être notifié
          </button>
          <button className="group flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary/50 text-foreground hover:text-primary px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto cursor-pointer shadow-sm hover:shadow-md">
            En savoir plus
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div className="pt-8 flex items-center gap-6 text-foreground/40">
          <p className="text-lg font-bold text-black mr-2">Suivez-nous :</p>
          <a href="#" className="hover:text-primary text-[#006060]  size-lg transition-colors hover:scale-110 transform duration-200"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary text-[#006060]  size-lg transition-colors hover:scale-110 transform duration-200"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary text-[#006060]  size-lg transition-colors hover:scale-110 transform duration-200"><Twitter className="w-6 h-6" /></a>
        </div>

        <div className="pt-4 text-lg text-black font-medium">
          &copy; {new Date().getFullYear()} Woora Inc. Tous droits réservés.
        </div>

      </motion.div>

      {/* Right Visual Section */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full max-w-2xl relative mt-16 md:mt-0 flex justify-center items-center"
      >
        <div className="relative w-full aspect-square md:h-[600px] flex items-center justify-center">
          {/* Glowing backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full opacity-70 blur-[80px]" />

          {/* Floating 3D Image */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full"
          >
            <Image
              src="/maintenance1.png"
              alt="Maintenance Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
