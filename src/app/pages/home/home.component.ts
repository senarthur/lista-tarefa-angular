import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { ITask, createNewTask } from '../../models/ITarefa.model';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tasks: ITask[] = [];
  
  constructor(private tarefaService: TarefaService) {}
  
  ngOnInit(): void {
    this.tarefaService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }
}
