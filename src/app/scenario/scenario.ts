import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScenarioService, ScenarioWithResponses } from '../../services';
import { ScenarioPageController } from './scenarioPageController';
import { VideoPlayerComponent } from '../video-player/video-player';
import { UserResponseComponent } from '../user-response/user-response';
import { ResponsesChartComponent } from '../responses-chart/responses-chart';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scenario',
  imports: [VideoPlayerComponent, UserResponseComponent, ResponsesChartComponent],
  templateUrl: './scenario.html',
  styleUrl: './scenario.scss',
})
export class ScenarioComponent implements OnInit {

  public scenario: ScenarioWithResponses | undefined = undefined;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private pageController: ScenarioPageController,
    private scenarioService: ScenarioService,
    private changeDetector: ChangeDetectorRef,
    private location: Location
  ) {
    // Empty constructor; all initialization logic is in ngOnInit
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      await this.pageController.loadScenario(params['id']);
    })
    this.pageController.activeScenario$.subscribe(activeScenario => {
      console.log('Active scenario updated in component', activeScenario);
      this.scenario = activeScenario;
      this.location.replaceState(`/scenario/${activeScenario?.id}`);
      this.changeDetector.detectChanges();
    });
  }

  loadScenario(scenarioId?: string) {
    this.pageController.loadScenario(scenarioId);
  }

  async selectionMade(userResponse: string) {
    if (!this.scenario) {
      throw new Error('No scenario loaded');
    }
    this.scenarioService.addResponse(this.scenario.id, userResponse)
    this.changeDetector.detectChanges();
  }

}
