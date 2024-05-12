import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { ITask, createNewTask } from '../../models/ITarefa.model';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private tarefaService: TarefaService) {}
  
}
