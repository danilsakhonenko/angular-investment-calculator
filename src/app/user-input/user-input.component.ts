import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() submitData = new EventEmitter<InvestmentInput>()
  initInvestment = '0'
  annualInvestment='0'
  expectedReturn='5'
  duration='10'
  onSubmit(){
    console.log(this.initInvestment, this.annualInvestment, this.expectedReturn,this.duration)
    this.submitData.emit({
      initInvestment: +this.initInvestment,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn
    })
  }
}
