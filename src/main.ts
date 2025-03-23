import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Provide HTTP Client
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes),provideHttpClient(withFetch())], // Provide HttpClient
}).catch(err => console.error(err));