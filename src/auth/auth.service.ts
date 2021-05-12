import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login(credentials: User): Promise<any> {
    try {
      const user = await this.userService.findByEmail(credentials.email);
      const valid = await bcrypt.compare(credentials.password, user.password);
      if (!valid) {
        throw new UnauthorizedException('Acesso negado');
      }
      const token = this.jwtService.sign({ email: user.email });
      user.token = token;
      return user; 
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
