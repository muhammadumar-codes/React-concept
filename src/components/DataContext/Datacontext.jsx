import { createContext } from "react";

import { useReducer } from "react";



export const watchContext = createContext();

export default function WatchDataProvider({ children }) {
  // Reducer function
 
  function Reducers(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: +state.count + 1 };
      case "DECREMENT":
        return { count: state.count > 0 ? state.count - 1 : state.count };
      case "RESET":
        return { count: 0 };
    }
  }

  const [state, dispatch] = useReducer(Reducers, { count: 0 });




  // Watches array (static data for now)
  const watches = [
    {
      id: 1,
      name: "Rolex Submariner",
      brand: "Rolex",
      description:
        "Luxury diving watch with 300m water resistance and timeless design.",
      price: 8999,
      discount: 10,
      category: "Female",
      stock: 5,
      rating: 4.9,
      colors: ["Silver", "Black", "Gold"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325",
    },
    // ... baki watches
  ];

  return (
    <watchContext.Provider value={{watches, state ,dispatch}}>
      {children}
    </watchContext.Provider>
  );
}
