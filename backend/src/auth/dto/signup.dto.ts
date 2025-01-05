import { Transform } from 'class-transformer';
import { $Enums, Prisma } from '@prisma/client';
import {
  IsString,
  MinLength,
  IsEnum,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class SignupDto implements Prisma.UserCreateInput {
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
  @MinLength(4)
  lastName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
