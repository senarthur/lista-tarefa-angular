import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { ITask, createNewTask } from '../../models/ITarefa.model';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent implements OnInit {

  task: ITask = createNewTask();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    
    this.task = this.tarefaService.getTask(id);
  }
}
