import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UpcomingEvent {
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  description: string;
}

interface EventCategory {
  icon: string;
  title: string;
  description: string;
  count: number;
}

interface PastEvent {
  icon: string;
  title: string;
  date: string;
  summary: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  upcomingEvents: UpcomingEvent[] = [
    {
      day: '20',
      month: 'OCT',
      title: 'Town Hall Meeting',
      time: '6:00 PM - 8:00 PM',
      location: 'Community Center, Downtown',
      description: 'Join Penny for an open discussion about community issues and her vision for the future.'
    },
    {
      day: '25',
      month: 'OCT',
      title: 'Volunteer Training',
      time: '10:00 AM - 12:00 PM',
      location: 'Campaign Office, Main Street',
      description: 'Learn how to effectively support the campaign through canvassing and phone banking.'
    },
    {
      day: '28',
      month: 'OCT',
      title: 'Youth Forum',
      time: '4:00 PM - 6:00 PM',
      location: 'High School Auditorium',
      description: 'Special event for young voters to discuss issues that matter to them.'
    },
    {
      day: '02',
      month: 'NOV',
      title: 'Get Out The Vote Rally',
      time: '5:00 PM - 7:00 PM',
      location: 'City Park',
      description: 'Final rally before election day to energize supporters and encourage voting.'
    }
  ];

  eventCategories: EventCategory[] = [
    {
      icon: '🏛️',
      title: 'Town Halls',
      description: 'Open discussions with community members',
      count: 3
    },
    {
      icon: '🤝',
      title: 'Volunteer Events',
      description: 'Training and organizing sessions',
      count: 5
    },
    {
      icon: '🎓',
      title: 'Youth Events',
      description: 'Engaging with young voters',
      count: 2
    },
    {
      icon: '🎉',
      title: 'Rallies',
      description: 'Campaign rallies and celebrations',
      count: 4
    }
  ];

  pastEvents: PastEvent[] = [
    {
      icon: '📢',
      title: 'Campaign Launch',
      date: 'September 15, 2024',
      summary: 'Successful campaign launch with over 500 supporters in attendance.'
    },
    {
      icon: '🏘️',
      title: 'Neighborhood Walk',
      date: 'October 5, 2024',
      summary: 'Door-to-door canvassing in the downtown neighborhood.'
    },
    {
      icon: '🎤',
      title: 'Debate Watch Party',
      date: 'October 10, 2024',
      summary: 'Community debate watch party with lively discussion.'
    }
  ];
}
