import create from 'zustand';
import Cookie from "js-cookie";

export const useStore = create(set => ({
  items: [],
  total: 0,
  
  refreshCart: (_items, total) => set(state => ({ items: _items, total: total })),

  addItem: item => set(state => {
    const items = state.items;
    const newItem = items.find((i) => i.id === item.id);

    if (!newItem) {
      item.quantity = 1;

      const _items = [...state.items, item];

      Cookie.set("cart", _items);
      
      return { 
        items: [..._items],
        total: state.total + item.price
       };
    } else {
      const _items = items.map(item => 
        item.id === newItem.id ? 
          Object.assign({}, item, { quantity: item.quantity + 1 })
          : item
        );

      Cookie.set("cart", _items);

      return {
        items: [..._items],
        total: state.total + item.price
      }
    }
  }),

  removeItem: item => set(state => {
    const newItem = state.items.find((i) => i.id === item.id);

    if (newItem.quantity > 1) {
      const _items = state.items.map(item => 
        item.id === newItem.id ? 
          Object.assign({}, item, { quantity: item.quantity - 1 })
          : item
        );

      Cookie.set("cart", _items);

      return {
        items: [..._items],
        total: state.total - item.price
      }
    }
  }),

  deleteItem: item => set(state => {
    const itemInCart = state.items.find((i) => i.id === item.id);

    if (itemInCart) {
      const { quantity } = itemInCart;

      const _items = [...state.items.filter(i => i.id !== item.id)];

      Cookie.set("cart", _items);

      return {
        items: [..._items],
        total: state.total - (item.price * quantity)
      }
    }
  })
  
}))