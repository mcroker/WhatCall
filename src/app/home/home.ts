import { Component } from '@angular/core';
import { ScenarioService } from '../../services/scenarioService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {

  constructor(
    private scenarioService: ScenarioService,
    private router: Router
  ) {
    console.log('App component initialized');
  }

  gotoRandomScenario() {
    this.router.navigate(['/scenario']);
  }

  gotoUploadScenario() {
    this.router.navigate(['/scenario-upload']);
  }
}
