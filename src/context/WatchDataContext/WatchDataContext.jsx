import { createContext } from "react";


// WatchContext
export const watchContext = createContext();

// contextProvider 

export default function WatchDataProvider({ children }) {

  // Watch Data in a  context :

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

  ];

  //  Provider for globally state to get it
  
  return (
    <watchContext.Provider value={{watches}}>
      {children}
    </watchContext.Provider>
  );
}
