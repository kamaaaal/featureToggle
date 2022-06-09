import { HttpModule, HttpService} from '@nestjs/axios';
// import {AxiosInstanceToken} from 'axios';
import AxiosInstanceToken from "axios"
import { Module } from '@nestjs/common';
import { FeatureToggleService } from './feature-toggle.service';

@Module({
  imports : [HttpModule],
  providers: [FeatureToggleService],
  exports : [FeatureToggleService]
})
export class FeatureToggleModule {}

