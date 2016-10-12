import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO APP';
  taskList : string[] = ["Task1","Task2","Task3"];
  newTask : string;
  edit : string;

  addTask() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

  dltTask(i) {
    this.taskList.splice(i,1); //i = index of task where dlt button was clicked
  }

  editTask(eTask, i) {
  
    // input field me load krwao = this.edit;
    // or phir jo b likh k add button dbae to us index  value replace krwado

    this.edit = prompt("Edit '" + eTask + "'");
    this.taskList.splice(i,1,this.edit); //dlt eTask and insert edit: the prompt value
  }
}
