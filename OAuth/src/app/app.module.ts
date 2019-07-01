import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleLoginProvider } from "angular-6-social-login";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService, AuthServiceConfig, SocialLoginModule } from 'angular-6-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('637144188119-h4af4r15vcce1tm669iu2lik4b618sv2.apps.googleusercontent.com')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
