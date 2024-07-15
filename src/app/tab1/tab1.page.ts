import { Component } from '@angular/core';
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
  ModalController,
} from '@ionic/angular/standalone';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CommonModule } from '@angular/common';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { FormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';

import {
  gridOutline,
  downloadOutline,
  trendingDownOutline,
  trendingUpOutline,
  notificationsOutline,
} from 'ionicons/icons';

import { RouterLink } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponentModule,
    CommonModule,
    IonImg,
    IonIcon,
    IonLabel,
    IonTabButton,
    IonSearchbar,
    RouterLink,
    IonButton,
    TransactionComponent,
    MyModalComponent,
    FormsModule,
  ],
})
export class Tab1Page {
  constructor(private modalCtrl: ModalController) {
    addIcons({
      gridOutline,
      downloadOutline,
      trendingDownOutline,
      trendingUpOutline,
      notificationsOutline,
    });
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
