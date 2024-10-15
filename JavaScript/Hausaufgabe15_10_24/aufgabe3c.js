function calcSum(array, threshold) {
    let count = 0;
    let i = 0;

    do {
        if (array[i] > threshold) {
            count++;
        }
        i++;
    } while (i < array.length);

    return count;
}

const ergebnisSum = calcSum(dataArray, 50);
console.log("Anzahl der Elemente größer als 50 (do-while): " + ergebnisSum);
