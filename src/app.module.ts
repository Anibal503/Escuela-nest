import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosController } from './alumnos/alumnos.controller';

@Module({
  imports: [],
  controllers: [AppController, AlumnosController],
  providers: [AppService],
})
export class AppModule {}
