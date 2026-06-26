"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Cpu,
  Zap,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Award,
  BarChart3,
  Truck,
  BookOpen,
  FlaskConical,
  FileText,
  LucideIcon,
  ChevronUp
} from "lucide-react";
import { translations, Locale } from "@/lib/i18n/translations";
import { useLocale } from "@/components/Providers";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

// --- Components ---

const Navbar = () => {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[locale].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: "/#about" },
    { name: t.activities, href: "/#activities" },
    { name: t.news, href: "/news" },
    { name: t.members, href: "/members" },
    { name: t.services, href: "/services" },
    { name: t.contacts, href: "/#contacts" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              ARMADA<span className="text-yellow-500">.</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                <button
                  onClick={() => setLocale(locale === "uk" ? "en" : "uk")}
                  className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-widest"
                >
                  {locale === "uk" ? "EN" : "UA"}
                </button>
                <Link href="/join">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
                    {t.join}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button
                  onClick={() => setLocale(locale === "uk" ? "en" : "uk")}
                  className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-widest"
                  aria-label={locale === "uk" ? "Switch to English" : "Змінити мову на українську"}
                >
                  {locale === "uk" ? "EN" : "UA"}
                </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-yellow-500 block px-3 py-4 text-base font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <Link href="/join">
                  <button className="w-full bg-yellow-500 text-black px-5 py-3 rounded-xl text-lg font-bold">
                    {t.join}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ locale }: { locale: Locale }) => {
  const t = translations[locale].hero;
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-500/20">
            {t.tag}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            {locale === "uk" ? (
                <>АРМАДА <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-[length:200%_auto] animate-gradient">ТЕХНОЛОГІЙ</span></>
            ) : (
                <>ARMADA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-[length:200%_auto] animate-gradient">OF TECHNOLOGY</span></>
            )}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
                <Link href="/join" className="w-full sm:w-auto">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-5 rounded-full font-black text-xl transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                    {t.ctaPrimary}
                </button>
                </Link>
            </MagneticButton>
            <MagneticButton>
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-xl transition-all backdrop-blur-sm">
                {t.ctaSecondary}
                </button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 opacity-20 hidden lg:block"
      >
        <Zap size={200} className="text-yellow-500" strokeWidth={0.5} />
      </motion.div>
    </section>
  );
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
  >
    <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all">
      <Icon size={28} className="text-yellow-500 group-hover:text-black transition-all" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 font-light leading-relaxed">{description}</p>
  </motion.div>
);

