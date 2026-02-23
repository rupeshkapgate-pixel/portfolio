import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
selector: 'app-hero',
standalone: true,
imports: [CommonModule, RouterLink],
template: `
<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 text-white px-4 animate-section">
<div class="text-center max-w-4xl mx-auto">
<h1 class="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent is-visible">
Rupesh Kapgate
</h1>

<div class="space-y-6 max-w-2xl mx-auto">
<p class="text-2xl md:text-3xl font-semibold is-visible animate-section" style="transition-delay: 0.2s">
Senior Solution Architect & Engineering Leader
</p>
<p class="text-xl md:text-2xl opacity-90 leading-relaxed is-visible animate-section" style="transition-delay: 0.4s">
16+ years delivering enterprise-scale platforms at Citi & Xoriant.
Expert in Angular, Java Spring Boot, Kubernetes, and cloud architecture.
</p>
<p class="text-lg font-medium is-visible animate-section" style="transition-delay: 0.6s">
Pune, Maharashtra | Open to Remote Senior Roles
</p>

<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4 is-visible animate-section" style="transition-delay: 0.8s">
<a routerLink="/skills" class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
Explore Skills →
</a>
<a routerLink="/career" class="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
Career Timeline
</a>
</div>
</div>
</div>
</section>
`
})
export class HeroComponent {}
