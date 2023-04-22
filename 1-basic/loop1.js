/*
    syntax for for loop
    for(info; condition; ++/--){
        statement
    }
*/
for(var i=1; i<=10; i++){
    console.log("For say : ", i);
}

console.log("----+by 2");
for(var i=1; i<10; i=i+2){
    console.log("The Counter is : ", i);


}console.log("-----Descending Orrder Loop-----");

for(var i=20; i>=1; i--){
    console.log("THE Loop :, i");
}
console.log("---- 2001 to 2022 ----");
    for(var i=2001; i<=2022; i++){
        console.log(i);
    }
    console.log("---- 2001 to 2022 only even no year----");

    for(var i=2001; i<=2022; i++){
        if( i%2==0){
        console.log("The Even No Year :", i);
        }
    }
    
    for(var a=1; a<=20;a++){
        if( a%2==0){
            console.log("The Even No Year :");
            }
    }