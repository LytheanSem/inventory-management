"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be equal or more than 0"),
  quantity: z.coerce.number().int().min(1, "Quantity must be more than 0"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: { id: id, userId: user.id },
  });
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();

  const lowStockAtValue = formData.get("lowStockAt");
  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: lowStockAtValue && lowStockAtValue !== "" ? lowStockAtValue : undefined,
  });

  if (!parsed.success) {
    console.error("Validation error:", parsed.error);
    throw new Error("Validation Failed: " + parsed.error.errors.map(e => e.message).join(", "));
  }

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    throw new Error(`Failed to create product: ${error instanceof Error ? error.message : "Unknown error"}`);
  }

  // Redirect after successful creation (outside try-catch so redirect errors propagate)
  redirect("/inventory");
}
