// let brand = "mercedes"
// //console.log(brand)
// console.log(brand.toUpperCase())

//JSON-Javascript object notation
// const temp={
//     //left are keys and right are values in objects.
//     age: 18,
//     brand: "Mercedes",
//     greet: () => {console.log('hi')}//here we have declare a function inside the an object.
// }
// console.log(temp.age)
// console.log(temp.brand)
// console.log(temp['brand'])//you can write like this also instead of the above one .
// temp.greet()

const temp = {
    age:18,
    brand: "Mercedes",
    greet: () => {console.log('hi')},
    //getBrand: () =>{ console.log(brand)},//here it is showing an error that brand is not defined it is a wrong way of writing this
    getBrand: () =>{ console.log(temp.brand)}//this is the correct way of writing temp.brand
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
temp.getBrand()

console.log(this)//it will show the path of the parent for this the parent is the window .
console.log(window)//for this too parent is window

const car = {
    experience: 4,
    company: "google",
    // getBranch: () =>{ console.log(this)}
    getBranch:  function () { console.log(this) }//instead of using=> write function then it will or else it will show an error
    // getBranch:  function () { console.log(this.company) }//uncomment and run this command 
    // you can access objects by this
    // this.experience 
    // this.company
}
car.getBranch()

//lets talk about arrays now.
let arr = [ 1,2,3,45,"strings","b",{age: 10} ]
console.log(arr)//array is an object only
console.log(typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[6])

/*
subarrays can also be created in arrays
 let array = [ 1,2,3,45,"strings","b",[1,2,4] ]*/

let ar = [ 1,2,3,4,5]

//iterate over an array. using for loop in javascript.
for(let i=0;i<ar.length;i++)
{
    console.log(ar[i])
}
let j=0
while (j<ar.length) 
{
    console.log(ar[j])
    j++
}

//array methods in javascript

let array= [1,2,3,4]
let iter= 0
const callback = function ()
{
iter++
console.log('You called me',iter)
}

array.forEach(callback)

// there is no need to used for and while like in other language we use . In javascript we have for each and call back methods to use the lopping methods
let Array= [1,2,3,4,"hi","John","Daffy"]
const Callback = function (element,iteration)//(e,i) or just write this  
{
    console.log(element,iteration)
}
arr.forEach(Callback)

//  elements tells the value on that specific index 
//  and the iteration tells the index at that value

// or need to write line 80-86 just write all these things in a single line
// arr.forEach((e,i) => console.log(e,i))

//adding an element in an array
let arayy= [1,2,3]
console.log(arayy.push)//it returns the no. which is being pushed
console.log(arayy)
//push adds element in the ending of an array

let aro= [1,2,3]
console.log(aro.unshift())//it returns the no. which is being unshift
console.log(aro)
//unshift adds the element in the starting of the array

let Arayy = [1,2,3]
console.log(Arayy.shift())
console.log(Arayy)
//shift removes the elements from the starting of the array

let Arayo = [1,2,3]
console.log(Arayo.pop())
console.log(Arayo)
//pop removes the element from the ending of the array.

//slicing of the array
let Arrr=[1,2,3,4,5,6]
console.log(Arrr.slice(0,4))
//in slicing (0,4) the element from index 0 to 3 is removed but the last (0,4) 4th index element is not removed. if (0,2) is written then elements at index 0,1 is only removed

//returning the map for returning the value
let array1=[1,2,3,4,5,6]
const calback = (ele,i) =>{
    return ele*10
}
const new_array= array1.map(calback)//returns the value of calback
console.log(new_array)
console.log(array1)

