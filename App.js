// Arithmetic operator
let a = 20;
let b = 10;
console.log("a+b=", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a ** b =", a ** b);
console.log("a % b =", a % b);
console.log("a + b =", a + b);

// Unary Operator
console.log(a++) //output:-10 and at last 11
console.log(a);
console.log(++a) //uotput:- 12

// Assignment operator
let A = 20;
let B = 50;
B = A;
console.log("B=", B)//Output:-  B=20

// Comparison OPerator
let age = 20;
console.log(age < 25)//output:- true
console.log(age < 18);//output:- false

// Conditional Statements
let AGE = 14;
if (AGE > 18) {
    console.log("You Can Vote")
}
if (AGE < 18) {
    console.log("You Can't Vote")
}

// Practice set Qs
// Traffic Light Rule
let color = "green";
if (color == "red") {
    console.log("STOP")
}
if (color == "yellow") {
    console.log("READY")
}
if (color == "green") {
    console.log("YOU CAN GO")
}

// else-if statement
let marks = 75;
if (marks >= 80) {
    console.log("Your Grade Is : A")
}
else if (marks >= 60) {
    console.log("Your Grade Is : B")
}
else if (marks >= 33) {
    console.log("Your Grade Is : C")
}
else if (marks < 33) {
    console.log("Your Grade Is : F ")
}

// else statement
let AgE = 18;
if (AgE >= 18) {
    console.log("You can vote")
}
else {
    console.log("You can't vote")
}

// Practice set Question
let size = "S";
if (size == "XL") {
    console.log("price is :250")
}
else if (size == "L") {
    console.log("price is :200")
}
else if (size == "M") {
    console.log("price is :100")
}
else if (size == "S") {
    console.log("proce is :50")
}
else {
    console.log("This size is not available")
}

// Nested if-else statement
let Marks = 90;
if (Marks >= 33) {
    console.log("PASS")
    if (Marks >= 80) {
        console.log("your grade is :A+")
    }
    else {
        console.log("your grade is :B+")
    }
}
else {
    console.log("fail")
}











