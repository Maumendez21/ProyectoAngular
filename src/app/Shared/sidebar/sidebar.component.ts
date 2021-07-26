import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(toggleId, navbarId, bodyId) {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    body = document.getElementById(bodyId);

    if (toggle && navbar) {
        navbar.classList.toggle('expander');
        body.classList.toggle('body-pd');
    }

  }

  public linkCollapse = document.getElementsByClassName('collapse_menu')
  nextElementSibling: any

  colapse(){
    // for (let index = 0; index < this.linkCollapse.length; index++) {
    //   const collapseMenu = this.nextElementSibling
    //   collapseMenu.classList.toggle('showCollapse');
    // }
    // const linkCollapse


    const submenu = document.getElementById('subnav');
    submenu.classList.toggle('showCollapse');
    const icon = document.getElementById('icon');
    icon.classList.toggle('rotate');

  }





}
