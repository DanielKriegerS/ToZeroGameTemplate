import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo, faGear, faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '../../models/NavLinkt';
import { RouterModule } from '@angular/router';
import { NgClass, NgForOf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, NgForOf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', 'navbar.media.component.scss', '../../styles.scss', '../../media-styles.scss']
})

export class NavbarComponent {

  faInfo = faInfo;
  faGear = faGear;
  faPlay = faPlay;

  links: NavLink[] = [
    { path: './index.html', label: 'jogar', icon: this.faPlay },
    { path: './pages/info-page.html', label: 'como jogar', icon: this.faInfo },
    { path: './pages/config-page.html', label: 'configurações', icon: this.faGear }
  ];

}
