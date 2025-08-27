import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { font: { size: 12 } } },
      tooltip: { enabled: true }
    }
  };

  salesPurchaseData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      { label: 'Sales', data: [48000, 50000, 52000, 43000, 40000, 45000, 50000, 47000], backgroundColor: '#22c55e' },
      { label: 'Purchase', data: [55000, 58000, 45000, 36000, 30000, 38000, 56000, 45000], backgroundColor: '#3b82f6' }
    ]
  };

  orderSummaryData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Ordered', data: [3800, 2000, 2800, 2300, 2500], borderColor: '#f59e0b', borderWidth: 2, fill: false, tension: 0.3 },
      { label: 'Delivered', data: [3200, 3100, 3600, 3400, 3700], borderColor: '#3b82f6', borderWidth: 2, fill: false, tension: 0.3 }
    ]
  };
}
