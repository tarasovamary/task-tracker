import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { MatNativeDateModule } from '@angular/material/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(appRoutes), importProvidersFrom(MatNativeDateModule)],
};
