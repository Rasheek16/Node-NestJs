import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import {Movie} from './movie/movie.entity/movie.entity'
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity/user.entity';
@Module({
  imports: [MovieModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'username',
    password:"password",
    database:'Movie',
    entities:[Movie,User],
    synchronize:false,
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
