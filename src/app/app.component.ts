import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideBar:boolean=false;
  title = 'AngularGestionStock';
  onShowSideBarChanged(showSideBar){
  this.showSideBar=showSideBar;
  console.log("this.showSideBar",this.showSideBar)
  }
}
