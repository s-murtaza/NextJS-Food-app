"use client";

import { currencyFormatter } from "../util/formatting";
import useCartStore from "../store/cartStore";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default function MealItem({ currentMeal }) {
  const { addItem } = useCartStore();
  const [isAdding, setIsAdding] = useState(false);

  function handleAddMealToCart() {
    addItem(currentMeal);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 3000);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={currentMeal.image} alt={currentMeal.name} />
        <div>
          <h3 className="text-stone-200">{currentMeal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(currentMeal.price)}
          </p>
          <p className="meal-item-description text-stone-200">{currentMeal.description}</p>
          <p className="meal-item-actions">
            <button
              className={`cart-button ${isAdding ? "clicked" : ""}`}
              onClick={handleAddMealToCart}
            >
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fas fa-shopping-cart"
              />
              <FontAwesomeIcon icon={faBox} className="fas fa-box" />
            </button>
          </p>
        </div>
      </article>
    </li>
  );
}
