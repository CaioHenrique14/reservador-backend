import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [UserModule, PassportModule, PassportModule,
    JwtModule.register({
      secret: 'oCNOWEIBN0',
      signOptions: { expiresIn: '60s' },
    })
    ,],
  controllers: [AuthController],
  providers: [AuthService, AuthStrategy],
  exports: [JwtModule]
})
export class AuthModule { }
