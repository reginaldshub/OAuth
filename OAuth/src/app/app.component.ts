import { Component } from '@angular/core';
import { AuthService} from 'angular-6-social-login';
import { SocialUser } from 'angular-6-social-login';
import { GoogleLoginProvider } from 'angular-6-social-login';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OAuth';

  User_Name: String = '';
  Password: String = "";
  public store;
  user = new SocialUser();
  constructor(private socialAuthService: AuthService, private service: ServiceService) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        this.store = userData;
        const data1 = { "User_Name": userData.email };
        sessionStorage.setItem("User", userData.email);
        sessionStorage.setItem("Userurl", userData.image);
        sessionStorage.setItem("Username", userData.name);
        localStorage.setItem("isLoggedIn",userData.email);
        localStorage.setItem('isLogin', 'true');
        this.service.UserLogin(data1);
        // .subscribe((response: any) => {
        //   console.log(response);
        //   if (response === 'Success') {
        //     localStorage.setItem('isLogin', 'true');
        //     localStorage.setItem('isLoggedIn', userData.email);
        //   }
        //   else {
        //     alert("Not Applicable");
        //   }

        // })
      });
  } 
  
}
