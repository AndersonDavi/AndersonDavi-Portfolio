import { Component } from '@angular/core';
import { ThreeComponent } from './three/three.component';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import { SkillsComponent } from './landing/components/skills/skills.component';
import { ExperienceComponent } from './landing/components/experience/experience.component';
import { WorksGalComponent } from './landing/components/worksGal/worksGal.component';
import { HoverStringComponent } from './shared/components/hoverString/hoverString.component';
import { FooterComponent } from './landing/components/footer/footer.component';
import { ContactFormComponent } from "./landing/components/contact-form/contact-form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    ThreeComponent,
    NavbarComponent,
    SkillsComponent,
    ExperienceComponent,
    WorksGalComponent,
    HoverStringComponent,
    FooterComponent,
    ContactFormComponent
],
})
export class AppComponent {
  title = 'AndersonDavi';
}
