import { GithubhService } from './../../services/githubh.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  Error = null;

  constructor(private Github: GithubhService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  handleFindUser() {
    this.Github.getUser(this.userName).subscribe((user) => {
      this.user = user;
      this.Error = null;
      this.ref.detectChanges();
    },
    (err)=>{
      this.user = null;
      this.Error = "User not found."
      this.ref.detectChanges();
    }
    );
  }
}
