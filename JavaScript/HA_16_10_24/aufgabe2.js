array2 = ["Leipzig", "Berlin", "Hamburg", "München", "Düsseldorf"];
console.log(array2);

for (const stadt of array2) {
    console.log(stadt.toUpperCase());
}
const anzahlbuchstaben = array2.map(leange => leange.length);
console.log(anzahlbuchstaben);