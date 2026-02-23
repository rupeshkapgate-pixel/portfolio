import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
{ path: '', component: HeroComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'career', component: TimelineComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', redirectTo: '' }
];
