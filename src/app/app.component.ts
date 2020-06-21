import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public itemsList: Array<string>;
  public error = false;

  constructor() {
    this.itemsList = [];
  }

  public addItem(value: NgForm): void {
    console.log(value.value.item !== "")
    if (value.value.item !== "") {
      const item = this.toUpperCase(value.value.item);
      this.itemsList.push(item);
      this.error = false;
      value.reset();
    } else {
      this.error = true;
    }
  }

  public removeItem(removeItem: string) {
    this.itemsList = this.itemsList.filter(item => item !== removeItem)
  }

  private toUpperCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
