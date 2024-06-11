import {Module} from '@nestjs/common';
// import {APP_GUARD} from '@nestjs/core';
import {FeaturesModule} from '@features/features.module';
import {ConfigModule} from '@config/config.module';
import {APP_GUARD} from '@nestjs/core';
import {AuthGuard} from '@core/guards/auth.guard';
import {DatabaseRepository} from '@shared/repositories/database.repository';
// import {AuthGuard} from '@guards/auth.guard';

@Module({
  imports: [ConfigModule, FeaturesModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    DatabaseRepository,
  ],
})
export class AppModule {}
