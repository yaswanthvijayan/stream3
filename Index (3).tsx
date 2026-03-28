import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Users, Calendar, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlassCard from "@/components/GlassCard";
import { NeonButton, MagneticElement } from "@/components/InteractiveEffects";
import { Squiggle, DoodleStar, DoodleCircle, DoodlePlus, DoodleSpiral, DoodleZigzag } from "@/components/DoodleDecorations";

const TypewriterText = () => {
  const words = "Smart Club Management";
  return (
    <span className="inline-block">
      {words.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const stats = [
  { icon: Users, label: "Active Members", value: 2500, suffix: "+", emoji: "👥" },
  { icon: Calendar, label: "Events Hosted", value: 180, suffix: "+", emoji: "🎉" },
  { icon: Trophy, label: "Awards Won", value: 45, suffix: "", emoji: "🏆" },
  { icon: Zap, label: "Projects Completed", value: 320, suffix: "+", emoji: "⚡" },
];

const features = [
  { title: "Event Management", description: "Create, manage, and track events with real-time registration and analytics.", emoji: "📅" },
  { title: "Member Directory", description: "Comprehensive member profiles with role-based access and activity tracking.", emoji: "🧑‍🤝‍🧑" },
  { title: "Smart Analytics", description: "AI-powered insights and beautiful dashboards to track club performance.", emoji: "📊" },
  { title: "Achievements", description: "Gamified achievement system to keep members engaged and motivated.", emoji: "🎯" },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 text-sm text-foreground font-medium"
          >
            <span>🚀</span>
            <span>Built by students, for students</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="gradient-text neon-text-glow">
              <TypewriterText />
            </span>
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex justify-center mb-4">
            <Squiggle className="text-[#FF006E]/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Elevate your organization with powerful tools, beautiful analytics, and seamless member experiences. ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticElement strength={0.2}>
              <Link
                to="/dashboard"
                className="group px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-lg hover:brightness-110 transition-all duration-300 flex items-center gap-2 neon-glow"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticElement>
            <Link
              to="/about"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Learn More 📚
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <GlassCard className="text-center">
                  <span className="text-3xl mb-3 block">{stat.emoji}</span>
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Everything you need to <span className="gradient-text">manage your club</span>
              </h2>
              <DoodleZigzag className="mx-auto mt-3 text-[#FF006E]/40" />
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                Powerful features designed for student organizations that demand excellence. 💪
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <GlassCard className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl group-hover:animate-wiggle">{feature.emoji}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:gradient-text transition-all">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-bg opacity-10" />
              <DoodleStar className="absolute top-4 right-8 text-[#FF006E]/20 animate-wiggle" />
              <DoodleCircle className="absolute bottom-4 left-8 text-[#06FFA5]/20 animate-float" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
                  Ready to <span className="gradient-text">get started</span>? 🎉
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                  Join thousands of student organizations already using SmartClub to power their communities.
                </p>
                <MagneticElement strength={0.2}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold hover:brightness-110 transition-all neon-glow"
                  >
                    Start Free Trial 🚀
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
