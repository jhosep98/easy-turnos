import { $Enums, Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

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
  firstName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  @MinLength(4)
  lastName?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
