import { Component, inject } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option.interface'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {

  // Els serveis No s'importen com a component, 
  // sinó que s'injecten com a dependències.:
  gifsService = inject(GifsService);

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
