import {Page} from 'ionic-angular';
import {PingPage} from '../ping/ping';
import {ProfilePage} from '../profile/profile';
import {Type} from '@angular/core';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  pingPage: Type = PingPage;
  profilePage: Type = ProfilePage;

  constructor() {}
}
