
 function one(){
    var a = 100;
    var b = 200;
    var c = a+b;
    console.log(a , b, "The Addition is " , c )
 }

 one();
 one();
 one();


 console.log("---------------")

 function two(a=0, b=0){
    var c = a+b;
    console.log(a , b, "The Addition is " , c )
 }
 two(20 , 40);
 two(10, 80);
 two();

 function three(){
   var a = 700;
   var b = 200;
   var c = a+b;
   console.log(a , b, "The Addition is " , c )
}
three();
 three();