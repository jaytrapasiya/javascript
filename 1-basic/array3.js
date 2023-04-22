var item = ["Laptop", "Mouse", "Keyboard", "Water", "Bottle", "Internet"];
console.log("The Total Element :", item.length);

item.map( (value, position) =>{
    console.log("The index :", position , "Data is : ", value);
})

console.log("Array in reverse order");
item.reverse(). map((name, index)=>{
    console.log("The item is : ", name, " The value is : ", index)
})

console.log("-----only value of array-----");
item.map( (name, index)=>{
    console.log(name);
    console.log("----------");
} )

console.log("-----map () without index-----");
item.map(itemname =>{
    console.log(itemname);
    console.log("..........")
})


console.log("-----Using forEach()-----");
item.forEach ((name, index)=>{
    console.log(index , "--------" , name);
})