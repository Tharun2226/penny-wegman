import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DonationAmount {
  value: number;
  description: string;
}

interface CampaignStats {
  raised: number;
  goal: number;
  donors: number;
}

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  selectedAmount: number = 25;
  customAmount: number = 0;
  
  donationAmounts: DonationAmount[] = [
    { value: 10, description: 'Supporter' },
    { value: 25, description: 'Friend' },
    { value: 50, description: 'Partner' },
    { value: 100, description: 'Champion' },
    { value: 250, description: 'Leader' },
    { value: 500, description: 'Visionary' }
  ];

  campaignStats: CampaignStats = {
    raised: 125000,
    goal: 200000,
    donors: 1250
  };

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = 0;
  }

  onCustomAmountChange() {
    if (this.customAmount > 0) {
      this.selectedAmount = 0;
    }
  }

  getSelectedAmount(): number {
    return this.customAmount > 0 ? this.customAmount : this.selectedAmount;
  }

  getProgressPercentage(): number {
    return Math.round((this.campaignStats.raised / this.campaignStats.goal) * 100);
  }

  processDonation() {
    const amount = this.getSelectedAmount();
    if (amount > 0) {
      alert(`Thank you for your donation of $${amount}! This is a demo - in a real application, this would redirect to a payment processor.`);
    } else {
      alert('Please select or enter a donation amount.');
    }
  }
}
