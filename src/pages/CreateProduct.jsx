import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function CreateProduct() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (formData) => {

    setLoading(true);

    try {

      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log(data);

      alert("Mahsulot qo'shildi");

      navigate("/products");

    } catch (error) {

      console.log(error);
      alert("Xatolik yuz berdi");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h2>Yangi mahsulot qo'shish</h2>

      {loading && <p>loading...</p>}

      <ProductForm onSubmit={handleCreate} />

    </div>
  );
}

export default CreateProduct;