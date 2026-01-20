import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onUpdate, loadingId }) {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onUpdate={onUpdate}
          loading={loadingId === product.id}
        />
      ))}
    </div>
  );
}
