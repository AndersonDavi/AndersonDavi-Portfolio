import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'ImagePipe',
  standalone: true,
})
export class ImagePipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `assets/logos${value}`;
  }
}
