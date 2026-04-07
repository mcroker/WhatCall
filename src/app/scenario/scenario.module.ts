// feature.module.ts (Lazy Loaded)
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { ScenarioComponent } from './scenario';
import { ScenarioService } from '../../services';
import { ScenarioPageController } from './scenarioPageController';

@NgModule({
  imports: [
    ScenarioComponent
  ],
  providers: [
    ScenarioService,
    ScenarioPageController,
    provideFirestore(() => getFirestore()),
  ],
})
export class AppFirestoreModule { }
