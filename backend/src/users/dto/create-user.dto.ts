import { $Enums, Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  userName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  fullName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
