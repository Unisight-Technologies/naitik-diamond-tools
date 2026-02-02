import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-secondary/20 relative">
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-10" />
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-accent transition-colors">
          {product.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {product.description}
        </p>
        <div className="flex flex-col gap-2">
          {product.features?.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
              <CheckCircle2 className="h-3 w-3 text-accent" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button className="w-full group-hover:bg-primary group-hover:text-white" variant="outline">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
