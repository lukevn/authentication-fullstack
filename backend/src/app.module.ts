import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

// import environment variables after envModule
import { DB_CONFIG } from './config/database';

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot({
      ...DB_CONFIG,
      entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
