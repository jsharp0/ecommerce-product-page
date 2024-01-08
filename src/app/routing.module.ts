import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routeConfig: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'collections',
    component: AppComponent,
  },
  {
    path: 'men',
    component: AppComponent,
  },
  {
    path: 'women',
    component: AppComponent,
  },
  {
    path: 'about',
    component: AppComponent,
  },
  {
    path: 'contact',
    component: AppComponent,
  },
];

export default routeConfig;
