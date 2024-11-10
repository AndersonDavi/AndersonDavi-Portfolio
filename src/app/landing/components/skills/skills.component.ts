import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
interface skillItem {
  name: string;
  img: string;
  categoria: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SkillsComponent implements OnInit {
  public skillOptions: string[] = ['Front-end', 'Back-end', 'Herramientas'];
  public lastHoverOption: string = 'Front-end';
  public skillItemsToShow: skillItem[] = [];
  public skillItems: skillItem[] = [
    {
      name: 'HTML',
      img: 'html.webp',
      categoria: 'Front-end',
    },
    {
      name: 'CSS',
      img: 'css.webp',
      categoria: 'Front-end',
    },
    {
      name: 'JavaScript',
      img: 'js.webp',
      categoria: 'Front-end',
    },
    {
      name: 'TypeScript',
      img: 'ts.webp',
      categoria: 'Front-end',
    },
    {
      name: 'Angular',
      img: 'angular.webp',
      categoria: 'Front-end',
    },
    {
      name: 'Bootstrap',
      img: 'bootstrap.webp',
      categoria: 'Front-end',
    },
    {
      name: 'Tailwind',
      img: 'tailwind.webp',
      categoria: 'Front-end',
    },
    // {
    //   name: 'Java',
    //   img: 'java.webp',
    //   categoria: 'Back-end',
    // },
    // {
    //   name: 'Spring',
    //   img: 'spring.webp',
    //   categoria: 'Back-end',
    // },
    // {
    //   name: 'Python',
    //   img: 'python.webp',
    //   categoria: 'Back-end',
    // },
    {
      name: 'SQL Server',
      img: 'SQLserver.webp',
      categoria: 'Back-end',
    },
    {
      name: 'MySQL',
      img: 'mysql.webp',
      categoria: 'Back-end',
    },
    {
      name: 'Git',
      img: 'git.webp',
      categoria: 'Herramientas',
    },
    {
      name: 'GitHub',
      img: 'github.svg',
      categoria: 'Herramientas',
    },
    {
      name: 'Postman',
      img: 'post.webp',
      categoria: 'Herramientas',
    },
    {
      name: 'Figma',
      img: 'figma.webp',
      categoria: 'Herramientas',
    },
    {
      name: 'Photoshop',
      img: 'ps.webp',
      categoria: 'Herramientas',
    },
    
  ];
  ngOnInit(): void {
    this.skillItemsToShow = this.skillItems.filter((item) => {
      return item.categoria === this.lastHoverOption;
    });
  }
  hoverOption(data: string) {
    this.lastHoverOption = data;
    this.skillItemsToShow = this.skillItems.filter((item) => {
      return item.categoria === data;
    });
  }
  trackByFn(index: number, item: any): any {
    return item.name; 
  }
}
