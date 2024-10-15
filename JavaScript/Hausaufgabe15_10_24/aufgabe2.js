function calcSum(number) {
    let sum = 0;

    do {
        sum += number % 10; 
        number = Math.floor(number / 10); 
    } while (number > 0);

    return sum;
}

const ergebnisSum = calcSum(248);
console.log("Die Ziffernsumme von 248 ist: " + ergebnisSum); 
