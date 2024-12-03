import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isLeftSideCollapse = input.required<boolean>();
  screenWidth = input.required<number>();
  screenClass = computed(()=>{
    const isLeftCollapse = this.isLeftSideCollapse();
    if(isLeftCollapse){
      return '';
    }
    return this.screenWidth() > 992 ? 'body-trimmed' : 'body-md-screen';
  })

}
