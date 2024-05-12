import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TarefaService } from '../../services/tarefa.service';
import { ITask, createNewTask } from '../../models/ITarefa.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {

  task: ITask = createNewTask();
  
  addTaskForm !: FormGroup;
  
  constructor(
    private tarefaService: TarefaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['Pessoal']
    })
  }

  addTask() {
    if (!this.addTaskForm.valid) return;
    
    this.task.title = this.addTaskForm.value.title.toUpperCase();
    this.task.type = this.addTaskForm.value.type;
    
    this.tarefaService.addTask(this.task);
    this.router.navigateByUrl('/home');
  }
}
