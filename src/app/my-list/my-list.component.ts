import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  arr = ["lista1", "lista2", "lista3"];
  removedArr = [];
  counter = 4;
  @Output() public sendData: EventEmitter<number> = new EventEmitter();
  @Output() public sendRemovedData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendNumber() {
    this.sendData.emit(this.arr.length);
  }

  addElement() {
    this.arr.push('lista' + (this.counter++))
  }

  removeItem(item) {
    const index: number = this.arr.indexOf(item);
    if (index !== -1) {
      this.arr.splice(index, 1);
      this.removedArr.push(item);
      this.sendRemovedData.emit(this.removedArr);
    }
  }

}
