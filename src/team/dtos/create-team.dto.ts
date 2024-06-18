import { IsArray, IsString, ValidateNested } from "class-validator";
import { DeveloperPhoneDTO } from "src/developer/dtos/developer-team-mapping,dto";


export class CreateTeamDTO {

    @IsString()
    name: string

    @IsArray()
    @ValidateNested()
    developers: DeveloperPhoneDTO[]
}