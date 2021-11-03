import { PrismaClient } from '@prisma/client';
import { resources } from '../utils/seedData';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      role: 'ADMIN',
    },
  });

  await prisma.resources.createMany({
    data: resources,
  });
}

main()
  .catch((e) => {
    console.error(e); //log error incase there is any error
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect); //add ts-node package to run command for seeding db