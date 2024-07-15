import { Component, Input, OnInit } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonLabel,
  IonTabButton,
  IonSearchbar,
  IonButton,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import { CommonModule } from '@angular/common';

import {
  gridOutline,
  downloadOutline,
  trendingDownOutline,
  trendingUpOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonIcon,
    IonLabel,
    CommonModule,
  ],
})
export class TransactionComponent {
  @Input() type!: string;
  @Input() name!: string;
  @Input() date!: string;
  @Input() amount!: string;

  constructor() {
    addIcons({
      gridOutline,
      downloadOutline,
      trendingDownOutline,
      trendingUpOutline,
    });
  }
}
