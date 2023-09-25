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