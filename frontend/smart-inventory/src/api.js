const API_URL = "http://localhost:5000";
export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const updateStock = async (id, newQuantity) => {
  const res = await fetch(`${API_URL}/update-stock`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, newQuantity })
  });

  if (!res.ok) {
    throw new Error("Invalid stock update");
  }

  return res.json();
};
