import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Hash password for users
  const hashedPassword = await bcrypt.hash('12345678', 10);

  const hashedAdminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  // Create some users
  const users = await prisma.user.createMany({
    data: [
      {
        userName: 'user1',
        email: 'user1@user.com',
        firstName: 'Joe',
        lastName: 'Doe',
        password: hashedPassword,
        phone: '+541125665654',
        role: 'USER',
      },
      {
        userName: 'admin',
        email: 'admin@admin.com',
        firstName: 'Admin',
        phone: '+51987678876',
        password: hashedAdminPassword,
        role: 'ADMIN',
      },
    ],
  });

  console.log({
    users,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
