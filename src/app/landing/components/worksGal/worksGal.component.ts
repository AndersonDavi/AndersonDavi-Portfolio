import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ImagePipePipe } from './pipes/imagePipe.pipe';
interface workItem {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  demoLink: string;
  sourceLink: string;
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
      id: 1,
      title: 'Chromatic',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quos. Ipsa impedit et dignissimos aliquam nemo cum, quisquam, fuga doloribus deserunt blanditiis soluta provident possimus maxime exercitationem eaque. Nostrum architecto explicabo illo cum, accusamus atque, optio recusandae ab dolore magni aliquid, dignissimos nam repellat excepturi. Doloribus deserunt odit minima reiciendis animi nihil, qui consequatur totam, sequi repudiandae at deleniti tenetur',
      image: 'assets/gal-img/madmax.png',
      logo: 'assets/logos/madmax.svg',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
    {
      id: 2,
      title: 'Chromatic2',
      description: 'A color palette generator',
      image: 'assets/gal-img/madmax.png',
      logo: 'assets/logos/madmax.svg',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
    {
      id: 3,
      title: 'Chromatic3',
      description: 'A color palette generator',
      image: 'assets/gal-img/madmax.png',
      logo: 'assets/logos/madmax.svg',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
    {
      id: 4,
      title: 'Chromatic3',
      description: 'A color palette generator',
      image: 'assets/gal-img/madmax.png',
      logo: 'assets/logos/madmax.svg',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
  ];
  ngOnInit(): void {
    this.selectecWork = this.worksList[0];
  }
  public hoverItem(item: workItem) {
    this.selectecWork = item;
  }
}
