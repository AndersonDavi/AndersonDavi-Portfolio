import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SkillToastComponent } from '../skill-toast/skill-toast.component';
import { Skill } from '../../interfaces/Skill';
interface workItem {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  demoLink?: string;
  sourceLink?: string;
  skills?: Skill[];
}

@Component({
  selector: 'app-works-gal',
  standalone: true,
  imports: [CommonModule, SkillToastComponent],
  templateUrl: './worksGal.component.html',
})
export class WorksGalComponent implements OnInit {
  public selectecWork: workItem | undefined;

  public worksList: workItem[] = [
    {
      id: 3,
      title: 'Plataforma de reclutamiento y selección',
      description:
        'Colaboración en proyecto ATS para publicación de ofertas de empleo, corrección de estilos y mejoras en diseño',
      image: 'assets/gal-img/ATSIMG.webp',
      logo: 'assets/logos/ATSLogo.png',
      demoLink: 'https://www.empleogrupologis.com/#/home',
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
          skill_name: 'Angular',
          skill_img: 'angular.webp',
        },
        {
          skill_name: 'TypeScript',
          skill_img: 'ts.webp',
        },
      ],
    },
    {
      id: 2,
      title: 'Ediciones Kaziyadu',
      description:
        'Web para publicar libros gratuitos diseñada para la editorial Ediciones kaziyadu',
      image: 'assets/gal-img/kaziyaduAppIMG.webp',
      logo: 'assets/logos/kaziyaduAppLogo.png',
      demoLink: 'https://kaziyadu.vercel.app',
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
          skill_name: 'Angular',
          skill_img: 'angular.webp',
        },
        {
          skill_name: 'TypeScript',
          skill_img: 'ts.webp',
        },
        {
          skill_name: 'Tailwind',
          skill_img: 'tailwind.webp',
        },
      ],
    },
    {
      id: 1,
      title: 'Gifs-App',
      description:
        'Proyecto personal como práctica de Angular, buscador de Gifs con historial y conexión a la API de Giphy',
      image: 'assets/gal-img/gifsAppIMG.webp',
      logo: 'assets/logos/gifsAppLogo.png',
      demoLink: 'https://andersondavi.github.io/GIFS-API/',
      sourceLink: 'https://github.com/AndersonDavi/GIFS-API',
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
          skill_name: 'Angular',
          skill_img: 'angular.webp',
        },
        {
          skill_name: 'TypeScript',
          skill_img: 'ts.webp',
        },
        {
          skill_name: 'Bootstrap',
          skill_img: 'bootstrap.webp',
        },
      ],
    },
  ];
  ngOnInit(): void {
    this.selectecWork = this.worksList[0];
  }
  public hoverItem(item: workItem) {
    this.selectecWork = item;
  }
}
