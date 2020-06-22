import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  arr = ["lista1", "lista2", "lista3"];
  @Output() public sendData: EventEmitter<number> = new EventEmitter();

  add (task) { 
    this.arr.push(task);
  }

  remove (task) { 
    let index = this.arr.indexOf(task);
    this.arr.splice(index,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

  public sendNumber() {
    this.sendData.emit(this.arr.length);
  }

}
