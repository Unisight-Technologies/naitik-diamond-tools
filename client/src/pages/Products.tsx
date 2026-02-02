import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Skeleton } from "@/components/ui/skeleton";

export default function Products() {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />
      
      <div className="bg-primary py-16 text-center text-white relative overflow-hidden">
        {/* Unsplash image: workshop tools background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')]" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Product Catalog</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            High-performance diamond tools for every cutting, drilling, and polishing need.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-16 flex-1">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[250px] w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-destructive">Failed to load products</h3>
            <p className="text-muted-foreground mt-2">Please try refreshing the page.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
