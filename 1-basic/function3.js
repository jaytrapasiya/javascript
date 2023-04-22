var one = () =>{
    console.log("The Even No between 1 to 10");
    for(var i=2; i<=10; i=i+2){
        console.log("The Even No : ", i);
    }
}

var two = () =>{
    console.log("The Even No between 1 to 10");
    for(var i=1; i<=10; i=i+2){
        console.log("The Even No : ", i);
    }
}

var three = () =>{
    var odddata = "";
    var evendata="";
    for(var i=1; i<10; i++){
        if(i%2==0){
            evendata = evendata + i + " , ";
        }else{
            odddata = odddata + i + " , ";
        }
    }
    console.log("Even No : ", evendata);
    console.log("odd No : ", odddata);
}

one();
two();
three();