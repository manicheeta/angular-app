import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments = null;

  // 1) first injecting HttpClient service in to constructor
  // 2)  overwriding posts variable value with httpClient function response
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response => {
        this.comments = response;
      });
  }
}
