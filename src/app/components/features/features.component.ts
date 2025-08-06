import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized technology stack that ensures your applications run smoothly.',
      stat: '99.9% Uptime'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protect your data with advanced encryption and multi-factor authentication.',
      stat: '256-bit Encryption'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices, from smartphones to desktop computers.',
      stat: '100% Responsive'
    },
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description: 'Get instant insights with our powerful analytics dashboard that tracks performance in real-time.',
      stat: 'Real-time Data'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Simple API integration that connects seamlessly with your existing tools and workflows.',
      stat: '50+ Integrations'
    },
    {
      icon: '🎯',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to save time and increase productivity.',
      stat: '80% Time Saved'
    }
  ];
}
