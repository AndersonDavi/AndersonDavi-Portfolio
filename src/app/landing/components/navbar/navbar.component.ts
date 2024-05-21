import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public showNavbar: boolean = false;
  public toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }
}
