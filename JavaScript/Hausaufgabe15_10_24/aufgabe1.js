function calcSum() {
    let sum = 0;
    let i = 1;

    do {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    } while (i <= 100);

    return sum;
}

const ergebnisSum = calcSum();
console.log("Die Summe aller geraden Zahlen von 1 bis 100 ist: " + ergebnisSum);
