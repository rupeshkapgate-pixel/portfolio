import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, RouterOutlet, RouterLink],
template: `
<nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 px-4 border-b border-gray-100">
<div class="max-w-6xl mx-auto">
<ul class="flex space-x-8 py-4">
<li><a routerLink="/" class="hover:text-blue-600 font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50">Home</a></li>
<li><a routerLink="/skills" class="hover:text-blue-600 font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50">Skills</a></li>
<li><a routerLink="/career" class="hover:text-blue-600 font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50">Career</a></li>
<li><a routerLink="/projects" class="hover:text-blue-600 font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50">Projects</a></li>
<li><a routerLink="/contact" class="hover:text-blue-600 font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50">Contact</a></li>
</ul>
</div>
</nav>

<main class="pt-20">
<router-outlet></router-outlet>
</main>
`,
styles: [`
:host {
display: block;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
`]
})
export class AppComponent implements OnInit {
  title = 'rupesh-portfolio';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // ✅ SSR-SAFE - Only runs in browser
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('loaded');
      this.initScrollAnimations();
    }
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-section')?.forEach(el => {
      observer.observe(el);
    });
  }
}
