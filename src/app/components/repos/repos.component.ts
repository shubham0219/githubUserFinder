import { GithubhService } from './../../services/githubh.service';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  @Input() repoUrl: string;
  repos = [];
  constructor(private Github: GithubhService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.repoUrl) {
      this.Github.getRepos(this.repoUrl).subscribe(
        (repo: []) => {
          this.repos = repo;
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
