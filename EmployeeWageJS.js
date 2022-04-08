const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totalWage = 0;

let dailyCounter = 0;

let empDailyWageArray = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
      totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
}

empDailyWageArray.forEach(sum);

let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);

let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);

console.log("Total days worked : " + totalWorkingDays +
                "\nTotal hours worked : " + totalEmpHrs + "\nEmployee wage : " + totalWage);

console.log("Daily wage map :\n " + mapDayWithWageArray);

console.log("\nDaily Wage filter when fulltime wage earned :\n" + fullDayWageArray);

console.log("First fulltime wage was earned on Day : " + mapDayWithWageArray.find(fullTimeWage));

console.log("Checking all elements in array have fulltime wage : " + fullDayWageArray.every(fullTimeWage));

console.log("Check if any part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage));

console.log("Number of days worked : " + empDailyWageArray.reduce(totalDaysWorked,0));

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

function sum(dailyWage){
    totalWage += dailyWage;
}

function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = " + dailyWage; 
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage > 0)
        return numberOfDays+1;
    return numberOfDays;
}