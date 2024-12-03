import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideBarComponent } from "./components/base/left-side-bar/left-side-bar.component";
import { MainComponent } from "./components/base/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSideBarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLeftSideCollapse: WritableSignal<boolean> = signal(false);
  title = 'kanban';
  collapseValue(isCollapse:boolean){
    this.isLeftSideCollapse.set(isCollapse)
  }
}
