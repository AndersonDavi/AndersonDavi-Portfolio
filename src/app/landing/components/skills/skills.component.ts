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
      img: 'assets/html.png',
      categoria: 'Front-end',
    },
    {
      name: 'CSS',
      img: 'assets/css.png',
      categoria: 'Front-end',
    },
    {
      name: 'JavaScript',
      img: 'assets/js.png',
      categoria: 'Front-end',
    },
    {
      name: 'TypeScript',
      img: 'assets/ts.png',
      categoria: 'Front-end',
    },
    {
      name: 'Angular',
      img: 'assets/angular.webp',
      categoria: 'Front-end',
    },
    {
      name: 'Bootstrap',
      img: 'assets/bootstrap.png',
      categoria: 'Front-end',
    },
    // {
    //   name: 'Tailwind',
    //   img: 'assets/tailwind.png',
    //   categoria: 'Front-end',
    // },
    {
      name: 'Java',
      img: 'assets/java.png',
      categoria: 'Back-end',
    },
    {
      name: 'Spring',
      img: 'assets/spring.png',
      categoria: 'Back-end',
    },
    {
      name: 'Python',
      img: 'assets/python.png',
      categoria: 'Back-end',
    },
    {
      name: 'SQL Server',
      img: 'assets/SQLserver.webp',
      categoria: 'Back-end',
    },
    {
      name: 'MySQL',
      img: 'assets/mysql.png',
      categoria: 'Back-end',
    },
    {
      name: 'Git',
      img: 'assets/git.png',
      categoria: 'Herramientas',
    },
    {
      name: 'GitHub',
      img: 'assets/github.svg',
      categoria: 'Herramientas',
    },
    {
      name: 'Postman',
      img: 'assets/post.png',
      categoria: 'Herramientas',
    },
    {
      name: 'Figma',
      img: 'assets/figma.webp',
      categoria: 'Herramientas',
    },
    {
      name: 'Photoshop',
      img: 'assets/ps.png',
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
}
