array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1);

array1.push(11);
array1.shift();
console.log(array1);

let slicedzahlenarray = array1.slice(3, 4);
console.log(slicedzahlenarray);

array1.includes(7);
console.log(`Ist die Zahl 7 enthalten?? ${array1.includes(7)}`);

