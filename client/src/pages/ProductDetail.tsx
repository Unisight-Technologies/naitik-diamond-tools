import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProduct } from "@/hooks/use-products";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading } = useProduct(Number(id));

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-16 flex-1">
          <Skeleton className="h-[500px] w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center flex-1">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Catalog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Carousel */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border">
                      <img 
                        src={img} 
                        alt={`${product.name} view ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-slate-700">
                {product.price}
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-bold text-primary flex items-center gap-2">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
              <Link href="/contact" className="flex-1">
                <Button className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button variant="outline" className="w-full h-12 text-lg font-medium border-2">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
