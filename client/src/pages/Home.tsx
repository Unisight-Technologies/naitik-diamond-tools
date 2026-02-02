import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../public/bg-hero.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
          {/* Hero Background Image - Industrial cutting */}
          <div className="absolute inset-0 z-0">
             {/* Unsplash image: industrial manufacturing machine sparks */}
             <img 
               src={heroImage} 
               alt="Industrial Cutting" 
               className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl space-y-8"
            >
              <div className="inline-block">
                <span className="bg-accent/20 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
                  Professional Grade
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
                MASTER THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">HARDEST</span> MATERIALS
              </h1>
              <p className="text-xl text-slate-300 max-w-md leading-relaxed">
                Industry-leading diamond tools designed for maximum durability, precision, and speed in granite, marble, and concrete applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 h-14 text-lg">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-lg">
                    Request Catalog
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Floating Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex justify-end"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm shadow-2xl relative">
                <div className="absolute -top-6 -left-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                  <Zap className="h-8 w-8" />
                </div>
                <blockquote className="text-2xl font-display font-medium text-white italic leading-relaxed pt-4">
                  "Precision in every cut, durability in every diamond."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-accent" />
                  <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
                    Our Promise
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Diamond Tools Inc?</h2>
              <p className="text-muted-foreground text-lg">
                We combine decades of engineering expertise with high-grade synthetic diamonds to create tools that outlast and outperform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10 text-accent" />,
                  title: "Premium Durability",
                  desc: "Engineered to withstand high heat and friction, prolonging tool life by up to 40%."
                },
                {
                  icon: <Zap className="h-10 w-10 text-accent" />,
                  title: "Fast Cutting Speed",
                  desc: "Optimized matrix bonds ensure consistent exposure of fresh diamond crystals."
                },
                {
                  icon: <PenTool className="h-10 w-10 text-accent" />,
                  title: "Precision Finish",
                  desc: "Minimize chipping and cracking with our vibration-dampening core technology."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group">
                  <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">READY TO UPGRADE YOUR WORKFLOW?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our technical sales team for custom solutions and bulk pricing.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold h-14 px-10 text-lg">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
