import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 showSideBar:boolean=false;
 @Output() showSidebarChanged:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  displaySideBar(){
   this.showSideBar=!this.showSideBar;
   this.showSidebarChanged.emit(this.showSideBar);
   console.log("this.showSideBar",this.showSideBar)
  }
}
