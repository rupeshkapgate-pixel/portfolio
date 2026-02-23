import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio';

@Component({
selector: 'app-skills',
standalone: true,
imports: [CommonModule],
template: `
<section class="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen animate-section">
<div class="max-w-7xl mx-auto px-8">
<h2 class="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent is-visible">
Technical Skills Mastery (16+ Years)
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div *ngFor="let skill of skills; let i = index"
               class="text-center group cursor-default animate-section"
               style="transition-delay: {{i * 0.15}}s">

            <svg width="220" height="220" viewBox="0 0 220 220" class="mx-auto mb-6 group-hover:rotate-6 transition-all duration-1000">
              <circle cx="110" cy="110" r="90" fill="none" stroke="#e5e7eb" stroke-width="16" stroke-linecap="round"/>
              <circle cx="110" cy="110" r="90" fill="none" [attr.stroke]="skill.color" stroke-width="16"
                      stroke-linecap="round" stroke-linejoin="round" pathLength="1"
                      [attr.stroke-dasharray]="circumference" [attr.stroke-dashoffset]="circumference - skill.level * circumference / 100"
                      class="origin-center transition-all duration-3000 ease-out transform -rotate-90"/>
            </svg>

            <div class="space-y-2">
              <div class="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-all duration-500">
                {{ skill.name }}
              </div>
              <div class="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {{ skill.level }}<span class="text-2xl">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  circumference = 2 * Math.PI * 90;
  skills: Skill[] = [];
  constructor(private portfolio: PortfolioService) {
    this.skills = this.portfolio.skills;
  }
}
