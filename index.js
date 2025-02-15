function tenTimes(number) {
    return number*10;
}

const bigNumber = tenTimes(99);

console.log(bigNumber)

function addPrices(price1,price2) {
    return price1+price2
}
const bill = addPrices(5,80)

console.log(bill);

function isEven(number) {
    if(number%2===0){
        return true;
    }
    return false
}

console.log(isEven(10))

console.log(isEven(5))

function sumOfNumbers(numbers){
    // console.log(numbers)
    let sum = 0;
    for(i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    console.log(sum)
}

sumOfNumbers([10,20,30,40])

function againSumOfNumbers(numbers){
    let sum = 0
    for(const number of numbers){
        sum += number
    }
    return sum;
}

console.log(againSumOfNumbers([30,40,50]))