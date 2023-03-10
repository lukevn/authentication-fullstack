import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

import { DB_CONFIG } from './config/database';

const { host, port, username, password, database, synchronize } = DB_CONFIG;

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [],
      synchronize,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
