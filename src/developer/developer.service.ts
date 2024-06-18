import { Injectable } from '@nestjs/common';
import { Developer } from './schemas/developer.schema';
import { MmapDeveloperToTeamDTO } from './dtos/developer-team-mapping,dto';

@Injectable()
export class DeveloperService {
    private developers: Record<string, Developer> = {
    }
    constructor() {
        this.developers = {
            "8005568635": {
                _id: "unique_id",
                name: "Aditya",
                phone: "8005568635",
                team_id: "X"
            }
            , "9785918676": {
                _id: "unique_id",
                name: "Aditya",
                phone: "8005568635",
                team_id: "X"
            }, "9898989898": {
                _id: "unique_id",
                name: "Aditya",
                phone: "8005568635",
                team_id: "X"
            }

        }

    }


    mapDeveloperToTeam(mapDeveloperToTeamDto: MmapDeveloperToTeamDTO): void {
        mapDeveloperToTeamDto.developers.forEach((devToBeMapped) => {
            const dev: Developer | undefined | null = this.developers[devToBeMapped.phone]
            if (!dev) {
                console.error(`Developer with phone number ${dev.phone} do not exisit`)
            }
            this.developers[devToBeMapped.phone].team_id = mapDeveloperToTeamDto.teamId
        })
    }

    showDevs() {
        console.log(this.developers);
        return this.developers;
    }
}
