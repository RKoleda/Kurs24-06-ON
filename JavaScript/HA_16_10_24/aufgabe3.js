let array = array3 = [];
for (let i = 0; i < 20; i++) {
    array3.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array);

let geradezahl = array3.filter(num => num % 2 == 0);
console.log(geradezahl);

let gefiltertezahl = array3.reduce((sum, num) => sum + num, 0);
console.log(gefiltertezahl);