const About = ({ locale }: { locale: Locale }) => (
  <section id="about" className="py-24 bg-[#050505]">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            {locale === "uk" ? "Наша місія —" : "Our mission —"} <br />
            <span className="text-yellow-500 underline decoration-yellow-500/30 underline-offset-8">
                {locale === "uk" ? "платформа чесного бізнесу" : "platform for honest business"}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            {locale === "uk"
                ? "АРМАДА об’єднує десятки учасників, кожен з яких є унікальним виробником безпілотних систем та супутніх технологій. Ми спрямовуємо зусилля на вирішення стратегічних викликів у сфері виробництва дронів."
                : "ARMADA brings together dozens of participants, each being a unique manufacturer of unmanned systems. We focus on solving strategic challenges in drone manufacturing."
            }
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <ChevronRight size={14} className="text-yellow-500" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">{locale === "uk" ? "Прозорість" : "Transparency"}</h4>
                <p className="text-gray-500 text-sm">
                    {locale === "uk" ? "Ми будуємо відкритий діалог між виробниками та державою." : "We build an open dialogue between manufacturers and the state."}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <ChevronRight size={14} className="text-yellow-500" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">{locale === "uk" ? "Робота на результат" : "Result-oriented"}</h4>
                <p className="text-gray-500 text-sm">
                    {locale === "uk" ? "Швидке впровадження висотехнологічних рішень." : "Rapid implementation of high-tech solutions."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 relative">
          <div className="absolute -inset-4 bg-yellow-500/5 blur-3xl rounded-full z-0" />
          <div className="space-y-4 z-10 pt-8">
            <div className="h-48 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Shield size={64} className="text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
                </div>
            </div>
            <div className="h-64 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Target size={64} className="text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
                </div>
            </div>
          </div>
          <div className="space-y-4 z-10">
            <div className="h-64 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Users size={64} className="text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
                </div>
            </div>
            <div className="h-48 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu size={64} className="text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Activities = ({ locale }: { locale: Locale }) => {
  const ukItems = [
    { icon: Award, title: "Адвокація", description: "Захист інтересів виробників та створення сприятливої еко-системи для їхньої роботи." },
    { icon: BarChart3, title: "Просування", description: "Допомога в державних закупівлях та доступ до власного маркетплейсу." },
    { icon: Globe, title: "Інфо-аналітика", description: "Діалог з міністерствами, КМУ та ОП для підтримки законодавчих змін." },
    { icon: Zap, title: "Колаборація", description: "Створення платформи для обміну досвідом та спільної розробки рішень." },
    { icon: FlaskConical, title: "Випробування", description: "Доступ до полігонів, залучення операторів та експертів для тестування." },
    { icon: FileText, title: "Кодифікація", description: "Супровід з отримання номенклатурного коду НАТО та дозвільної документації." },
    { icon: Truck, title: "Логістика", description: "Оптимізація питань постачання комплектуючих та обміну технологіями." },
    { icon: BookOpen, title: "Навчання", description: "Спільні програми з академіями для підготовки кваліфікованих кадрів." }
  ];

  const enItems = [
    { icon: Award, title: "Advocacy", description: "Protecting manufacturers' interests and creating a favorable ecosystem." },
    { icon: BarChart3, title: "Promotion", description: "Assistance in public procurement and access to a marketplace." },
    { icon: Globe, title: "Analytics", description: "Dialogue with ministries for legislative support." },
    { icon: Zap, title: "Collaboration", description: "Platform for experience exchange and joint development." },
    { icon: FlaskConical, title: "Testing", description: "Access to testing grounds and expert involvement." },
    { icon: FileText, title: "Codification", description: "Support in obtaining NATO stock numbers and permits." },
    { icon: Truck, title: "Logistics", description: "Optimizing component supply and technology exchange." },
    { icon: BookOpen, title: "Training", description: "Joint programs for preparing qualified personnel." }
  ];

  const items = locale === "uk" ? ukItems : enItems;

  return (
    <section id="activities" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {locale === "uk" ? "Напрямки діяльності" : "Areas of Activity"}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
            {locale === "uk" ? "Ми охоплюємо всі критичні аспекти розвитку галузі безпілотних систем в Україні." : "We cover all critical aspects of UAS industry development in Ukraine."}
        </p>
      </div>
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <FeatureCard key={idx} {...item} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
};

const News = ({ locale }: { locale: Locale }) => {
  const ukArticles = [
    { date: "03 Червня, 2026", title: "Презентація проєкту «КРИТИЧНО ЗАХИЩЕНО» у Києві", excerpt: "Створення практичних механізмів захисту об’єктів критичної інфраструктури від повітряних загроз.", tag: "Проєкти" },
    { date: "28 Травня, 2026", title: "Україна формує нову архітектуру захисту інфраструктури", excerpt: "У Києві відбувся forum Security 2.0, присвячений захисту критичної інфраструктури.", tag: "Форуми" },
    { date: "15 Травня, 2026", title: "АРМАДА та Global Drone Academy стали партнерами", excerpt: "Спільне напрацювання методики навчання на ті чи інші безпілотні системи.", tag: "Партнерство" }
  ];

  const enArticles = [
    { date: "June 03, 2026", title: "'CRITICALLY PROTECTED' project presented in Kyiv", excerpt: "Creation of practical mechanisms for protecting critical infrastructure from aerial threats.", tag: "Projects" },
    { date: "May 28, 2026", title: "Ukraine forms new infrastructure protection architecture", excerpt: "Security 2.0 forum in Kyiv dedicated to critical infrastructure protection.", tag: "Forums" },
    { date: "May 15, 2026", title: "ARMADA and Global Drone Academy become partners", excerpt: "Joint development of training methods for various UAS systems.", tag: "Partnership" }
  ];

  const articles = locale === "uk" ? ukArticles : enArticles;

  return (
    <section id="news" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {locale === "uk" ? "Останні новини" : "Latest News"}
          </h2>
          <p className="text-gray-500 font-light">
              {locale === "uk" ? "Будьте в курсі головних подій асоціації." : "Stay updated with association's key events."}
          </p>
        </div>
        <a href="/news" className="hidden md:flex items-center gap-2 text-yellow-500 font-bold hover:gap-3 transition-all">
          {locale === "uk" ? "Всі новини" : "All News"} <ArrowRight size={20} />
        </a>
      </div>
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 rounded-3xl bg-white/5 border border-white/10 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded-full">
                    {article.tag}
                </div>
            </div>
            <span className="text-yellow-500/50 text-sm font-bold block mb-2">{article.date}</span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors leading-snug">
                {article.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contacts = ({ locale }: { locale: Locale }) => (
    <section id="contacts" className="py-24 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
                <div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                        {locale === "uk" ? "Готові до діалогу?" : "Ready to Talk?"}
                    </h2>
                    <p className="text-gray-400 text-xl font-light mb-12 leading-relaxed">
                        {locale === "uk"
                            ? "Залиште заявку, і ми допоможемо вам стати частиною української оборонної інноваційної екосистеми."
                            : "Submit a request, and we will help you become part of the Ukrainian defense innovation ecosystem."
                        }
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Mail className="text-yellow-500" size={28} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:office@armada.net.ua" className="text-white text-xl font-bold hover:text-yellow-500 transition-colors">
                                    office@armada.net.ua
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Phone className="text-yellow-500" size={28} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Phone</p>
                                <a href="tel:+380960360000" className="text-white text-xl font-bold hover:text-yellow-500 transition-colors">
                                    +38 096 036 0000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full" />
                    <div className="relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Marquee = () => {
  const members = [
    "DeViro", "Tech Force", "3D Tech", "Banderol", "The Phoenix Group",
    "SMTCS Lab", "Blackbird FPV", "Sky Tactics", "Buntar", "Sky Riper",
    "Drone Security", "Viyriy"
  ];

  return (
    <div className="py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center pr-16"
        >
          {members.concat(members).map((member, idx) => (
            <span key={idx} className="text-4xl md:text-6xl font-black text-white/10 hover:text-yellow-500/50 transition-colors cursor-default uppercase tracking-tighter">
              {member}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Footer = ({ locale }: { locale: Locale }) => (
    <footer className="py-12 bg-[#050505] text-gray-500 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
                <span className="text-3xl font-black text-white">
                    ARMADA<span className="text-yellow-500">.</span>
                </span>
            </div>
            <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p className="text-sm font-light">
                {locale === "uk" ? "© 2026 Асоціація АРМАДА. Всі права захищені." : "© 2026 ARMADA Association. All rights reserved."} <br />
                {locale === "uk" ? "Розроблено для перемоги." : "Engineered for victory."}
            </p>
        </div>
    </footer>
);

export default function Home() {
  const { locale } = useLocale();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-yellow-500 selection:text-black relative">
      <Navbar />
      <Hero locale={locale} />
      <About locale={locale} />
      <Activities locale={locale} />
      <News locale={locale} />
      <Marquee />
      <Contacts locale={locale} />
      <Footer locale={locale} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 p-4 bg-yellow-500 text-black rounded-full shadow-2xl hover:bg-yellow-400 transition-colors"
            aria-label={locale === "uk" ? "Повернутись вгору" : "Scroll to top"}
          >
            <ChevronUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
