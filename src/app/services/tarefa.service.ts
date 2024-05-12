import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask, createNewTask } from '../models/ITarefa.model';

type TYPES = ['Pessoal', 'Corporativo', 'Estudantil'];

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private taskSubject: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([
    {
      id: 'JHLP1cfe',
      title: 'Fazer dever de casa',
      type: 'Estudantil',
      complete: false,
    },
    {
      id: 'LB12pntw',
      title: 'Terminar o código de lista de tarefas',
      type: 'Corporativo',
      complete: false,
    }
  ]);
  private task$: Observable<ITask[]> = this.taskSubject.asObservable();

  constructor() { }

  getTasks(): Observable<ITask[]> {
    return this.task$;
  }

  addTask(task: ITask) {
    const id = Date.now().toString(16);
    task.id = id;

    this.taskSubject.next([ ...this.taskSubject.value, task ]);
  }

  markTaskAsComplete(id: string) {
    const task = this.taskSubject.value.find(task => task.id === id);

    if(task) {
      task.complete = true;
    } else {
      throw Error('Não foi possível encontrar a tarefa');
    } 
  }

  deleteTask(id: string): ITask {
    const taskIndex = this.taskSubject.value.findIndex(task => task.id === id);
    
    if (taskIndex == -1) throw Error('Não foi possível encontrar a tarefa');

    const task = this.taskSubject.value[taskIndex];
    this.taskSubject.value.splice(taskIndex, 1);

    return task;
  }

  updateTask(task: ITask) {
    const taskIndex = this.taskSubject.value.findIndex(singleTask => singleTask.id === task.id);
    
    if (taskIndex == -1) throw Error('Não foi possível encontrar a tarefa');

    this.taskSubject.value[taskIndex] = task;
  }
}
