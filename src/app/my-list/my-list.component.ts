import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  arr = ["lista1", "lista2", "lista3"];
  @Output() public sendData: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendNumber() {
    this.sendData.emit(this.arr.length);
  }

  addElement() {
    this.arr.push('lista' + (this.arr.length + 1))
  }

  removeItem(item) {
    const index: number = this.arr.indexOf(item);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

}
