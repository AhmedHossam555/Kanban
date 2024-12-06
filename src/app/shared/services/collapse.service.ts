import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {
  private _Plat = inject(PLATFORM_ID)
  isCollapse = new BehaviorSubject<boolean>(isPlatformBrowser(this._Plat)? JSON.parse(window.localStorage.getItem('collapse')|| 'false'): false);
  constructor() { 
  }
  onToggle(value:boolean){
    window.localStorage.setItem('collapse', JSON.stringify(value))
    this.isCollapse.next(value)
  }
}
