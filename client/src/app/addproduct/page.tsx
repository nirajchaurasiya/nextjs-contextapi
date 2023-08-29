"use client";
import React, { useContext, useState } from "react";
import styles from "../page.module.css";
import { ProductContext } from "../context/ProductProvider";
export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts, cartProduct, setCartProduct]: any =
    useContext(ProductContext);

  const addToCart = (pid: any) => {
    const specificProduct = products.find((e: any) => e.id === pid);
    setCartProduct([...cartProduct, specificProduct]);
  };

  const deleteProduct = (pid: any) => {
    const updatedProducts = products.filter((e: any) => e?.id !== pid);
    setProducts(updatedProducts);
  };
  const addProduct = (e: any) => {
    e.preventDefault();
    if (!title || !price) {
    } else {
      setProducts([
        ...products,
        { id: Math.floor(Math.random() * 1000), name: title, price: price },
      ]);
    }
  };
  return (
    <div className={styles.main}>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button onClick={addProduct}>Add Product</button>
      </form>
      <br />
      <br />
      <div className={styles.cards}>
        {products?.length > 0 ? (
          products?.map((e: any, index: any) => (
            <div key={index} className={styles.card}>
              <div></div>
              <p>{e.name}</p>
              <p>${e.price}</p>
              <button
                onClick={() => addToCart(e?.id)}
                className={styles.addToCart}
              >
                Add to Cart
              </button>
              <button
                onClick={() => deleteProduct(e?.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>No product found</div>
        )}
      </div>
    </div>
  );
}
