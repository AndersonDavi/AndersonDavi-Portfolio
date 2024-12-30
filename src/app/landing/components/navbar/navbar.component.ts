import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public showNavbar: boolean = false;
  public isMobile: boolean = window.innerWidth < 768;

  public toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.showNavbar = false;
    }
  }
}
