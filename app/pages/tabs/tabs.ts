import {Component} from '@angular/core'
import {PingPage} from '../ping/ping';
import {ProfilePage} from '../profile/profile';
import {AuthService} from '../../services/auth/auth';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor(private auth: AuthService) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = PingPage;
    this.tab2Root = ProfilePage;
  }
}