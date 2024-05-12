import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { ITask } from '../../models/ITarefa.model';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tasks: ITask[] = [];
  filteredTasks: ITask[] = [];

  constructor(private tarefaService: TarefaService) {}
  
  ngOnInit(): void {
    this.tarefaService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    })
  }

  searchTask(event: any) {
    const value = event.target.value.toUpperCase();
    if(value === '') this.filteredTasks = this.tasks;

    this.filteredTasks = this.tasks.filter(task => task.title.includes(value) );
  }
}
