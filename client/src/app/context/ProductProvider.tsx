"use client";
import React, { createContext, useState } from "react";

export const ProductContext = createContext<
  [
    { id: number; name: string; price: number }[],
    React.Dispatch<
      React.SetStateAction<{ id: number; name: string; price: number }[]>
    >,
    never[],
    React.Dispatch<React.SetStateAction<never[]>>
  ]
>([[], () => {}, [], () => {}]);

export const ProductProvider = (props: any) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Sleek Smartphone", price: 499.99 },
    { id: 2, name: "Elegant Watch", price: 149.5 },
    { id: 3, name: "Cozy Blanket", price: 39.95 },
    { id: 4, name: "Deluxe Coffee Maker", price: 89.0 },
    { id: 5, name: "Gourmet Chocolate", price: 24.99 },
    { id: 6, name: "Stylish Sunglasses", price: 79.75 },
    { id: 7, name: "Premium Headphones", price: 199.99 },
    { id: 8, name: "Rustic Wooden Desk", price: 299.0 },
    { id: 9, name: "Organic Herbal Tea", price: 15.5 },
    { id: 10, name: "Vintage Leather Bag", price: 129.95 },
  ]);
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <ProductContext.Provider
      value={[products, setProducts, cartProduct, setCartProduct]}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
