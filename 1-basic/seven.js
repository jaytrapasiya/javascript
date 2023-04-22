
// isNaN() => TRUE(string), FALSE(number)

var input = 200;
if( isNaN(input) ){
    console.log(input, " is string type...");
}else{
    console.log(input, " is number type...");
    if(input % 2==0){
        console.log(input, " is even no...");
    }else{
        console.log(input, " is odd no...");  
    }
}