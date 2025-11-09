import "dotenv/config";
import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

async function main() {
  const demoUserId = "0a486d1c-0e96-4d1a-a5d0-9438df147238";

  // Create sample products
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Sample Product ${i + 1}`,
      sku: `SKU-${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      quantity: Math.floor(Math.random() * 100) + 1,
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1)),
    }))
  })

  console.log("Seed data created successfully");
  console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
