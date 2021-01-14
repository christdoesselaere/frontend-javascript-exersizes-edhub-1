// ==========================================
// 1. Maak een for-loop die 3 keer "Hoera!" in de console logt
// ==========================================
for (let answer1 = 0; answer1 < 3; answer1++) {
    const answer1 = "Hoera!";
    console.log(answer1);
}

// ==========================================
// 2. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan.
// Vanaf het getal 6 komt er >> voor ieder getal te staan.
// geeft:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================
for (let answer2 = 0; answer2 < 10; answer2++) {
    if (answer2 < 3) {
        console.log(answer2);
    }
    if ((answer2 > 2) && (answer2 < 6)) {
        console.log("> " + answer2);
    }
    if (answer2 > 5) {
        console.log(">> " + answer2);
    }
}

// ==========================================
// 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// geeft:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// ....
// 15 is oneven

// tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// hier bestaat een speciale operator voor
// ==========================================
for (let answer3 = 0; answer3 < 16; answer3++) {
    if (answer3%2 === 0) {
        console.log(answer3 + " is even");
    }
    if (answer3%2 !== 0) {
        console.log(answer3 + " is oneven");
    }
}
