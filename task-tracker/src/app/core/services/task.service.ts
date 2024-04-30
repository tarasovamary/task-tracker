import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockTasks } from 'src/app/mock/data';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<ITask[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasksSubject.next(JSON.parse(storedTasks));
    } else {
      this.loadMockTasks();
    }
  }

  private saveTasksToLocalStorage(tasks: ITask[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private loadMockTasks(): void {
    this.tasksSubject.next(mockTasks);
    this.saveTasksToLocalStorage(mockTasks);
  }

  getAllTasks(): ITask[] {
    return this.tasksSubject.value;
  }

  addTask(task: ITask): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = [...currentTasks, task];
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }

  updateTask(updatedTask: ITask): void {
    const currentTasks = this.tasksSubject.value;
    const index = currentTasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      const updatedTasks = [...currentTasks];
      updatedTasks[index] = updatedTask;
      this.tasksSubject.next(updatedTasks);
      this.saveTasksToLocalStorage(updatedTasks);
    }
  }

  updateTaskStatus(taskId: string, newStatus: string): void {
    const currentTasks = this.tasksSubject.value;

    const updatedTasks = currentTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    //@ts-ignore
    this.tasksSubject.next(updatedTasks);
    //@ts-ignore
    this.saveTasksToLocalStorage(updatedTasks);
  }

  deleteTaskById(id: string): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }
}
