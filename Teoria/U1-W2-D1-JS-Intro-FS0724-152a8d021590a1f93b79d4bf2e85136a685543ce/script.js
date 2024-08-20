console.log("Hello World!");

// Il lavoro del software developer si incentra sulla RISOLUZIONE DI PROBLEMI, tramite la scrittura di ALGORITMI!
// un Algoritmo è composto da una serie di passaggi ordinati e finiti che portano alla risoluzinoe di un problema.
// Dato uno stesso problema gli stessi passaggi dovrebbero portare alla stessa risoluzione.

// Cosa ci serve sapere per poter sviluppare un algoritmo? Uno dei concetti fondamentali è quello delle VARIABILI.
// Una variabile la possiamo immaginare come un contenitore (una scatola, una ciotola, un cassetto ecc..) con del contenuto all'interno.
// in ambito di programmazione in genere una variabile è un'allocazione di memoria atta a contenere un valore.

// una varibile ci servirà quando vorremo salvare un dato epr poterlo usare anche più volte nel corso del programma
// non salvarlo lo farebbe morire nell'istante immediatamente successivo alla sua creazione.

// VARIABILI
// in JS le variabili si dichiarano tipicamente con la parola chiave (keyword) ---> let
let teacherName = "stefano"; // variabile dichiarata e inizializzata con un valore

let dog; // variabile dichiarata
console.log(dog); // undefined

dog = "fuffy"; // assegnazione del valore in stringa

console.log(teacherName);
console.log(dog);

let randNum = 55;
// randNum = "ciao"; // è --altamente sconsigliato-- cambiare completamente il tipo di valore di una variabile

// TIPI DI VALORI PRIMITIVI

// string - es. "Mario", "Rossi", 'Epicode', '30'
// number - es. 100, 0, -2, 90.45
// boolean - es. true, false
// undefined --> rappresenta l'assenza di valore - es. variabile inizialmente vuota
// null --> rappresenta l'assenza di valore INTENZIONALE - es. lo utilizziamo per svuotare un valore oppure per assegnare un valore "vuoto" temporaneo
// NaN --> Not a Number - es. ritorno da operazioni matematiche con operatori non numerici

let canIDrive = true;
let isDogHappy = false;

console.log(canIDrive);
console.log(isDogHappy);

// opreazione di concatenazione di una stringa ==> string
console.log("Mi chiamo " + teacherName + " e posso guidare? " + canIDrive + ". Il mio cane si chiama " + dog);

// CONST - non permette la riassegnazione

const cat = "mao";
console.log(cat);

// cat = "kitty"; // questo genera un errore - Assignment to constant variable
// non è previsto riassegnare valori alle nostre costanti

// OPERATORI ARITMETICI

let num1 = 50;
let num2 = 10;
let num3 = 2;

console.log(num1 + cat); // trasformazione automatica del numero in stringa per poter concatenare i due elementi => "50mao"
console.log(num1 + num2); // semplice operazione aritmentica di somma tra due numeri => 60

console.log(num1 - cat); // l'operazione di sottrazione è meno ambigua dell'addizione (+) quindi il risultato sarà Not a Number => NaN

console.log(num1 / cat); // l'operazione di divisione è meno ambigua dell'addizione (/) quindi il risultato sarà Not a Number => NaN
console.log(num1 / num3); // => 25

console.log(num1 * cat); // l'operazione di moltiplicazione è meno ambigua dell'addizione (*) quindi il risultato sarà Not a Number => NaN
console.log(num1 * num3); // => 100

// operatore modulo
console.log(22 % 5); // => 2

// per sapere se un numero è pari, useremo l'operatore modulo, per verificare che il risultato dell'operazione torni sempre 0
console.log(6 % 2); // il numero è pari perché il risultato è 0
console.log(3 % 2); // il numero è dispari perché il risultato non è 0, c'è del resto

// operazioni aritmetiche abbreviate
num1 += num3; // num1 = num1 + num3
console.log(num1);

num2 -= num3; // num2 = num2 - num3
console.log(num2);

