import { Component } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option.interface'; 
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
  public menuOptions: MenuOption[] = [
    {
      label: 'Tendències',  
      subLabel: 'Els gifs més populars',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Cerca',  
      subLabel: 'Cerca els teus gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
