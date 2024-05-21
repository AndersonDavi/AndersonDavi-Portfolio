import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
interface experienceItem {
  title: string;
  description?: string;
  periodo: string;
  img: string;
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  public experienceList: experienceItem[] = [
    {
      title: 'Tecnico análisis y desarrollo de software',
      periodo: 'SENA - 2021 ene  / 2022 dic',
      img: 'assets/icon1.png',
    },
    {
      title: 'Desarrollador',
      periodo: 'SENA - 2022 ene - jun',
      img: 'assets/icon2.png',
      description:
        'Diseño de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de progrmación',
    },
    {
      title: 'Analista TI',
      periodo: 'Grupo Logis - 2022 ago / Actualidad',
      img: 'assets/icon2.png',
      description:
        'Automatizaciòn de procesos con Power Platform, diseño de interfaces, administraciòn de bases de datos SQL SERVER ',
    },
  ];
}
