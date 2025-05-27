import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { UserGateway } from './domain/model/gateways/user-gateway';
import { UserService } from './infrastructure/driven-adapters/user.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withHashLocation()),
    {provide: UserGateway, useClass: UserService}],
};
