import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { SimpModule } from './simp/simp.module';

@Module({
  imports: [FeatureToggleModule, SimpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
