import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDTO } from './dtos/create-team.dto';

@Controller('team')
export class TeamController {

    constructor(
        private readonly teamService: TeamService
    ) { }

    @Post()
    create(@Body() data: CreateTeamDTO) {
        return this.teamService.createTeamAndMapDeveloper(data)
    }


    @Get()
    getAllTeam() {
        return this.teamService.showTeams()
    }
}
