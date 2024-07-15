import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

import {
  callOutline,
  lockClosedOutline,
  mailOutline,
  personOutline,
} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
  IonInput,
  IonIcon,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
    IonInput,
    IonIcon,
    IonBackButton,
    IonButtons,
    RouterLink,
  ],
})
export class RegisterPage {
  constructor() {
    addIcons({
      personOutline,
      mailOutline,
      callOutline,
      lockClosedOutline,
    });
  }
}
