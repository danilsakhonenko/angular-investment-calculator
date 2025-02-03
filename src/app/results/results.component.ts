import { Component, computed, inject, input, Input } from '@angular/core';
import { ResultOutput } from '../result-output.mode';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  //@Input() results?: ResultOutput[]
  //results = input<ResultOutput[]| undefined>(undefined)
  private investmentService = inject(InvestmentService)
  //results = computed(()=> this.investmentService.resultData()) 
  results = this.investmentService.resultData.asReadonly() //alternative to computed()
}
