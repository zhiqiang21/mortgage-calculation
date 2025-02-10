// 我有商业贷款2098177.47
// 贷款利率是3.3%
// 剩余还款期数是170
// 还款方式是等额本息
// 请帮我计算出每月的还款额度是多少？并且分别计算出每月利息是多少，本金是多少，给我直接计算出结果

// -------------------------常量声明区域--------------------------------
// 贷款金额
let principal = 1770220.48; // 初始本金
// 年利率
let annualInterestRate = 0.033; // 年利率
// 还款总月数
let totalMonths = 151; // 剩余还款期数
// ---------------------------------------------------------
// 月利率
let monthlyInterestRate = annualInterestRate / 12; // 月利率

// 计算月还款额
let monthlyPayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
                    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1); 
// 计算公式: 月还款额 = 贷款金额 * 月利率 * (1 + 月利率)^还款月数 / [(1 + 月利率)^还款月数 - 1]

// 输出月还款额
console.log("每月还款额:", monthlyPayment.toFixed(2)); // 每月的还款总额，保留两位小数

// 初始化变量用于计算每月本金和利息
let remainingPrincipal = principal; // 剩余本金

// 计算每个月的本金和利息部分
for (let i = 1; i <= totalMonths; i++) {
    let interestPayment = remainingPrincipal * monthlyInterestRate; // 计算每月利息
    let principalPayment = monthlyPayment - interestPayment; // 计算每月本金
    remainingPrincipal -= principalPayment; // 减去已还本金后的剩余本金
    
    console.log(`第${i}个月: 本金 ${principalPayment.toFixed(2)} 元, 利息 ${interestPayment.toFixed(2)} 元`);
}
