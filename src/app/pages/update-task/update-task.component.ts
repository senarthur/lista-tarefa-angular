import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask, createNewTask } from '../../models/ITarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent implements OnInit {

  task: ITask = createNewTask();

  updateForm !: FormGroup;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.task = this.tarefaService.getTask(id);

    this.updateForm = this.formBuilder.group({
      title: [this.task.title, [Validators.required]],
      type: [this.task.type, [Validators.required]]
    })
  }

  updateTask() {
    if(!this.updateForm.valid) return;
    
    this.task.title = this.updateForm.value.title;
    this.task.type = this.updateForm.value.type;

    this.tarefaService.updateTask(this.task);
    this.router.navigateByUrl('/home');
  }
}
