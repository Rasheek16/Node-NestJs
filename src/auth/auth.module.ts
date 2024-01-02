import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stratergy';


@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret:'secret',
            signOptions:{expiresIn:'1h'}
            
        }) ,
    ],
    providers: [AuthService,JwtStrategy], controllers: [AuthController]})

    
export class AuthModule {}
