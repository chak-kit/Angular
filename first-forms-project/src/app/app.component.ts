import {Component} from '@angular/core';
// import {CommentModel} from './commentModel';
// import {CommentsService} from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1 = 5;

  constructor() {
    setInterval(() => {
      if (this.num1 < 10) {
        return this.num1++;
      }
    }, 1000);
  }

  changeNumber() {
    this.num1 = 0;
  }

  // comments: CommentModel[] = [];
  //
  // constructor(private commentService: CommentsService) {
  //   this.commentService.getComments().subscribe((res) => {
  //     this.comments = res;
  //   });
  // }

}
