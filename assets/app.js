//Now we are going to assign the variable
// so to declare a variable we use let.In javascript there is no need to declare the type of the variable used
// Number data type
let age = 18;
console.log(age);

// // string in Javascript
let brand = "This is a brand";
console.log(brand);

//boolean
let isTrue = "true";

// null is like a void.It contains no ElementInternals. But according to the javascript the num contain the value inside it but it is not visible
let anything = null;
console.log(null);

//console.log(food)
//but if you just define like I done in above then it wil show a reference error. Because the food is not define.

//if you want to know the data type of the variable then use console.log(typeof) such like this
console.log(typeof 18);
console.log(typeof 18.6565658);
console.log(typeof 18.65656518);
console.log(typeof True);
console.log(typeof False);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof "c");

// Assignment operators

/*Modifying the value*/
let work = 8;
work = 10;
console.log(work);
// if we want to change the value then above is the way to change the value

/*let work=8
    console.log(work)
    work=10
    console.log(work)*/
// if we have written in the above manner so it will first show the previous value then it will show the value that is changed

/*const work=8;
    work=10
    console.log(work)
    if you don't want to modify the value then use the const*/

//increment the value
let sweet = 10
sweet = sweet + 10
//sweet += 10 you can write like this also
console.log(sweet)

//decrement the value
let sweety = 10
sweety = sweety - 5
//sweet -= 5
console.log(sweety)

//multiplication the value
let y=10
y *=3
console.log(y)

//if you want to increase value just by 1 
let a=5
a++
console.log(a)

//predict the output of following
let thing=10
console.log(thing++)
// the ++ after the thing is a post increment operator that increases the value after log so the output is 10 only

let nick=10
console.log(++nick)
// the ++ before nick is a pre increment that increases the value before the log so the output i s11

// Comparison Operator

let c=10
let d=15
console.log(c < d)
console.log(c > d)
console.log(c <= d)
console.log(c >= d)

let e=10
let f='10'
console.log(e<f)
console.log(e>f)
console.log(e==f)
// the output of the above is true because the == double equal sign compares the value only value . It don't bother about the data type and all it just compares the values 
console.log(e===f)
// the === triple equal sign compares the values as well the type of data so its gonna be true only and only when the type and values are same else it will print false

let g =10
let h=5
console.log(g+h)
console.log(g-h)
console.log(g*h)
console.log(g/h)
console.log(g**h)
console.log(g%h) //% give the remainder

// type casting happening in the background
let i=5
let j='5'
console.log(i+j)
console.log(Number(j)+i)//in this way we can convert a string to a number and then add it

//logical operators

// there are two types of logic and and or logic

console.log('true && true',true && true)
console.log('true && false',true && false)
console.log('false && true',false && true)
console.log('false && false',false && false)

console.log('true || true',true || true)
console.log('true || false',true || false)
console.log('false || true',false || true)
console.log('false || false',false || false)

//functions 

// function greet() {
//     console.log('HI')
// }
// greet()

function greet(Name) {
    console.log('HI' + Name)
}
greet()
// if you write tha above code then you can see that it won't throw an error it will show undefined. But why it is so because we haven;t define the Name then also no error . This is because it is itself defined it in the function and since we haven't given any value to it so it is showing undefined. It is pre defined in the function. It is a local scope variable.

function geet(Name="defaultname"){
    console.log(Name)
}
geet()

function geet(Name="defaultname"){
    console.log(Name)
}
geet("Anushka")

/*function geet(Name="defaultname"){
    
}
console.log(Name)//if we write the console here then it will throw the error. The console should be inside the body only . else it will throe an error .

geet("Anushka")*/

//function to add two values and return it

function add(A = 0,B = 0){
    const C =A+B
    return C
}
 const sum=add(10,15)
 console.log(sum)

//hoisting in javascript
// greek1()
// greek2()
// function greek1()//this is a way to declare the function
// {
//     console.log("Good Morning")
// }

// let greek2=function(){//another way to declare the function
//     console.log("Guten Tag")
// }

/*so as you can see that its printing Good Morning but not printing Gunten Tag the reason is that function greek1() it is a pure function but function greek1() is not a pure way of writing the function 
so whenever we write function like this function greek1() so it takes function greek1() above the greek1() so it print Good Morning.
but it is not with greek2=function() it don't come above the greek2() hence it is throwing the error*/


let greek3=()=>{//greek2=function remove this func and write =>
    console.log("suraj")
}
greek3()
// there is a another way of writing function that just remove the function and add => after  the curly brackets

let great1= function(nut){
    return "HI " +nut;
}
let great2=(nut)=> "HI " + nut



 console.log(great1("Mummy"))
 console.log(great2("Papa"))

 

