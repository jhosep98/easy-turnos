import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Prisma, Role } from '@prisma/client';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { DEFAULT_ERROR_MESSAGES, DEFAULT_MESSAGES } from '../shared/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const isValidPassword = await bcrypt.compare(pass, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException(DEFAULT_ERROR_MESSAGES.password_is_wrong);
    }

    const { password: _, ...result } = user;

    return result;
  }

  async login(user: any, response: any) {
    const payload = {
      username: user.userName,
      sub: user.id,
      roles: user.role,
    };

    const token = this.jwtService.sign(payload);

    response.cookie('auth-cookie', token, {
      httpOnly: true, // Prevents client-side JS from accessing the cookie
      secure: process.env.NODE_ENV === 'production', // Cookie will only be sent over HTTPS
      sameSite: 'strict', // Necessary for cross-origin requests
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return {
      id: user.id,
      email: user.email,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  async register({
    email,
    userName,
    firstName,
    lastName,
    password,
    phone,
  }: Prisma.UserCreateInput) {
    const isUserExist = await this.usersService.validateUser(userName);

    if (isUserExist) {
      throw new BadRequestException(DEFAULT_ERROR_MESSAGES.user_exist);
    }

    return await this.usersService.create({
      email,
      userName,
      firstName,
      lastName,
      password,
      phone,
      role: Role.USER,
    });
  }

  async logout(response: any) {
    await response.clearCookie('auth-cookie');

    return {
      message: DEFAULT_MESSAGES.logout_success,
    };
  }
}
