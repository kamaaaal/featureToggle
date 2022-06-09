import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { response } from 'express';
import { featureDetails } from './interfaces/feature';

@Injectable()
export class FeatureToggleService {
  api: string;
  statusApi: string;

  constructor(private http: HttpService) {
    this.api = 'http://127.0.0.1:5000';
    /// http://127.0.0.1:5000/sayHllo
    this.statusApi = 'http://127.0.0.1:5000/status';
  }

  async getFeature(featureName: string) {
    //// retrives feature details that will be send to user when feature is turned off
    const resp: Observable<AxiosResponse<featureDetails>> = this.http.get<featureDetails>(
      `${this.api}/${featureName}`,
    );
    const promise : Promise<featureDetails>  = new Promise((res, rej) =>
      resp.subscribe((response) => {
        res(response.data);
      }),
    );
    return promise;
  }
  async isOn(feature: string) {
    const resp: Observable<AxiosResponse<object>> = this.http.get<object>(
      `${this.statusApi}/${feature}`,
    );
    ///// retreiving status from the api
    const promise = new Promise((res, rej) =>
      resp.subscribe((response) => {
        res(response.data);
        console.log(response.data)
      }),
    );
    return promise;
  }

  async featureGuard(feature:string){
    if (! (await this.isOn(feature))){
      const featureDet :featureDetails = await this.getFeature(feature);
      throw new HttpException(featureDet.message,featureDet.code);
    }
  }
}
