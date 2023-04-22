
class Store{
    constructor(){
        this.item = ["Lux Soap", "Washing Power", "Rice", "Potato"];
    }
}

class MyShop extends Store{
    constructor(){
        super();
    }
    openShop = () =>{
        var data ="<h1>Hi, Shop is Open Now </h1>";
        this.item.map((name, slno)=>{
           data+= "<p>"+ slno + "."+ name + "</p>";
        });
        data+= ("<p>Thank ! Visit Again...</p>");
        document.getElementById("container").innerHTML = data;
    }
}

const object4 = new MyShop();