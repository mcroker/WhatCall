import { Routes } from '@angular/router';
import { ScenarioComponent } from '../components/scenario/scenario';
import { ScenarioUploadComponent } from '../components/scenario-upload/scenario-upload';
import { HomeComponent } from '../components/home/home';

export const routes: Routes = [
  {
    'path': 'scenario/:id',
    'component': ScenarioComponent
  },
  {
    'path': 'scenario-upload/:id',
    'component': ScenarioUploadComponent
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('../components/folder/folder.page').then((m) => m.FolderPage),
  },
  { path: '**', component: HomeComponent },
];
