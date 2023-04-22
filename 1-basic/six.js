var a = 50;
var b = 49;
var c = 55;
var d =100;
var e =120;

// if else if
if ( a>b && a>c &&a>d&& a>e ){
    console.log (a, b , c, d, e , " - 1 The heigher value is :", a);
}

else if( b>a && b>c&&b>d && b>e){
    console.log (a, b , c, d , e, " - 2 The heigher value is :", b);
}
else if (c>a && c>b&&c>d && c>e){
    console.log (a, b , c, d , e, " - 3 The heigher value is :", c);
}
else if (d>a && d>b && d>c && d>e){
    console.log (a, b , c, d , e, " - 4 The heigher value is :", d);
}
else{
    console.log (a, b , c, d, e, " - 5 The heigher value is :", e);
}
