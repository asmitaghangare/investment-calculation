export interface INVESTMENT_INPUTS {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number
}

export interface IRESULTS {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}