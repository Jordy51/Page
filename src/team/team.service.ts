import { Injectable } from '@nestjs/common';
import { CreateTeamDTO } from './dtos/create-team.dto';
import { Team } from './schema/team.schema';
import { DeveloperService } from 'src/developer/developer.service';

@Injectable()
export class TeamService {
    private teamCounter: number
    private teamsMap: Record<number, Team> = {}
    constructor(
        private readonly developerService: DeveloperService
    ) {
        this.teamCounter = 0;
    }


    private create(ctx: { name: string }): Team {
        const newTeam = {
            _id: this.teamCounter.toString(),
            name: ctx.name,
        }
        this.teamsMap[this.teamCounter += 1] = newTeam
        return newTeam
    }

    createTeamAndMapDeveloper(createTeamDTO: CreateTeamDTO) {
        const newTeam = this.create({ name: createTeamDTO.name });
        console.log({ newTeam })
        this.developerService.mapDeveloperToTeam({
            teamId: newTeam._id,
            developers: createTeamDTO.developers
        })
    }

    showTeams(): Record<number, Team> {
        console.log(this.teamsMap)
        return this.teamsMap
    }
}
