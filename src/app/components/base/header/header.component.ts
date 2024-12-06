import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CollapseService } from './../../../shared/services/collapse.service';
import { Component, Host, HostListener, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _Plat = inject(PLATFORM_ID);
  private _CollapseService = inject(CollapseService);
  widthScreen: WritableSignal<number> = signal(isPlatformBrowser(this._Plat)? window.innerWidth : 0);
  isShowToggle:WritableSignal<boolean> = signal(true);
  classToggle:WritableSignal<string | null> = signal(isPlatformBrowser(this._Plat)? window.localStorage.getItem('activeToggle'):'');
  
  @HostListener('window:resize') onResize(){
    this.widthScreen.set(window.innerWidth);
    if(this.widthScreen() < 992){
      this.isShowToggle.set(false);
    }else{
      this.isShowToggle.set(true)
    }
   
  }
   onToggle(event:Event){
    const toggleButton = event.currentTarget as HTMLElement;
    if(toggleButton.classList.contains('active')){
      this._CollapseService.onToggle(false);
      toggleButton.classList.remove('active');
      window.localStorage.removeItem('activeToggle');
    }else{
      this._CollapseService.onToggle(true);
      toggleButton.classList.add('active');
      window.localStorage.setItem('activeToggle','active')
    }
   }
   
   
}
