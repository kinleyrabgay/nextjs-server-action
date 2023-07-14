"use server";

import { Product } from "@/typing";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch("https://64b1228f062767bc4825bfef.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   Particular
  revalidateTag("products");

  //   Revalidata entire home page
  //   revalidatePath("/");
};
