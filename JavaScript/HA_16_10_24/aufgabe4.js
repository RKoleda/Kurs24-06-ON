let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function calculateDiagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];
    }
    return sum;
  }
  
let diagonalSum = calculateDiagonalSum(matrix);
console.log("Diagonalsumme von oben links nach unten rechts:", diagonalSum);

let transposedMatrix = matrix.map((_, i) => matrix.map(row => row[i]));
console.log("Transponierte Matrix:");
transposedMatrix.forEach(row => console.log(row));