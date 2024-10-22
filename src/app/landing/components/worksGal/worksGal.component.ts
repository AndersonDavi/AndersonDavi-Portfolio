import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ImagePipePipe } from './pipes/imagePipe.pipe';
interface workItem {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  demoLink?: string;
  sourceLink?: string;
}

@Component({
  selector: 'app-works-gal',
  standalone: true,
  imports: [CommonModule, ImagePipePipe],
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
      image: 'assets/gal-img/ATSIMG.png',
      logo: 'assets/logos/ATSLogo.png',
      demoLink: 'https://www.empleogrupologis.com/#/home',
    },
    {
      id: 2,
      title: 'Ediciones Kaziyadu',
      description:
        'Web para publicar libros gratuitos diseñada para la editorial Ediciones kaziyadu',
      image: 'assets/gal-img/kaziyaduAppIMG.jpg',
      logo: 'assets/logos/kaziyaduAppLogo.png',
      demoLink: 'https://kaziyadu.vercel.app',
    },
    {
      id: 1,
      title: 'Gifs-App',
      description:
        'Proyecto personal como práctica de Angular, buscador de Gifs con historial y conexión a la API de Giphy',
      image: 'assets/gal-img/gifsAppIMG.png',
      logo: 'assets/logos/gifsAppLogo.png',
      demoLink: 'https://andersondavi.github.io/GIFS-API/',
      sourceLink: 'https://github.com/AndersonDavi/GIFS-API',
    },
  ];
  ngOnInit(): void {
    this.selectecWork = this.worksList[0];
  }
  public hoverItem(item: workItem) {
    this.selectecWork = item;
  }
}
