import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profileService';
import { ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../../services/scenarioService';

@Component({
  selector: 'app-scenario-upload',
  templateUrl: './scenario-upload.html',
  styleUrls: ['./scenario-upload.scss'],
  imports: [ReactiveFormsModule]
})
export class ScenarioUploadComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    scenarioType: new FormControl('x'),
    title: new FormControl('x'),
    url: new FormControl('x')
  });
  payLoad: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private scenarioService: ScenarioService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const scenarioId = params['id'];
      console.log('ScenarioComponent: scenarioId from route params', scenarioId);
      await this.profileService.login();
  
      const scenarioTypeValue = params['scenarioType'] || '';
      const scenarioTitleValue = params['scenarioTitle'] || '';
      const scenarioUrlValue = params['scenarioUrl'] || '';

      this.form.setValue({
        scenarioType: scenarioTypeValue,
        title: scenarioTitleValue,
        url: scenarioUrlValue
      })
    });
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    this.scenarioService.addScenario(formValue);
    console.log('form submit', formValue);
    this.form.reset();
  }
}