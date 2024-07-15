import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonButton,
  ModalController,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MyModalComponent } from '../my-modal/my-modal.component';

import { addIcons } from 'ionicons';

import {
  gridOutline,
  downloadOutline,
  trendingDownOutline,
  trendingUpOutline,
  notificationsOutline,
  cardOutline,
} from 'ionicons/icons';

import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponentModule,
    MyModalComponent,
    CommonModule,
    IonImg,
    IonIcon,
    IonButton,
    FormsModule,
    IonInput,
    IonItem,
  ],
})
export class Tab2Page {
  constructor() {
    addIcons({
      gridOutline,
      downloadOutline,
      trendingDownOutline,
      trendingUpOutline,
      notificationsOutline,
      cardOutline,
    });
  }
}
