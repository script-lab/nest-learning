import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(newUser: User) {
    this.users.push(newUser);
  }

  findAll(): User[] {
    return this.users;
  }
}
