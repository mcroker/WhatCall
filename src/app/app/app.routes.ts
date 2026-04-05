import { Routes } from '@angular/router';
import { App } from './app';
import { HomeComponent } from '../home/home';

export const routes: Routes = [
  {
    'path': 'scenario/:id',
    loadComponent: () => import('../scenario/scenario').then(m => m.ScenarioComponent)
  },
  {
    'path': 'scenario',
    loadComponent: () => import('../scenario/scenario').then(m => m.ScenarioComponent)
  },
    {
    'path': 'about',
    loadComponent: () => import('../about/about').then(m => m.AboutComponent)
  },
  { path: '**', component: HomeComponent },
];



