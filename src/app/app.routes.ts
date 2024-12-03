import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',redirectTo:'dashboard',pathMatch:'full'},
    {path: 'dashboard', loadComponent: ()=> import('../app/components/layout/dashboard/dashboard.component').then((c)=> c.DashboardComponent),title: 'dashbord'},
    {path:'icons', loadComponent: ()=> import('../app/components/layout/icons/icons.component').then((c)=> c.IconsComponent),title: 'icons'},
    {path:'kanban',loadComponent: ()=> import('../app/components/layout/kanban/kanban.component').then((c)=> c.KanbanComponent),title:'kanban'}
];
