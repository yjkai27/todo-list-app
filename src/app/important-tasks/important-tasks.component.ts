import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-important-tasks',
  templateUrl: './important-tasks.component.html',
  styleUrls: ['./important-tasks.component.css']
})
export class ImportantTasksComponent implements OnInit {
  importantTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getImportantTasks();
  }

  getImportantTasks(): void {
    this.taskService.getImportantTasks().subscribe(tasks => {
      this.importantTasks = tasks;
    });
  }
}