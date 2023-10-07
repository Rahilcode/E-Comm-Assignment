import React from "react";

const Card = ({ product, handlePurchase }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-rating">
        Average Rating: <span>{product.avgRating} ⭐</span>
      </p>
      <p className="product-price">Price: ${product.price}</p>
      <button
        className="purchase-btn"
        onClick={() => handlePurchase(product.id)}
      >
        Purchase
      </button>
    </div>
  );
};

export default Card;
