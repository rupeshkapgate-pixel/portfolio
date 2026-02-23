// src/app/services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { Skill, Achievement } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
skills: Skill[] = [
{ name: 'Solution Architecture', level: 88, color: '#06b6d4' },
{ name: 'Angular', level: 95, color: '#3b82f6' },
{ name: 'Java Spring Boot', level: 98, color: '#10b981' },
{ name: 'Kubernetes/OpenShift', level: 90, color: '#f59e0b' },
{ name: 'Python', level: 85, color: '#ef4444' }

];

achievements: Achievement[] = [
{ year: '2019-2025', title: 'AVP Technical Lead', company: 'Citi', impact: 'Architected Data Marketplace Hub, microservices migration to cloud warehouses.' },
{ year: '2016-2019', title: 'Technical Lead', company: 'Xoriant', impact: 'Engineered scalable HR platforms with Angular/Node.js on Kubernetes.' },
{ year: '2014-2016', title: 'Senior Software Specialist', company: 'Mastek Ltd.', impact: 'Engineered scalable HR platforms with Angular/Node.js on Kubernetes.' },
{ year: '2012-2014', title: 'Senior Software Developer', company: 'CitiusTech Pvt. Ltd.', impact: 'Engineered scalable HR platforms with Angular/Node.js on Kubernetes.' },
{ year: '2010-2012', title: 'Software Developer', company: 'Germinait Solutions Pvt. Ltd.', impact: 'Engineered scalable HR platforms with Angular/Node.js on Kubernetes.' },
{ year: '2009-2010', title: 'Software Developer', company: 'RFArrays Systems Pvt. Ltd.', impact: 'Engineered scalable HR platforms with Angular/Node.js on Kubernetes.' }

];
}
