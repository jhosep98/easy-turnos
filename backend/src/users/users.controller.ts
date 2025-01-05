import { Role } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from '../shared/decorators/roles.decorator';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:userName')
  @Roles(Role.USER, Role.ADMIN)
  async getUser(@Param('userName') userName: string) {
    const { password: _, ...rest } = await this.usersService.findOne(userName);

    return {
      ...rest,
    };
  }

  @Get()
  @Roles(Role.ADMIN)
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Put('/role/:id')
  @Roles(Role.ADMIN)
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.usersService.updateRole({
      where: { id: +id },
      data: updateRoleDto,
    });
  }

  @Delete('/:id')
  @Roles(Role.ADMIN)
  async deleteUser(@Param('id') id: string) {
    return this.usersService.remove({ id: +id });
  }
}
