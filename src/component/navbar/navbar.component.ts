import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo, faGear, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', 'navbar.media.component.scss', '../../styles.scss', '../../media-styles.scss']
})
export class NavbarComponent {

  faInfo = faInfo;
  faGear = faGear;
  faPlay = faPlay;

}
