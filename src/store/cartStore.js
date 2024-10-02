import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],

  // Actions
  addItem: (item) => set((state) => {
    const existingCartItemIndex = state.items.findIndex((i) => i.id === item.id);
    let updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...item, quantity: 1 });
    }

    return { items: updatedItems };
  }),

  removeItem: (id) => set((state) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    return { ...state, items: updatedItems };
  }),

  clearCart: () => set(() => ({
    items: [],
  })),
}));

export default useCartStore;
