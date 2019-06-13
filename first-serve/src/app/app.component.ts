import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objects = [{
    name: 'Ira',
    age: 26,
    gender: 'Female'
  },
    {
      name: 'Taras',
      age: 34,
      gender: 'Male'
    }];

  deleteObject(ob) {
    const index = this.objects.indexOf(ob);
    this.objects.splice(index, 1);
  }
}
