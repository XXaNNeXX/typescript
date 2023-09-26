let age: number = 5;

for (let i: number = 0; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log(age + " ist größer als 18");
} else {
    console.log(age + " ist kleiner als 18");
}

let score : number = 0;

if (score !== 0) {
    console.log("Score ist verfügbar");
} else {
    console.log("Score ist nicht verfügbar")
}

if (score) {
    console.log("Score wird als truthy ausgewertet")
} else {
    console.log("Score wird als falsy ausgewertet")
}

let username : string = "";

if (username === "") {
    console.log("Username ist nicht verfügbar")
} else {
    console.log("Username ist verfügbar")
}

if (username) {
    console.log("Username wird als truthy ausgewertet")
} else {
    console.log("Username wird als falsy ausgewertet")
}

let isAdmin : boolean = false;

if (isAdmin) {
    console.log("isAdmin wird als truthy ausgewertet")
} else {
    console.log("isAdmin wird als falsy ausgewertet")
}

if (!isAdmin) {
    console.log("isAdmin ist false")
}

function christmasTree(n : number) : void {
    for (let i : number = 1; i <= n; i++) {
        let line : string = "";
        for (let j : number = 1; j <= i*2-1; j++) {
            line += "*";
        }
        console.log(line);
    }
    for (let x : number = 1; x <= n; x++) {
        console.log("*");
    }
}

christmasTree(5);
console.log("-------------------------------------")

let myArray : number[] = [2,6,9,3,6,4,5,7]
let myNewArray : number[] = myArray.map(element => element*2)
console.log(myNewArray)

let myArray2 : string[] = ["Hund", "Katze", "Meerschweinchen", "Hamster", "Schildkröte"]
let myNewArray2 : string[] = myArray2.filter(element => element.length > 5)
console.log(myNewArray2)

let myArray3 : number[] = [2,6,9,3,6,4,5,7]
let sum : number = myArray3.reduce((a,b) => a + b)
console.log(sum)

let myArray4 : number[] = [11,5,8,3,78,45,2]
let bigger : boolean = myArray4.some(element => element > 10)
console.log(bigger)