import { Component, OnInit } from '@angular/core';
import { Github } from '../github-class/github';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from '@angular/http';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  title = 'Github search';
  Person = 'https://api.github.com/users/'
  access = "?access_token=508db2cd8608292e114322ba6cd8d3461e611821"
  persons = [];


  constructor(private http: Http) { }
  searchUsers(search: HTMLInputElement) {
    let fullLink = this.Person + search.value;
    this.http.get(fullLink).subscribe((res: Response) => {
      this.persons = res.json();

    })
  }

  ngOnInit() {

  }

}
