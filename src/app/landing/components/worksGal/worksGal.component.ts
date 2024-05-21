import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
interface workItem {
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
  imports: [CommonModule],
  templateUrl: './worksGal.component.html',
  styleUrl: './worksGal.component.css',
})
export class WorksGalComponent implements OnInit {
  public selectecWork: workItem | undefined;

  public worksList: workItem[] = [
    {
      title: 'Chromatic',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quos. Ipsa impedit et dignissimos aliquam nemo cum, quisquam, fuga doloribus deserunt blanditiis soluta provident possimus maxime exercitationem eaque. Nostrum architecto explicabo illo cum, accusamus atque, optio recusandae ab dolore magni aliquid, dignissimos nam repellat excepturi. Doloribus deserunt odit minima reiciendis animi nihil, qui consequatur totam, sequi repudiandae at deleniti tenetur',
      image: 'assets/gal-img/madmax.png',
      logo: 'assets/logos/madmax.svg',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
    {
      title: 'Chromatic2',
      description: 'A color palette generator',
      image: 'chromatic.png',
      logo: 'chromatic.png',
      demoLink: 'https://chromatic-9f8f9.web.app/',
      sourceLink: 'https://github.com/alexandru-georgescu/chromatic',
    },
    {
      title: 'Chromatic3',
      description: 'A color palette generator',
      image: 'chromatic.png',
      logo: 'chromatic.png',
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
