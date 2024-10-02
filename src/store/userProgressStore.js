import { create } from "zustand";

const useUserProgressStore = create((set) => ({
  progress: "",

  // Actions
  showCart: () => {
    set({ progress: "cart" });
    console.log("show cart is called");
  },
  hideCart: () => set({ progress: "cartClosed" }),

  showCheckout: () => {
    set({ progress: "checkout" });
    console.log("showCheckout is called");
  },

  hideCheckout: () => set({ progress: "checkoutClosed" }),

  showSubmitted: () => set({ progress: "submitted" }),
  hideSubmitted: () => set({ progress: "submitClosed" }),
}));

export default useUserProgressStore;
