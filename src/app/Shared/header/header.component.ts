import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)

    // Validate that variables exist
    if(headerToggle && navbarId){

          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')

    }
  }

}
