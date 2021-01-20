import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubhService {
  constructor(private http: HttpClient) {}

  getUser(userName: string) {
   return this.http.get(`https://api.github.com/users/${ userName }`);
  }

  getRepos(repoURL: string){
    return this.http.get(repoURL);
  }
}
