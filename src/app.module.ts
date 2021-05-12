import { UnitModule } from './unit/unit.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { LeaseModule } from './lease/lease.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://reservador:WKLqI1Q6vkz9fM5T@cluster0.0dnbu.mongodb.net/test?authSource=admin&replicaSet=atlas-rdvhpb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'), CarModule, LeaseModule,UnitModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
