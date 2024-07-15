import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { addIcons } from 'ionicons';

import {
  gridOutline,
  downloadOutline,
  trendingDownOutline,
  trendingUpOutline,
  notificationsOutline,
  logoGoogle,
  logoAmazon,
  logoMicrosoft,
} from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import Chart from 'chart.js/auto';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponentModule,
    IonIcon,
    IonImg,
  ],
})
export class Tab3Page implements OnInit {
  @ViewChild('healthGraph', { static: true }) canvas: any;
  chart: any;

  constructor() {
    addIcons({
      gridOutline,
      downloadOutline,
      trendingDownOutline,
      trendingUpOutline,
      notificationsOutline,
      logoGoogle,
      logoAmazon,
      logoMicrosoft,
    });
  }

  events = [
    11500.0, 11421.0, 11386.0, 11982.0, 12373.0, 12740.0, 12620.0, 13780.0,
    13526.0, 14210.0, 14823.0, 14613.0, 15627.0,
  ];
  labels = [
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
  ];
  config0: any = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          data: this.events,
          fill: true,
          borderColor: 'rgb(75, 120, 192)',
          tension: 0.2,
        },
      ],
    },
  };

  async ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, this.config0);
  }
}
