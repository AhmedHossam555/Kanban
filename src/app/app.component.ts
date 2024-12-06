import { Component, HostListener, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideBarComponent } from "./components/base/left-side-bar/left-side-bar.component";
import { MainComponent } from "./components/base/main/main.component";
import { isPlatformBrowser } from '@angular/common';
import { CollapseService } from './shared/services/collapse.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSideBarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _CollapseService = inject(CollapseService)
  private _plat = inject(PLATFORM_ID);
  isLeftSideCollapse: WritableSignal<boolean> = signal(false);
  screenWidth: WritableSignal<number> = signal(isPlatformBrowser(this._plat)? window.innerWidth: 0);
  ngOnInit() {
  this.isLeftSideCollapse.set(this.screenWidth() < 992);
  this._CollapseService.isCollapse.subscribe({
    next: (res)=>{
      this.isLeftSideCollapse.set(res);
    }
  })
  }
  @HostListener('window:resize') onResize(){
    this.screenWidth.set(window.innerWidth);
    if(this.screenWidth() < 992){
      this.isLeftSideCollapse.set(true);
    }
  }
  collapseValue(isCollapse:boolean){
    this.isLeftSideCollapse.set(isCollapse)
  }
}
