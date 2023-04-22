console.log("------ Nested Lopp------");
var i=1;
while(i<=10){
    console.log(i,"----outer Loop----");

    for(var j=1; j<=i; j++){
        console.log(j, "inner Loop");
    }

i++;
console.log("---------------------");
}


