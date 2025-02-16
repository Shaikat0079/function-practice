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


function evenNumbers(numbers){
    const even = []
    for(const number of numbers){
        if(number%2===0){
            even.push(number)
        }
    }

    return even;
}

console.log(evenNumbers([10,5, 31,4,20]))

function sumOfEvenNumbers(numbers) {
    sum = 0;
    for(const number of numbers){
        if(number%2 === 0){
            sum += number
        }
    }
    return sum;
}

console.log(sumOfEvenNumbers([10,5, 31,4,20]))

function isLeapYear(year){
    if (year % 100 !== 0 && year%4 === 0){
        return true;
    }
    if(year%400 === 0){
        return true;
    }

    return false;
}


console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(1900));
console.log(isLeapYear(2052));


// odd average

function addOdds(numbers) {

    const oddNumbers = []
    let sum=0;
    for(const number of numbers){
        if(number%2!==0){
             oddNumbers.push(number);
        }
    }

    for(const add of oddNumbers){
        sum += add;
    }

    return sum/oddNumbers.length;
}

console.log(addOdds([10,5, 31,4,20]))
console.log(addOdds([42,13,58,65,81,96,7]))


function removeDuplicate(arr) {
    const unique = []
    for(const item of arr){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }

    return unique;
}

console.log(removeDuplicate(["Alpha","Beta","Gamma","Sigma","Alpha","Sigma"]))
console.log(removeDuplicate([10,10,20,20,30,40,50,50,60,60,60,60]))