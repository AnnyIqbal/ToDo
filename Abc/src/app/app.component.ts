import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO APP';

  taskList : string[] = ["A","B","C","D","E","F"];

  addTask(value) {
    this.taskList.push('hi');
  }

}
