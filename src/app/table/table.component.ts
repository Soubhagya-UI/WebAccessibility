import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  posts = [];

  constructor() { 
    
  }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>this.posts=data)
    .catch((err)=>console.log(err))
  }


}
