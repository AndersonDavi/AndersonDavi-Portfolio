import { Component } from '@angular/core';
import { ThreeComponent } from './three/three.component';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import { SkillsComponent } from './landing/components/skills/skills.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ThreeComponent, NavbarComponent, SkillsComponent],
})
export class AppComponent {
  title = 'AndersonDavi';
}
