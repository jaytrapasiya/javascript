
var city=[
    "Banglore",
    "Mumbai",
    "Pune",
    "Chennai",
    "Kolkata",
    "Delhi",
    "Patna",

];
/*
    Syntax of map();
    arryName.map((element , index) =>{
        console.log(element);
    })
*/

city.map((cityname, index)=>{
    console.log(index , cityname);
})

console.log("----map without fat arrow");

city.map( function(cityname, index){
    console.log(index, cityname);
} )