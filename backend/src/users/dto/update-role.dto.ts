import { $Enums } from '@prisma/client';
import { IsEnum } from 'class-validator';

import { Role } from 'src/common/enums/role.enum';

export class UpdateRoleDto {
  @IsEnum($Enums.Role)
  role: Role;
}
