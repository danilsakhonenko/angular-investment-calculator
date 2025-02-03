import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { ResultsComponent } from "./results/results.component";
import { ResultOutput } from './result-output.mode';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
})
export class AppComponent {
  results?: ResultOutput[]
  calculateInvestmentResults(data:InvestmentInput) {
    const {initInvestment, annualInvestment, duration, expectedReturn} = data
    const annualData = [];
    let investmentValue = initInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initInvestment + annualInvestment * year,
      });
    }
    this.results=annualData;
  }

}
