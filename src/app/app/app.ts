import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ScenarioPageController } from '../scenario/scenarioPageController';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(
    private router: Router,
    private scenarioPageController: ScenarioPageController
  ) { 
    // Empty constructor for dependency injection
  }

  gotoRandonScenario() {
    this.router.navigate(['/scenario']);
    this.scenarioPageController.loadScenario();
  }

}
