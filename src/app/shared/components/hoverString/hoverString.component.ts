import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-string',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hoverString.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverStringComponent {
  @Input()
  public text: string = '';

  @Input()
  public growSize: string = '8xl'; // Nuevo input para el tamaño de crecimiento

  public getCharacters(): string[] {
    return this.text.split('');
  }
}
