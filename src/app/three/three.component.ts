import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ThreeService } from './services/three.service';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
})
export class ThreeComponent implements AfterViewInit {
  @ViewChild('renderCanvas', { static: true })
  renderCanvas!: ElementRef<HTMLCanvasElement>;
  public engineService = inject(ThreeService);
  ngAfterViewInit(): void {
    this.engineService.createScene(this.renderCanvas);
    this.engineService.animate();
  }
}
