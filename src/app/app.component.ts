import { Component } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ThreeComponent],
})
export class AppComponent {
  title = 'AndersonDavi';
}
