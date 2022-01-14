import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infra/database/database.module';
import { DomainModule } from './domain/domain.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: process.env.MIGRATION_SYNCHRONIZE === 'true',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsRun: process.env.MIGRATION_RUN === 'true',
    }),
    DatabaseModule,
    DomainModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}