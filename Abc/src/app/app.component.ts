import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO APP';
  newTask: string;

  taskList : string[] = ["A","B","C"];

  addTask() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

}
