export async function getProducts(limit: number = 5) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
