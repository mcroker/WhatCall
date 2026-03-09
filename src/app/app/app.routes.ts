import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { App } from './app';
import { HomeComponent } from '../home/home';
import { ScenarioComponent } from '../scenario/scenario';
import { ScenarioUploadComponent } from '../scenario-upload/scenario-upload';
import { inject } from '@angular/core';
import { ScenarioService } from '../../services/scenarioService';

/*
export const randomScenarioResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const scenarioService = inject(ScenarioService);
  return scenarioService
    .getRandomScenario()
    .then(scenario => {
      console.log('randomScenarioResolver: got random scenario ID', scenario.id);
      return scenario.id
    });
};
*/

export const routes: Routes = [
  {
    'path': 'scenario/:id',
    'component': ScenarioComponent
  },
  {
    'path': 'scenario',
    'component': ScenarioComponent
  },
  {
    'path': 'scenario-upload',
    'component': ScenarioUploadComponent
  },
  { path: '**', component: HomeComponent },
];



