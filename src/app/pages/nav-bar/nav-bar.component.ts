import { Component } from '@angular/core';
import { Constants } from '../../shared/constant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public navLinks: any[];
  public isLoading = true;
  public activeLinkIndex = -1;

  constructor() {
    this.navLinks = Constants.navLinks;
  }

}
