import { Component, Input } from '@angular/core';
import { ResultOutput } from '../result-output.mode';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() results?: ResultOutput[]
}
