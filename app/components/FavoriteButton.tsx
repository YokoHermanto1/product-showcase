'use client';

import { useEffect, useState } from 'react';

type Props = {
  productId: number;
};

export default function FavoriteButton({ productId }: Props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    const favorites = stored ? JSON.parse(stored) : [];
    setIsFav(favorites.includes(productId));
  }, [productId]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem('favorites');
    const favorites = stored ? JSON.parse(stored) : [];

    let updated;
    if (favorites.includes(productId)) {
      updated = favorites.filter((id: number) => id !== productId);
    } else {
      updated = [...favorites, productId];
    }

    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-4 px-4 py-2 rounded text-sm ${
        isFav ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}
