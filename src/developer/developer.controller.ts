import { Controller, Get } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {
    constructor(private readonly developerService: DeveloperService) {



    }

    @Get()
    get() {
        return this.developerService.showDevs()
    }

}
