import { IsEnum } from 'class-validator';
import { $Enums, Role } from '@prisma/client';

export class UpdateRoleDto {
  @IsEnum($Enums.Role)
  role: Role;
}
