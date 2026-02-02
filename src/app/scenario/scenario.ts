import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Scenario, ScenarioService } from '../../services/scenarioService';
import { VideoPlayer } from '../video-player/video-player';
import { UserResponseComponent } from '../user-response/user-response';
import { RespondCompareComponent } from '../respond-compare/respond-compare';
import { ResponseService} from '../../services/responseService';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profileService';

@Component({
  selector: 'app-scenario',
  imports: [VideoPlayer, UserResponseComponent, RespondCompareComponent],
  templateUrl: './scenario.html',
  styleUrl: './scenario.scss'
})
export class ScenarioComponent implements OnInit {

  public scenario: Scenario | undefined = undefined;
  public userResponse: string | undefined = undefined;

  constructor(
    private responseService: ResponseService,
    private scenarioService: ScenarioService,
    private profileService: ProfileService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const scenarioId = params['id'];
      await this.profileService.login();
      const [scenario, userResponse] = await Promise.all([
        this.scenarioService.getScenarioById(scenarioId),
        this.responseService.getMyResponseForScenario(scenarioId)
      ]);
      console.log('Fetching scenario', scenario)
      this.scenario = scenario;
      this.userResponse = userResponse?.response;
      console.log('User response', this.userResponse);
      this.changeDetector.detectChanges();
    });
  }

  selectionMade(userResponse: string) {
    if (!this.scenario) {
      throw new Error('No scenario loaded');
    }
    this.userResponse = userResponse;
    this.responseService.addResponse(this.scenario.id, userResponse)
    // this.compare.userResponse = userResponse;
    this.changeDetector.detectChanges();
    if (this.scenario) {
      this.scenarioService.getScenarioStats(this.scenario.id).then((stats) => {
        console.log('Stats retrieved', stats);
      })
    } else {
      throw new Error('No scenario loaded');
    }
  }

}
