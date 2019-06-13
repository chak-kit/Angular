import {Component} from '@angular/core';
import {PostService} from "./services/post.service";
import {TodoService} from "./services/todo.service";
import {Todo} from "./models/todo";
import {Post} from "./models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments1: Post[] = [];
  comments2: Todo[] = [];

  constructor(
    public postService: PostService,
    public todoService: TodoService,
  ) {
    this.postService.getPosts().subscribe((res) => {
      this.comments1 = res;
      console.log(res);
    });
    this.todoService.getTodos().subscribe((res) => {
      this.comments2 = res;
      console.log(res);
    })
  }
}
