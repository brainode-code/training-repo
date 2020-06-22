import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss']
})
export class AddListItemComponent implements OnInit {
    

  @Output() emitNewTask  = new EventEmitter<string>(); 
  
  newTask : string; 

  constructor() { }

  ngOnInit(): void {
  }

  add( ) { 
      this.emitNewTask.emit(this.newTask);
      this.newTask = "";
  }
}
