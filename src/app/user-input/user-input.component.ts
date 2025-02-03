import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() submitData = new EventEmitter<InvestmentInput>()
  // initInvestment = '0'
  // annualInvestment='0'
  // expectedReturn='5'
  // duration='10'
  //submitData= output<InvestmentInput>();
  private investmentService = inject(InvestmentService)
  initInvestment = signal('0')
  annualInvestment = signal('0')
  expectedReturn = signal('5')
  duration = signal('10')

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initInvestment: +this.initInvestment(),
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn()
    })
  }
}
