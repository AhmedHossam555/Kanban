import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {
  isSideCollapse = input.required<boolean>();
  changeCollapse =  output<boolean>();
  items = [
    {
      label: 'dasboard',
      icon: 'fa-solid fa-house',
      routerLink: 'dashboard'
    },
    {
      label: 'icons',
      icon: 'fa-solid fa-icons',
      routerLink: 'icons'
    },
    {
      label: 'kanban',
      icon: 'fa-solid fa-folder',
      routerLink: 'kanban'
    },
  ]
  toggleCollapse(){
    this.changeCollapse.emit(!this.isSideCollapse());
  }
  closeCollapse(){
    this.changeCollapse.emit(true);
  }
}
