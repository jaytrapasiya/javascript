
    var a = "Apple";
    var b =  "mango";
    var c = "banana";
    var d = "orange";
    var e = "Grapes"

    var item =["Apple", "mango", "banana", "orange",];
    /*
        Structure of arry
        arrayName[indax] =>Element

        item[0]=>apple
        item[1]=>mango
        item[2]=>banana
        item[3]=>orange
        item[4]=>Grapes
        
    */

        console.log( item[0] );
        console.log( item[4]);
        console.log( item[ item.length-1] );

        console.log("----using for loop----");
        for(var i=0; i<item.length; i++){
            console.log(i,   item[i]);
        }

        console.log("----- For Loop in Desc Order-----");
        for(var i=item.length-1; i>=0; i--){
            console.log(i  ,  item[i] );
        }

        console.log("-----While Loop-----");
        var i=0;
        while( i<item.length)
        {
            console.log(item[i]);
            i++;
        }