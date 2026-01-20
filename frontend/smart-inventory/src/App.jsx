import { useEffect, useState } from "react";
import { fetchProducts, updateStock } from "./api";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleUpdate = async (id, newQuantity) => {
    try {
      setLoadingId(id);
      const updated = await updateStock(id, newQuantity);
      setProducts(prev =>
        prev.map(p => (p.id === id ? updated : p))
      );
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="container">
      <h1>Smart Inventory Dashboard</h1>
      <ProductGrid
        products={products}
        onUpdate={handleUpdate}
        loadingId={loadingId}
      />
    </div>
  );
}

