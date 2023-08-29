"use client";
import { ProductContext } from "@/app/context/ProductProvider";
import Link from "next/link";
import React, { useContext } from "react";

export default function Nav() {
  const [products, , cartProduct]: any = useContext(ProductContext);

  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <p>Total Products: {products?.length}</p>
      <p>Cart: {cartProduct?.length}</p>
      <Link href="/addproduct">Add Product</Link>
    </div>
  );
}
