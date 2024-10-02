"use client";

import Modal from "./modal";
import { currencyFormatter } from "@/util/formatting";
import useCartStore from "@/store/cartStore";
import useUserProgressStore from "@/store/userProgressStore";
import { useState, useEffect } from "react";

export default function CheckoutModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { clearCart } = useCartStore();
  const { progress, hideCheckout, showSubmitted } = useUserProgressStore();

  const cartTotal = useCartStore((state) =>
    state.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    )
  );

  function open() {
    setIsOpen(true);
    console.log("checkout also opened");
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (progress === "checkout") {
      open();
      console.log("checkout opened");
    }
    return () => {
      close();
    };
  }, [progress]);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    const onSuccess = () => {
      console.log("order submitted");
      clearCart();
      close();
      showSubmitted();
    };

    onSuccess()
  }

  return (
    <Modal id={2} isOpen={isOpen} className={"modal"} close={close}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center text-lg font-bold"> Checkout </h2>
        <p> Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <p className="control">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p className="control">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p className="control">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" required />
        </p>
        <div className="control-row">
          <p className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" required />
          </p>
          <p className="control">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </p>
        </div>
        <p className="modal-actions">
          <button
            type="button"
            onClick={() => hideCheckout()}
            className="text-button"
          >
            {" "}
            Close{" "}
          </button>
          <button className="button">
            {" "}
            Place Order{" "}
          </button>
        </p>
      </form>
    </Modal>
  );
}
