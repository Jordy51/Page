import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeveloperModule } from './developer/developer.module';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';
import { AlertModule } from './alert/alert.module';
import { CommsModule } from './comms/comms.module';

@Module({
  imports: [DeveloperModule, TeamModule, AlertModule, CommsModule],
  controllers: [AppController],
  providers: [AppService, TeamService],
})
export class AppModule { }
