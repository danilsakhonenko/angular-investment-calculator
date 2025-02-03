import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";
import { ResultOutput } from "./result-output.mode";

@Injectable({providedIn: 'root'})
export class InvestmentService{
  resultData = signal<ResultOutput[]| undefined>(undefined)
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
    this.resultData.set(annualData);
  }
}