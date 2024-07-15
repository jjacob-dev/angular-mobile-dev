import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';

import {
  gridOutline,
  downloadOutline,
  trendingDownOutline,
  trendingUpOutline,
  notificationsOutline,
} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonImg,
    IonButton,
    RouterLink,
    IonIcon,
  ],
})
export class OnboardingPage {
  constructor() {
    addIcons({
      gridOutline,
      downloadOutline,
      trendingDownOutline,
      trendingUpOutline,
      notificationsOutline,
    });
  }
}
