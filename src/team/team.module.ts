import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { DeveloperModule } from 'src/developer/developer.module';
import { TeamService } from './team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [DeveloperModule]
})
export class TeamModule {

}
