function calcSum(array, threshold) {
    let count = 0;
    let i = 0;

    while (i < array.length) {
        if (array[i] > threshold) {
            count++;
        }
        i++;
    }
    return count;
}

const ergebnisSum = calcSum(dataArray, 50);
console.log("Anzahl der Elemente größer als 50 (while): " + ergebnisSum);
