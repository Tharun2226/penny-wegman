import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VotingStep {
  title: string;
  description: string;
}

interface VoterRequirement {
  icon: string;
  title: string;
  description: string;
}

interface ImportantDate {
  title: string;
  date: string;
  description: string;
}

interface VotingLocation {
  name: string;
  address: string;
  hours: string;
  type: string;
}

interface VoterResource {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-to-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-vote.component.html',
  styleUrl: './how-to-vote.component.css'
})
export class HowToVoteComponent {
  votingSteps: VotingStep[] = [
    {
      title: 'Register to Vote',
      description: 'Make sure you are registered to vote at least 30 days before the election.'
    },
    {
      title: 'Check Your Registration',
      description: 'Verify your voter registration status and polling location online.'
    },
    {
      title: 'Bring Required ID',
      description: 'Bring a valid photo ID or other acceptable forms of identification.'
    },
    {
      title: 'Find Your Polling Place',
      description: 'Locate your assigned polling place or early voting location.'
    },
    {
      title: 'Cast Your Vote',
      description: 'Follow the instructions at your polling place to cast your ballot.'
    }
  ];

  voterRequirements: VoterRequirement[] = [
    {
      icon: '🎂',
      title: 'Age Requirement',
      description: 'Must be 18 years or older on Election Day'
    },
    {
      icon: '🏠',
      title: 'Residency',
      description: 'Must be a resident of the voting district'
    },
    {
      icon: '📝',
      title: 'Registration',
      description: 'Must be registered to vote in advance'
    },
    {
      icon: '🆔',
      title: 'Identification',
      description: 'Valid photo ID or alternative forms of ID'
    }
  ];

  importantDates: ImportantDate[] = [
    {
      title: 'Voter Registration Deadline',
      date: 'October 15, 2024',
      description: 'Last day to register to vote for the general election'
    },
    {
      title: 'Early Voting Begins',
      date: 'October 28, 2024',
      description: 'Early voting locations open across the district'
    },
    {
      title: 'Election Day',
      date: 'November 5, 2024',
      description: 'General election day - polls open 7 AM to 8 PM'
    }
  ];

  votingLocations: VotingLocation[] = [
    {
      name: 'Community Center',
      address: '123 Main Street, Downtown',
      hours: '7:00 AM - 8:00 PM',
      type: 'Election Day'
    },
    {
      name: 'City Hall',
      address: '456 Government Ave',
      hours: '8:00 AM - 5:00 PM',
      type: 'Early Voting'
    },
    {
      name: 'Public Library',
      address: '789 Knowledge Blvd',
      hours: '9:00 AM - 6:00 PM',
      type: 'Early Voting'
    }
  ];

  voterResources: VoterResource[] = [
    {
      icon: '🌐',
      title: 'Check Registration Status',
      description: 'Verify your voter registration online'
    },
    {
      icon: '🗺️',
      title: 'Find Polling Place',
      description: 'Locate your nearest voting location'
    },
    {
      icon: '📋',
      title: 'Sample Ballot',
      description: 'Preview your ballot before voting'
    },
    {
      icon: '📞',
      title: 'Voter Hotline',
      description: 'Get help with voting questions'
    }
  ];
}
