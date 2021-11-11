import { PrismaClient } from "@prisma/client";
import { categories } from "./seed/category";
const prisma = new PrismaClient();

async function main() {
  const testUser = await prisma.user.upsert({
    where: { email: "enemali.william@gmail.com" },
    update: {},
    create: {
      email: "enemali.william@gmail.com",
      name: "William Cloud",
      account_type: "Admin",
      Folder: {
        create: {
          name: "william-posters",
          Project: {
            create: {
              name: "Sample Design",
              recent_colors: {},
              recent_fonts: {},
              recent_texts: {},
              recent_elements: {},
              Pages: {
                create: {
                  name: "Page 1",
                  data: {},
                  data_json: {},
                  thumbnail_url: "",
                  thumbnail_svg_url: "",
                },
              },
            },
          },
        },
      },
    },
  });

  for (let cat of categories) {
    await prisma.category.create({
      data: {
        name: cat,
        description: cat,
        active: true,
      },
    });
  }

  console.log({ testUser });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
