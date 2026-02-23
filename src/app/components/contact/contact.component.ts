// contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-contact',
standalone: true,
imports: [CommonModule, FormsModule],
template: `
<section data-aos="fade-up" class="py-20 max-w-2xl mx-auto px-4">
<h2 class="text-4xl font-bold text-center mb-12">Get in Touch</h2>
<div class="bg-white p-12 rounded-xl shadow-xl">
<p class="text-center text-gray-600 mb-8">Pune, Maharashtra | Open to remote senior roles</p>
<form class="space-y-6">
<input [(ngModel)]="name" name="name" placeholder="Your Name" class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
<input [(ngModel)]="email" name="email" type="email" placeholder="Email" class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
<textarea [(ngModel)]="message" name="message" rows="5" placeholder="Message" class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
<button type="submit" class="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition">Send Message</button>
</form>
<div class="mt-8 text-center text-sm text-gray-500">
rupesh.kapgate@gmail.com | +91-7875878015
</div>
</div>
</section>
`
})
export class ContactComponent {
name = ''; email = ''; message = '';
}
