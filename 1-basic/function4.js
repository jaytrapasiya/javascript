var three = (start=0, end=0) =>{
    var odddata = "";
    var evendata="";
    for(var i=start; i<=end; i++){
        if(i%2==0){
            evendata = evendata + i + " , ";
        }else{
            odddata = odddata + i + " , ";
        }
    }
    console.log("Even No : ", evendata);
    console.log("odd No : ", odddata);
}

three(5 , 15);
three(50 , 100);