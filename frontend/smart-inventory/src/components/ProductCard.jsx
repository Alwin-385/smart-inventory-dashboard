export default function ProductCard({ product, onUpdate, loading }) {
  const isLowStock = product.stock < product.lowStockThreshold;

  return (
    <div className={`card ${isLowStock ? "low-stock" : ""}`}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>

      {isLowStock && <span className="badge">Critical Low</span>}

      <div className="actions">
        <button
          disabled={product.stock === 0 || loading}
          onClick={() => onUpdate(product.id, product.stock - 1)}
        >
          -
        </button>
        <button
          disabled={loading}
          onClick={() => onUpdate(product.id, product.stock + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
