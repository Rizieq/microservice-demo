import { Module } from '@nestjs/common';
import { UserService } from './user-service.service';
import { UserController } from './user-service.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserServiceModule {}
