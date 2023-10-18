import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.tasks = [
      
    ];
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getImportantTasks(): Observable<Task[]> {
    const importantTasks = this.tasks.filter(task => task.important);
    return of(importantTasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}

export interface Task {
  title: string;
  completed: boolean;
  important: boolean;
}