// 消费贷贷款利率计算，贷xx万，利率多少，贷x年，等额本息还款

// 示例：贷款30万，利率2.86%，3年
const result = calculateLoan(300000, 2.86, 3);
console.log(`每月还款: ${result.monthlyPayment} 元`);
console.log(`总还款: ${result.totalPayment} 元`);
console.log(`总利息: ${result.totalInterest} 元`);




function calculateLoan(paymentAmount, annualRate, years) {
    const principal = paymentAmount; // 贷款金额
    const annualInterestRate = annualRate / 100; // 年利率
    const monthlyRate = annualInterestRate / 12; // 月利率
    const months = years * 12; // 还款期数

    // 计算每月还款金额
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    // 计算总还款金额和总利息
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
    };
}



