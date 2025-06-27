import { getProducts,getProductById } from '@/lib/api';
import FavoriteButton from '../../components/FavoriteButton';
import Image from 'next/image';

export async function generateStaticParams() {
  const products = await getProducts(); // panggil tanpa parameter
  return products.slice(0, 5).map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
      <Image
        src={product.image}
        alt={product.title}
        width={256} // 64 * 4 (tailwind w-64 = 256px)
        height={256}
        className="object-contain border rounded"
        style={{ width: '16rem', height: '16rem' }} // optional, agar tetap 64x64 tailwind
      />
        <div>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold">Category: {product.category}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>

          <FavoriteButton productId={product.id} />
        </div>
      </div>
    </main>
  );
}