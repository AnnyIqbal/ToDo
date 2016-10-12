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
    //document.write(i);
    this.taskList.splice(i,1);
  }

  editTask(eTask) {
  
    // input field me load krwao = this.edit;
    // or phir jo b likh k add button dbae to us index  value replace krwado

    this.edit.anchor = eTask;
  }
}
