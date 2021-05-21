let colors=['red','green','blue']
console.log(colors[0]='yellow') //replacing values
console.log(colors[3]='grey') //adding a value
console.log(colors.length) //finding the length 
console.log(colors.sort()) //arranging in ascending 
console.log(colors[2]) //accessing elements
colors.push("black") //adding an element to the end
console.log(colors)
colors.unshift("purple") // adding element to the beginning
console.log(colors)
// const lastElement=colors.pop()   //removing an element from the end of an array
// console.log(lastElement)
console.log(colors.pop())
// const firstElement=colors.shift() //removing an array from the beginning of an array
// console.log(firstElement)
console.log(colors.shift()) 
console.log(colors)
let index=colors.indexOf("green") //finding an index of an element in an array
console.log(index)
console.log(Array.isArray(colors)); //To check if a value is an array
colors=[]
console.log(colors)
let numbers=[10,,20,30];  //sparse arrays
console.log(numbers.length);
numbers[10]=100;
console.log(numbers.length);

const fruits=["Apple","Orange","Strawberry"]; //empty an array by  setting length to zero
fruits.length=0;
console.log(fruits);


console.log(fruits.splice(0,fruits.length));
while(fruits.length>0){
    fruits.pop();
}
console.log(fruits);



const listNames=['Aluel','Belyse','Promise','Edna'];
listNames.length=3;
console.log(listNames);

 listNames.length=5;
 console.log(listNames);

console.log(typeof fruits)
console.log(listNames instanceof Array)
delete listNames[0]
console.log(listNames)








