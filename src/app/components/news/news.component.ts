import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsArticle {
  icon: string;
  date: string;
  title: string;
  excerpt: string;
}

interface CampaignUpdate {
  icon: string;
  title: string;
  description: string;
  time: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArticles: NewsArticle[] = [
    {
      icon: '🏥',
      date: 'October 12, 2024',
      title: 'Healthcare Access Initiative Launched',
      excerpt: 'Penny Wegman announces new healthcare initiative to improve access for all residents.'
    },
    {
      icon: '🌱',
      date: 'October 10, 2024',
      title: 'Environmental Protection Plan',
      excerpt: 'Comprehensive environmental protection plan focuses on renewable energy and sustainability.'
    },
    {
      icon: '💼',
      date: 'October 8, 2024',
      title: 'Economic Development Strategy',
      excerpt: 'New economic development strategy aims to create jobs and boost local businesses.'
    },
    {
      icon: '🏘️',
      date: 'October 5, 2024',
      title: 'Affordable Housing Program',
      excerpt: 'Affordable housing program to address the housing crisis in our community.'
    }
  ];

  campaignUpdates: CampaignUpdate[] = [
    {
      icon: '📢',
      title: 'Town Hall Meeting',
      description: 'Join us for a town hall meeting this Saturday at the Community Center.',
      time: '2 hours ago'
    },
    {
      icon: '🎉',
      title: 'Volunteer Milestone',
      description: 'We reached 500 volunteers! Thank you for your incredible support.',
      time: '1 day ago'
    },
    {
      icon: '📊',
      title: 'Poll Results',
      description: 'Latest polls show strong support for Penny Wegman in the district.',
      time: '2 days ago'
    },
    {
      icon: '🤝',
      title: 'Endorsement',
      description: 'Local business association endorses Penny Wegman for Congress.',
      time: '3 days ago'
    }
  ];
}
