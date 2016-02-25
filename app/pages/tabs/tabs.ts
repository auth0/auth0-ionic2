import {Page} from 'ionic-framework/ionic';
import {PingPage} from '../ping/ping';
import {ProfilePage} from '../profile/profile';
import {Type} from 'angular2/core';

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
