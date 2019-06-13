import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()objInput;
  @Output()deleteMe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitDelete() {
    this.deleteMe.emit(this.objInput);
  }
}
