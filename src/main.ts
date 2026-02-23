import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgCircleProgressModule.forRoot({
      animationDuration: 3000
    }))
  ]
}).catch(err => console.error(err));
