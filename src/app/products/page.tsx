import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";

export default async function ProductsPage() {
  const items = await prisma.product.findMany({
    where: { active: true },
    take: 8,
    orderBy: { id: "asc" }
  });

  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Produkter
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Utforsk vårt nøye utvalgte sortiment av høykvalitetsprodukter
        </p>
      </div>
      
      <div className="grid gap-6">
        {items.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Ingen produkter tilgjengelig for øyeblikket.</p>
        </div>
      )}
    </section>
  );
}
