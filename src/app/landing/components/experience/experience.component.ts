import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skill } from '../../interfaces/Skill';
import { SkillToastComponent } from '../skill-toast/skill-toast.component';
interface experienceItem {
  title: string;
  description?: string;
  periodo: string;
  img: string;
  skills?: Skill[];
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SkillToastComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  public experienceList: experienceItem[] = [
    {
      title: 'Tecnico análisis y desarrollo de software',
      periodo: 'SENA - 2021 ene  / 2022 ene',
      img: 'assets/icon1.png',
      skills: [
        {
          skill_name: 'HTML',
          skill_img: 'html.webp',
        },
        {
          skill_name: 'CSS',
          skill_img: 'css.webp',
        },
        {
          skill_name: 'JS',
          skill_img: 'js.webp',
        },
      ],
    },
    {
      title: 'Desarrollador',
      periodo: 'SENA - 2022 ene / 2022 jun',
      img: 'assets/icon2.png',
      description:
        'Diseño de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de progrmación',
      skills: [
        {
          skill_name: 'HTML',
          skill_img: 'html.webp',
        },
        {
          skill_name: 'CSS',
          skill_img: 'css.webp',
        },
        {
          skill_name: 'JS',
          skill_img: 'js.webp',
        },
        {
          skill_name: 'Git',
          skill_img: 'git.webp',
        },
        {
          skill_name: 'GitHub',
          skill_img: 'github.svg',
        },
        {
          skill_name: 'Figma',
          skill_img: 'figma.webp',
        },
        {
          skill_name: 'Photoshop',
          skill_img: 'ps.webp',
        },
        {
          skill_name: 'Bootstrap',
          skill_img: 'bootstrap.webp',
        },
      ],
    },
    {
      title: 'Analista TI',
      periodo: 'Grupo Logis - 2022 ago / Actualidad',
      img: 'assets/icon2.png',
      description:
        'Automatizaciòn de procesos con Power Platform, diseño de interfaces, administraciòn de bases de datos SQL SERVER ',
      skills: [
        {
          skill_name: 'HTML',
          skill_img: 'html.webp',
        },
        {
          skill_name: 'CSS',
          skill_img: 'css.webp',
        },
        {
          skill_name: 'JS',
          skill_img: 'js.webp',
        },
        {
          skill_name: 'TypeScript',
          skill_img: 'ts.webp',
        },
        {
          skill_name: 'Angular',
          skill_img: 'angular.webp',
        },
        {
          skill_name: 'Tailwind',
          skill_img: 'tailwind.webp',
        },
        {
          skill_name: 'Git',
          skill_img: 'git.webp',
        },
        {
          skill_name: 'GitHub',
          skill_img: 'github.svg',
        },
        {
          skill_name: 'Figma',
          skill_img: 'figma.webp',
        },
        {
          skill_name: 'Photoshop',
          skill_img: 'ps.webp',
        },
        {
          skill_name: 'Postman',
          skill_img: 'post.webp',
        },
        {
          skill_name: 'SQL Server',
          skill_img: 'SQLserver.webp',
        },
      ],
    },
    {
      title: 'Tecnólogo análisis y desarrollo de software',
      periodo: 'SENA - 2022 oct / Actualidad',
      img: 'assets/icon1.png',
      skills: [
        {
          skill_name: 'HTML',
          skill_img: 'html.webp',
        },
        {
          skill_name: 'CSS',
          skill_img: 'css.webp',
        },
        {
          skill_name: 'JS',
          skill_img: 'js.webp',
        },
        {
          skill_name: 'TypeScript',
          skill_img: 'ts.webp',
        },
        {
          skill_name: 'Angular',
          skill_img: 'angular.webp',
        },
        {
          skill_name: 'Tailwind',
          skill_img: 'tailwind.webp',
        },
        {
          skill_name: 'Git',
          skill_img: 'git.webp',
        },
        {
          skill_name: 'GitHub',
          skill_img: 'github.svg',
        },
        {
          skill_name: 'Figma',
          skill_img: 'figma.webp',
        },
        {
          skill_name: 'Photoshop',
          skill_img: 'ps.webp',
        },
        {
          skill_name: 'Postman',
          skill_img: 'post.webp',
        },
        {
          skill_name: 'SQL Server',
          skill_img: 'SQLserver.webp',
        },
        {
          skill_name: 'MySQL',
          skill_img: 'mysql.webp',
        },
      ],
    },
  ];
}
