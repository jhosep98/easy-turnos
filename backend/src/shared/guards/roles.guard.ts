import { Role } from '@prisma/client';
import { Reflector } from '@nestjs/core';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

import { DEFAULT_ERROR_MESSAGES } from '../constants';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // If no roles are required, allow access.
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user || !user.roles) {
      throw new ForbiddenException(DEFAULT_ERROR_MESSAGES.access_denied);
    }

    // Check if the user has one of the required roles
    const hasRole = requiredRoles.some((role) => user.roles.includes(role));

    if (!hasRole) {
      // If user does not have the required roles, throw ForbiddenException
      throw new ForbiddenException(
        `${DEFAULT_ERROR_MESSAGES.access_denied_role} ${requiredRoles.join(', ')}`,
      );
    }

    // If the user has the necessary role, allow access
    return true;
  }
}
