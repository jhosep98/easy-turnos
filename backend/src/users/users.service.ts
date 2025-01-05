import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { DEFAULT_ERROR_MESSAGESS } from 'src/shared/constants';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async validateUser(userName: string) {
    const user = await this.prisma.user.findUnique({
      where: { userName },
    });

    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const { password, ...rest } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        ...rest,
        password: hashedPassword,
      },
    });
  }

  async findOne(userName: string) {
    const user = await this.prisma.user.findUnique({
      where: { userName },
    });

    if (!user) {
      throw new UnauthorizedException(DEFAULT_ERROR_MESSAGESS.username_is_wrong);
    }

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users.map(({ password, ...rest }) => ({ ...rest }));
  }

  async update(id: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    const { password, role: _, ...rest } = data;
    const hashedPassword = await bcrypt.hash(password.toString(), 10);

    return this.prisma.user.update({
      where: { id: +id },
      data: {
        ...rest,
        password: hashedPassword,
      },
    });
  }

  async remove(id: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: id,
    });
  }

  async updateRole(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateRoleDto;
  }) {
    const { password: _, ...rest } = await this.prisma.user.update({
      where: { id: params.where.id },
      data: {
        role: params.data.role,
      },
    });

    return rest;
  }
}
