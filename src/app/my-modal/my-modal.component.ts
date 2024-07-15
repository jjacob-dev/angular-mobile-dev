import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
  ModalController,
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FormsModule } from '@angular/forms';

import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
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
    IonButtons,
    IonButton,
    IonItem,
    IonInput,
    FormsModule,
  ],
})
export class MyModalComponent {
  name!: string;
  bsb!: string;
  account!: string;
  amount!: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
