import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  activeTab: string = 'movies';

  setActive(tab: string) {
    this.activeTab = tab;
  }
  
}
