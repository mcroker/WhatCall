
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, americanFootballOutline, americanFootballSharp } from 'ionicons/icons';
import { ScenarioService } from 'src/services/scenarioService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private scenarioService: ScenarioService
  ) {
    addIcons({
      mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, 
      heartSharp, archiveOutline, archiveSharp, trashOutline, americanFootballOutline, 
      americanFootballSharp,warningOutline, warningSharp, bookmarkOutline, bookmarkSharp 
  });
  }

  getRandomScenarioUrl(): Promise<string> {
    return this.scenarioService.getRandomScenarioUrl();
  }

}
