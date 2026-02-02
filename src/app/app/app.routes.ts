import { Routes } from '@angular/router';
import { ScenarioComponent } from '../scenario/scenario';
import { App } from './app';
import { HomeComponent } from '../home/home';

export const routes: Routes = [
  {
    'path': 'scenaro/:id',
    'component': ScenarioComponent
  },
  { path: '**', component: HomeComponent },
];
