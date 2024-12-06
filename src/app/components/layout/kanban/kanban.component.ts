import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {
  Tasks: WritableSignal<string[]> = signal([
    'task1',
    'task2',
    'task3',
  ])
  taskSelected: WritableSignal<string> = signal(this.Tasks()[0]);
  onTask(event:Event){
    const button = event.currentTarget as HTMLElement;
    button.classList.toggle('active');
  }
  selectTask(task:string){
    this.taskSelected.set(task);
  }
 
  
}
