import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {provide} from '@angular/core';
import {Http} from '@angular/http'
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './services/auth/auth';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from '@angular/core';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/,
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({noJwtError: true}), http);
      },
      deps: [Http]
    }),
    AuthService
  ]
})
export class MyApp {
  rootPage: Type = TabsPage;

  constructor(platform: Platform, private authHttp: AuthHttp, private auth: AuthService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      
      // When the app starts up, there might be a valid
      // token in local storage. If there is, we should
      // schedule an initial token refresh for when the
      // token expires
      this.auth.startupTokenRefresh();
    });
  }
}
