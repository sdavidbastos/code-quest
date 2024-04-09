import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from './dtos/create-user-body';
import { UsersRepository } from './repositories/users-repository';

@Controller()
export class AppController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Post('user')
  async createUser(@Body() body: CreateUserBody) {
    const member = await this.usersRepository.create(body.name, body.function);
    return member;
  }
}
