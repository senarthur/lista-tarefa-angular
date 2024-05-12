import { Component, Input } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { ITask } from '../../models/ITarefa.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() task!: ITask;

  constructor(
    private tarefaService: TarefaService
  ){}

  deleteTask() {
    this.tarefaService.deleteTask(this.task.id);
  }

}
