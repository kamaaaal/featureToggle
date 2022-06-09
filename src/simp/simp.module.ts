import { Module } from '@nestjs/common';
import { SimpService } from './simp.service';
import { SimpController } from './simp.controller';
import { FeatureToggleModule } from 'src/feature-toggle/feature-toggle.module';

@Module({
  imports : [FeatureToggleModule],
  providers: [SimpService],
  controllers: [SimpController]
})
export class SimpModule {}
