// write product card here
import React from "react";
import Button from "../components/button"; // Importing the button component

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/200";
  const productName = "Wireless Headphones";
  const price = "$99.99";

  const handleViewProduct = () => {
    alert("Viewing product: " + productName);
  };

  return (
    <div className="product-card">
      <style>
        {`
          .product-card {
            width: 250px;
            background-color: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 16px;
            text-align: center;
            border: 1px solid #ddd;
            font-family: Arial, sans-serif;
          }

          .product-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .product-name {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
          }

          .product-price {
            color: #27ae60;
            font-size: 16px;
            margin-bottom: 10px;
          }

          .view-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 14px;
          }

          .view-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <img src={productImage} alt="Product" className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{price}</p>
      <Button onClick={handleViewProduct} label="View Product" />
    </div>
  );
};

export default Productcard;
