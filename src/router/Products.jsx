import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

 return (
  <div className="products-container">
    <h2 className="products-title">Products</h2>

    <div className="table-wrapper">
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {products.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
              </td>

              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>

              <td className="description">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Products;