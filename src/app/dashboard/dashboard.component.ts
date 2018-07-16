import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Todo List Item';
  TaskList = ['admin'];
  task='';
  constructor() { 
  }

  ngOnInit() {
  }
  addTask(){
    if(this.task!=''){
      this.TaskList.push(this.task);
      this.task=''
    }
  }
  removeTask(index){
    this.TaskList.splice(index,1);

  }
}
