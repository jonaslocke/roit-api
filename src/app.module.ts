import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
require('dotenv').config()

const database = process.env.DB_CONNECTION

@Module({
  imports: [
    MongooseModule.forRoot(database),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
