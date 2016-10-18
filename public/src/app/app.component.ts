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
  index : number;
  editFlag : boolean = false;

  checker() : boolean { // chk for empty field and whitespace
    if(this.newTask && this.newTask !== ' ') { 
      return true;
    }
    else if(!this.newTask || this.newTask === ' ') {
      return false;
    }
  }

  addTask() {
      if(this.editFlag === true) { //edit Task
        this.taskList.splice(this.index ,1, this.newTask);
        this.editFlag = false;
        this.newTask = '';
      }
      else if (this.editFlag === false) { // add Task
        this.taskList.push(this.newTask);
        this.newTask = '';
      }
}
  dltTask(i) {
    this.taskList.splice(i,1); //i = index of task where dlt button was clicked
  }

  editTask(eTask, i) {
    this.editFlag = true;
    this.index = i;
    this.newTask = eTask; // loaded task in input field 
  }
}
