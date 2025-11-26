import { prisma } from "../lib/prisma.js";
import { hashPassword } from "../lib/hash.js";

async function main() {
  console.log("Creando usuario admin...");

  const hashedPassword = await hashPassword("123456");

  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      password: hashedPassword,
      name: "Administrador",
      role: "admin",
    },
  });

  console.log("Usuario admin creado:");
  console.log("Email: admin@admin.com");
  console.log("Password: 123456");
}

main()
  .catch((e) => {
    console.error("Error ejecutando seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
