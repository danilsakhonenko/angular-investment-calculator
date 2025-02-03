import { Component, signal } from '@angular/core';
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
  results = signal<ResultOutput[]| undefined>(undefined)
  //results?: ResultOutput[]
  

}
