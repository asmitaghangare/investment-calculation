import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type {  INVESTMENT_INPUTS, IRESULTS } from './investment.input.modal';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  annualData = signal<IRESULTS[] | undefined>([]);

  OnCalculateEvent(data:INVESTMENT_INPUTS){
    console.log(data);
    this.annualData.set(this.calculateInvestmentResults(data));
  }

  calculateInvestmentResults(data: INVESTMENT_INPUTS) {
    const {initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData= [] ;
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    return annualData;
  }
}