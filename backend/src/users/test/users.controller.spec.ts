import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';

import { UsersService } from '../users.service';
import { UsersController } from '../users.controller';
import { PrismaService } from '../../prisma/prisma.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('Users Controller', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should create a new user', async () => {
      const result = await service.create({
        email: 'new-user@example.com',
        userName: 'new-user',
        firstName: 'New',
        lastName: 'User',
        password: '12345678',
      });

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('firstName');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('role');
      expect(result).toHaveProperty('password');
    });

    it('should return all users', async () => {
      const result = await service.findAll();

      expect(result).toBeDefined();
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('pagination');

      // Validate the structure of the array inside the object
      result.data.forEach((user) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('userName');
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('role');
        expect(user).toHaveProperty('password');
      });
    });

    it('should return a single user', async () => {
      const result = await service.findOne('admin');

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('firstName');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('role');
      expect(result).toHaveProperty('password');
    });

    it('should throw an error if the user does not exist', async () => {
      await expect(service.findOne('non-existent-user')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('Only ADMIN can update a user role', async () => {
      const result = await service.updateRole({
        where: { id: 8 },
        data: { role: 'ADMIN' },
      });

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('firstName');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('role');
    });

    it('Only ADMIN should remove a user', async () => {
      const result = await service.remove({ id: 10 });

      expect(result).toBeDefined();
    });
  });
});
