import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profileService';
import { ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../../services/scenarioService';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIcon } from "@angular/material/icon";
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-scenario-upload',
  templateUrl: './scenario-upload.html',
  styleUrls: ['./scenario-upload.scss'],
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule,
    MatInputModule, MatIcon, MatChipsModule]

})
export class ScenarioUploadComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    scenarioType: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    url: new FormControl<string>(''),
    options: new FormControl<string[]>([] as string[], Validators.required)
  });
  payLoad: string = '';
  templateKeywords: any;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SEMICOLON]; // Enter, comma

  readonly reactiveKeywords = signal<string[]>([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private scenarioService: ScenarioService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const scenarioId = params['id'];
      console.log('ScenarioComponent: scenarioId from route params', scenarioId);
      await this.profileService.login();
    });
  }

  removeReactiveKeyword(keyword: string) {
    this.reactiveKeywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      return [...keywords];
    });

    this.form.controls['options'].setValue(this.reactiveKeywords());
  }

  addReactiveKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      console.log('Adding keyword', value);
      this.reactiveKeywords.update(keywords => [...keywords, value]);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.form.controls['options'].setValue(this.reactiveKeywords());
  }

  get optionsArray(): FormArray {
    return this.form.get('options') as FormArray;
  }

  async save(): Promise<void> {
    try {
      const formData = this.form.value;
      const scenarioId = await this.scenarioService.addScenario(formData);
      console.log('Scenario saved successfully with ID:', scenarioId);
      this.payLoad = JSON.stringify(formData);
      alert('Scenario saved successfully!');
      this.form.reset();
    } catch (error) {
      console.error('Error saving scenario:', error);
      alert('Error saving scenario. Please try again.');
    }
  }
}

