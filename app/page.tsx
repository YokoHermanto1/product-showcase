import { getProducts } from '@/lib/api';
import Link from 'next/link';

// Tipe sesuai struktur dari fakestoreapi
type Product = {
  id: number;
  title: string;
  image: string;
};

export default async function HomePage() {
  const products: Product[] = await getProducts(5); // Ambil 5 produk

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product Showcase</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow-md p-4 flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-auto object-contain mb-4"
            />
            <h2 className="text-center font-semibold mb-2">{product.title}</h2>
            <Link
              href={`/products/${product.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
