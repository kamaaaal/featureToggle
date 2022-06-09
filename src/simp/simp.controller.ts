import { Controller, Get } from '@nestjs/common';
import { SimpService } from './simp.service';

@Controller('simp')
export class SimpController {
    constructor (private service:SimpService){}

    @Get('sayHello')
    async sayHello(){
        return this.service.sayHello();
    }
}
