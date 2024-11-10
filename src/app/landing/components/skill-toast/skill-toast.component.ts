import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-toast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skill-toast.component.html',
  styleUrl: './skill-toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillToastComponent {
  @Input()
  name: string = ""; 
  @Input()
  img: string = "";
  
  
 }
