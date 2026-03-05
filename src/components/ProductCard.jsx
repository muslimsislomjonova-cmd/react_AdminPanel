function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} width="150" />
      <h3>{product.title}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;