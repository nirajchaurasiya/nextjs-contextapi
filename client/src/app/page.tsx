"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { ProductContext } from "./context/ProductProvider";
export default function Home() {
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
  const deleteCardProduct = (pid: any) => {
    const updatedProducts = cartProduct.filter((e: any) => e?.id !== pid);
    setCartProduct(updatedProducts);
  };
  return (
    <main className={styles.main}>
      <h4>All Product</h4>
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
      <br />
      <br />
      <h4>Cart Product</h4>
      <br />
      <br />
      <div className={styles.cards}>
        {cartProduct?.length > 0 ? (
          cartProduct?.map((e: any, index: any) => (
            <div key={index} className={styles.card}>
              <div></div>
              <p>{e.name}</p>
              <p>${e.price}</p>
              <button
                onClick={() => deleteCardProduct(e?.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>Please add a product to cart to view</div>
        )}
      </div>
    </main>
  );
}
