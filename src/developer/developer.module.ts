import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';

@Module({
  providers: [DeveloperService],
  exports: [DeveloperService],
  controllers: [DeveloperController]
})
export class DeveloperModule { }
