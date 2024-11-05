function calcSum(array, threshold) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > threshold) {
            count++;
        }
    }
    return count;
}

const dataArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const ergebnisSum = calcSum(dataArray, 50);
console.log("Anzahl der Elemente größer als 50 (for): " + ergebnisSum);
