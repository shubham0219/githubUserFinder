import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-login-firebase';

  constructor(private auth: AuthService){

    auth.getUser().subscribe((user)=>{
      console.log(user);
    },
    (error)=>{
      console.log(error);
    })
  }
}
