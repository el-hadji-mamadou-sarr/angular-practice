import { Component, OnInit } from '@angular/core';
import {MockTask} from "../mock-task";
import {Task} from "../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[]= [];
  constructor(private taskService:TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }

}
