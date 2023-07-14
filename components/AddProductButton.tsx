"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

function AddProductButton() {
  // use transition
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Phone");
  formData.append("price", "1200");

  return (
    <button
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : "Add Product"}
    </button>
  );
}

export default AddProductButton;
