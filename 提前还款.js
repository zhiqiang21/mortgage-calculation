// 如果提前还款X00000
// 在还款额度不变的情况下我的还款期数可以缩短多少，并且分别计算出每月利息是多少，本金是多少，给我计算出结果

// -------------------------常量声明区域--------------------------------
// 定义初始参数
let principal = 1770220.48;  // 初始本金
let prepayment = 150000;  // 提前还款金额
// 年利率和月利率
let annualInterestRate = 0.033;  // 年利率
// 原先的每月还款额
let monthlyPayment = 14341.23;  // 保持还款额不变
// -------------------------常量声明区域--------------------------------

let remainingPrincipal = principal - prepayment;  // 减去提前还款金额后的新本金
let monthlyInterestRate = annualInterestRate / 12;  // 月利率

// 初始化新变量
let newTotalMonths = 0;  // 新的还款期数
let newMonthlyDetails = [];  // 存储每月的本金和利息

// 计算每个月的本金和利息部分，直到还清贷款
while (remainingPrincipal > 0) {
    let interestPayment = remainingPrincipal * monthlyInterestRate;  // 每月利息
    let principalPayment = monthlyPayment - interestPayment;  // 每月本金
    remainingPrincipal -= principalPayment;  // 剩余本金减少

    if (remainingPrincipal < 0) {
        principalPayment += remainingPrincipal;  // 修正最后一个月的本金
        remainingPrincipal = 0;
    }

    newTotalMonths += 1;
    newMonthlyDetails.push({
        month: newTotalMonths,
        principalPayment: principalPayment.toFixed(2),  // 本金部分，保留两位小数
        interestPayment: interestPayment.toFixed(2)  // 利息部分，保留两位小数
    });
}

// 输出新的还款期数和前12个月的还款详情
console.log("新的还款期数:", newTotalMonths, "剩余应还本金:", principal - prepayment);
const result = newMonthlyDetails.slice(0, 12);
result.forEach((item) => {
    console.log(`前12个月，第${item.month}个月的还款详情: 本金->${item.principalPayment}，利息->${item.interestPayment}`);
});
