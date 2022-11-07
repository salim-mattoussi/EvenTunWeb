import { Component, HostListener, Input, OnInit } from '@angular/core';
import { datareclamation } from '../sidebar/nav-data';
import { notifications, userItem } from './header-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth =0;

  canShowSearhAsOverlay = false;

  notification = notifications;
  userItem = userItem;
  datarec = datareclamation;
  constructor() { }

  @HostListener('window:resize',['$event'])
  onResize(event: any) {
    this.checkCanShowSearhAsOverlay(window.innerWidth);

  }

  ngOnInit(): void {
    this.checkCanShowSearhAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
     let styleClass ='';
     if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
     }else {
      styleClass='head-md-screen';
     }
     return styleClass;
  }

  checkCanShowSearhAsOverlay (innerWidth: number) : void{
    if(innerWidth < 845){
      this.canShowSearhAsOverlay = true;
    }else {
      this.canShowSearhAsOverlay = false;
    }
  }

}
