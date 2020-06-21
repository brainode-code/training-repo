import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {

  arr = ["lista1", "lista2", "lista3", "lista4"];


  @Output() public sendData: EventEmitter<number> = new EventEmitter();
  @Output() public sendRemovedData: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public sendNumber() {
    this.sendData.emit(this.arr.length);
  }

  addItem() {
    this.arr.push(`lista${this.arr.length + 1}`)
  }

  remove(i) {
    this.sendRemovedData.emit(this.arr[i]);
    console.log(this.arr[i])
    this.arr.splice(i, 1);

  }

}
