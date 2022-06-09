import { HttpException, Injectable } from '@nestjs/common';
import { FeatureToggleService } from 'src/feature-toggle/feature-toggle.service';
import { featureDetails } from 'src/feature-toggle/interfaces/feature';

@Injectable()
export class SimpService {
    constructor (private features : FeatureToggleService){}

    async sayHello(){
        try{ 
            await this.features.featureGuard('sayHello');
                // throw new HttpException('page is under construction',404);
            return 'hello World!!!!';
        }
        catch(err){
            throw new HttpException(err.message,err.status);
        }
    }

    // async welcome(){
    //     const 
    // }
}
