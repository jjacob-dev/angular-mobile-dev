import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonTabs,
} from '@ionic/angular/standalone';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { addIcons } from 'ionicons';

import {
  homeOutline,
  apps,
  trendingUpOutline,
  bookOutline,
  addOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponentModule,
    IonIcon,
    IonImg,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonTabs,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, apps, trendingUpOutline, bookOutline, addOutline });
  }
}
