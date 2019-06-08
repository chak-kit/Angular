import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formObject = {
    name: '',
    age: '',
    gender: '',
    js: '',
    c1: '',
    java: '',
    status: ''
  };

  showForm() {
    console.log(this.formObject);
  }
}
