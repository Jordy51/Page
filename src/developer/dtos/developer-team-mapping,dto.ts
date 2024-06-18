import { IsArray, IsString, ValidateNested } from "class-validator";

export class DeveloperPhoneDTO {
    @IsString()
    phone: string
}

export class MmapDeveloperToTeamDTO {
    @IsString()
    teamId: string

    @IsArray()
    @ValidateNested()
    developers: DeveloperPhoneDTO[]
}


