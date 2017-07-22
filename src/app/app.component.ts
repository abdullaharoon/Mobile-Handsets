import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a> 
      <a routerLink="/userList" routerLinkActive="active">Handsets</a>
	   <a routerLink="/addList" routerLinkActive="active">Add</a>
      <a routerLink="/phoneList/:id" routerLinkActive="active">Search</a>
      
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MOBILE HANDSETS';
}
