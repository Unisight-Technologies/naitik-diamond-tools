import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  images: string[];
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Failed to fetch products");
      return await res.json();
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<Product | null> => {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Failed to fetch products");
      const products: Product[] = await res.json();
      return products.find(product => product.id === id) || null;
    },
    enabled: !isNaN(id),
  });
}
