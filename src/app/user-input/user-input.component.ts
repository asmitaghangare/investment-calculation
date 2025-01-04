import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type {  INVESTMENT_INPUTS } from '../investment.input.modal';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn =  signal('5');
  duration = signal('10');
  @Output() calculate = new EventEmitter<INVESTMENT_INPUTS>();

  
onSubmit(){
  console.log("SUBMIT CLICKED!!");
  console.log(this.annualInvestment, this.duration, this.expectedReturn, this.initialInvestment);
  this.calculate.emit({
    initialInvestment: +this.initialInvestment(),
    duration: +this.duration(),
    annualInvestment: +this.annualInvestment(),
    expectedReturn: +this.expectedReturn()
  });
  this.annualInvestment.set('0');
  this.expectedReturn.set('5');
  this.duration.set('10');
  this.initialInvestment.set('0');
}
}
