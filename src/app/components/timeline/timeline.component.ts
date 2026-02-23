import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Achievement } from '../../models/portfolio';

@Component({
selector: 'app-timeline',
standalone: true,
imports: [CommonModule],
template: `
<section class="py-20 bg-gray-50 min-h-screen animate-section">
<div class="max-w-4xl mx-auto px-8">
<h2 class="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent is-visible">
Career Achievements (2009-2025)
        </h2>

        <div class="relative border-l-4 border-blue-500 pl-12 space-y-12">
          <div *ngFor="let ach of achievements; let i = index"
               class="mb-12 flex group animate-section"
               [style.transition-delay]="i * 0.2 + 's'">

            <div class="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -left-3 ring-8 ring-white/50 shadow-lg group-hover:scale-125 transition-all duration-500"></div>

            <div class="ml-8 flex-1 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group-hover:-translate-x-4">
              <div class="flex items-center mb-4">
                <span class="text-sm font-medium bg-blue-100 text-blue-800 px-4 py-2 rounded-full uppercase tracking-wider">
                  {{ ach.year }}
                </span>
                <span class="ml-4 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {{ ach.company }}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ ach.title }}</h3>
              <p class="text-lg text-gray-700 leading-relaxed">{{ ach.impact }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TimelineComponent {
  achievements: Achievement[] = [];
  constructor(private portfolio: PortfolioService) {
    this.achievements = this.portfolio.achievements;
  }
}
