const API_URL = import.meta.env.VITE_API_URL; 

export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const updateStock = async (id, newQuantity) => {
  const res = await fetch(`${API_URL}/update-stock`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, newQuantity }),
  });
  if (!res.ok) throw new Error("Invalid stock update");
  return res.json();
};


