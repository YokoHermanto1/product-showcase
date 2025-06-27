import { getProductById } from '@/lib/api';
import FavoriteButton from '../../components/FavoriteButton';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(params.id);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain border rounded"
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