num2 *= num3; // num2 = num2 * num3
console.log(num2);

num2 /= num3; // num2 = num2 / num3
console.log(num2);

// Operatori di comparazione

let num4 = 30;
let num5 = 10;
let num6 = 5;

console.log("è num6 miniore di num4?", num6 < num4); // true
console.log("è num4 maggiore di num5?", num4 > num5); // true
console.log("è num6 maggiore di num5?", num6 > num5); // false
console.log("è num6 maggiore o uguale di 5?", num6 >= 5); // true

let childAge = 16;

console.log("il ragazzo è maggiorenne?", childAge > 18); // false

// Operatori di uguaglianza stretta e non stretta

console.log("il docente si chiama stefano?", teacherName === "stefano"); // true
console.log("num4 è uguale a 30?", num4 === 30); // true
console.log("num4 è uguale a '30'?", num4 === "30"); // false

console.log("num4 è debolmente uguale a '30'?", num4 == "30"); // true - perché viene effettuata una conversione per
// uniformare i tipi dei dati prima di valutare il risultato
// è sempre consigliabile usare l'uguaglianza stretta e in caso convertire noi il dato in modo da uniformarli

// convertire un numero a stringa lo si fa attraverso il metodo .toString()

console.log(typeof num6); // "number"
console.log(typeof num6.toString()); // "string" - abbiamo convertito il dato precedentemente numerico nel corrispettivo a stringa

// convertire una stringa a numero lo si può fare in diversi modi

let num7 = "46";
num7 = parseInt(num7);

console.log("num7", typeof num7); // "number"

let num8 = "52.2";
num8 = parseFloat(num8);

console.log("num8", typeof num8); // "number"

console.log("num7 uguale a 46", num7 === 46); // true perché num7 già convertito a linea 125
console.log("'48.2' convertito a numero è uguale a 48.2", Number("48.2") === 48.2); // conversione sul posto utilizzando il costruttore Number()

// disuguaglianza

console.log("num7 diverso da num8", num7 !== num8); // true
console.log("5 debolmente diverso da '5'", 5 != "5"); // false
console.log("5 strettamente diverso da '5'", 5 !== "5"); // true // vivamente consigliata la disuguaglianza stretta!

// && - AND operator

console.log("il nome è stefano e può guidare e il cane è felice", teacherName === "stefano" && canIDrive === true && isDogHappy === true);
//                                                            true          &&           true     &&           false   ==> false

// || - OR operator
console.log("il nome è stefano, o può guidare, o il cane è felice", teacherName === "stefano" || canIDrive === true || isDogHappy === true);
//                                                                             true         ||           true     ||           false   ==>  true

// controlli combinati - le parentesi tonde hanno la priorità, il loro valore si valuta prima di quello che c'è all'esterno
console.log("il nome è stefano e (può guidare, o il cane è felice)", teacherName === "stefano" && (canIDrive === true || isDogHappy === true));
//                                                                             true         &&       (       true     ||          false )      ==>  true

let skill = "frontend";
let yearsOfExp = 4;
let height = 180;

// operatore ternario - permette di determinare in maniera dinamica il valore che verrà salvato in una variabile

// sintassi:
// condizione da valutare ? valore ritornato in caso positivo : valore ritornato in caso negativo

const isHired = (skill === "frontend" || skill === "backend") && yearsOfExp >= 3 && height >= 180 ? "hired" : "not hired";
//                                    true                  &&       true        &&     true ==> true, quindi ==> "hired"

console.log(isHired);

const userSpecialty = prompt("qual è la tua specialità?"); // questo genera un popup con una richiesta di prompt (inserimento testo),
// che verrà utilizzato come valore della variabile associata
console.log("l'utente ha scritto:", userSpecialty);

const result = userSpecialty === "frontend" || userSpecialty === "backend" ? "puoi entrare" : "non stiamo cercando " + userSpecialty;
// questa variabile avrà come valore una o l'altra stringa in base al risultato della comparazione

// utilizziamo il valore di result posizionandola all'interno di un alert
alert(result); // questo genera un popup con un messaggio (stringa)
