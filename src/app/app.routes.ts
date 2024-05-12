import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'add-task',
        component: AddTaskComponent
    }
];
