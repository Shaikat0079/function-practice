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