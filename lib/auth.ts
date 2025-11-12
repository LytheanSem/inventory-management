import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_STACK_PROJECT_ID || !process.env.STACK_SECRET_SERVER_KEY) {
      console.error("Missing Stack Auth environment variables");
      throw new Error("Stack Auth configuration is missing. Please check environment variables.");
    }

    const user = await stackServerApp.getUser();
    if (!user) {
      redirect("/sign-in");
    }

    return user;
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    // If it's a redirect error, let it propagate
    if (error && typeof error === "object" && "digest" in error && String(error.digest).includes("NEXT_REDIRECT")) {
      throw error;
    }
    throw error;
  }
}

export async function getCurrentUserOrNull() {
  const user = await stackServerApp.getUser();
  return user;
}
