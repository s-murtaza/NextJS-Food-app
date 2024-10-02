"use client";

import Modal from "./modal";
import { currencyFormatter } from "@/util/formatting";
import useCartStore from "@/store/cartStore";
import useUserProgressStore from "@/store/userProgressStore";
import { useState, useEffect } from "react";

export default function CartModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const { progress, hideCart, showCheckout } = useUserProgressStore();

  let status = progress==='cart';

  const cartTotal = useCartStore((state) =>
    state.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    )
  );
  function open() {
    setIsOpen(true);
    console.log(progress)
  }

  function close() {
    setIsOpen(false);
    console.log('closed cart with close fn')
  }

  function handleCheckout() {
    showCheckout();
  }

  useEffect(() => {
    if (status) {
      open();
      console.log("cart opened in useEffect");
    }   
    return()=>{
      close()
    }
  }, [progress]); // Triggered when progress changes

  return (
    <Modal id={1} isOpen={isOpen} className={"cart"} close={close}>
      {items?.length > 0 ? (
        items.map((item) => (
          <li className="cart-item text-stone-800 " key={item.id}>
            <p>
              {item.name} - {item.quantity} x{" "}
              {currencyFormatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
              <button type="button" onClick={() => removeItem(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button type="button" onClick={() => addItem(item)}>
                +
              </button>
            </p>
          </li>
        ))
      ) : (
        <p className='text-stone-700 text-center pt-5 font-thin text-xl'>No cart items</p>
      )}

      <p className="cart-total">
        {" "}
        Total: {currencyFormatter.format(cartTotal)}
      </p>
      <p className="modal-actions">
        <button onClick={()=>hideCart()} className="text-button">
          {" "}
          Close{" "}
        </button>
        {items.length > 0 && (
          <button type="button" onClick={handleCheckout} className="button">
            {" "}
            Go to Checkout{" "}
          </button>
        )}
      </p>
    </Modal>
  );
}
