import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(private auth: AuthService, navCtrl: NavController) {
    auth.setNavCtrl(navCtrl);
  }
}
