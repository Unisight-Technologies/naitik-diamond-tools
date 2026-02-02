import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Award, TrendingUp, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Unsplash image: corporate team meeting industrial */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Journey</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From a small workshop to a global leader in precision diamond technology.
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Story Section */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Decades of Innovation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1985, Diamond Tools Inc. started with a singular mission: to create cutting tools that don't just work, but excel. Our founder, a structural engineer, was frustrated with the inconsistent quality of available core bits and blades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He spent three years in R&D, developing our proprietary matrix bonding technology which remains the core of our success today. By perfectly balancing synthetic diamond quality with specific metal bond hardness, we unlocked a new level of cutting efficiency.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { label: "Years Exp.", value: "35+" },
                  { label: "Products", value: "500+" },
                  { label: "Countries", value: "40" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-display font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-3" />
              {/* Unsplash image: engineer looking at blueprints */}
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&q=80" 
                alt="Engineering Team" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Milestones</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {[
                { year: "1985", title: "Foundation", desc: "Established in a garage workshop in Stone City." },
                { year: "1995", title: "Patent Issued", desc: "Received patent for our 'Turbo-Cool' venting design." },
                { year: "2005", title: "Global Expansion", desc: "Opened distribution centers in Europe and Asia." },
                { year: "2020", title: "Eco-Line Launch", desc: "Introduced sustainable, low-energy manufacturing process." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-12 items-start relative">
                  {i !== 3 && <div className="absolute left-[2.25rem] top-12 bottom-0 w-0.5 bg-slate-200 -z-10" />}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-accent flex items-center justify-center shrink-0 shadow-lg z-10">
                    <span className="font-display font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border rounded-2xl">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">Every single diamond segment is inspected before bonding.</p>
            </div>
            <div className="p-8 border rounded-2xl">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Continuous Improvement</h3>
              <p className="text-sm text-muted-foreground">We reinvest 15% of all profits back into R&D.</p>
            </div>
            <div className="p-8 border rounded-2xl">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Customer Success</h3>
              <p className="text-sm text-muted-foreground">We don't just sell tools; we help you finish the job.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
