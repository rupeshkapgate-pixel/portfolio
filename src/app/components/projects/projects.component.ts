// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
selector: 'app-projects',
standalone: true,
imports: [CommonModule],
template: `
<section data-aos="fade-up" class="py-20 bg-gray-50">
<h2 class="text-4xl font-bold text-center mb-12">Key Projects & Achievements</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
<div *ngFor="let proj of projects; let i = index"
class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
[attr.data-aos]="'flip-left'" [attr.data-aos-delay]="i*100">
<h3 class="text-2xl font-bold mb-4">{{proj.title}}</h3>
<p class="text-gray-600 mb-4">{{proj.description}}</p>
<span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{{proj.tech}}</span>
</div>
</div>
</section>
`
})
export class ProjectsComponent {
projects = [
{ title: 'Data Marketplace Hub', description: 'Architected full-stack platform with Angular/Java microservices on OpenShift.', tech: 'Angular, Spring Boot, Kubernetes' },
{ title: 'People Insight Hub', description: 'Led migration to cloud data warehouses, optimizing performance.', tech: 'Python, Big Data, AWS' },
{ title: 'HR Platforms @ Xoriant', description: 'Scalable Angular/Node.js apps with CICD automation.', tech: 'Angular, Node.js, Tekton' }
];  // From resume[file:1]
}
