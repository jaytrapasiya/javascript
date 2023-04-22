
class shop{
    constructor(){
        this.item = ["Lux Soap", "Washing Power", "Rice", "Potato"];
    }

    openShop = () =>{
        var data ="<h1>Hi, Shop is Open Now </h1>";

        this.item.map((name, slno)=>{
           data+= "<p>"+ slno + "."+ name + "</p>";
        });

        data+= ("<p>Thank ! Visit Again...</p>");
        this.printData(data);
    }

    printData = (data) =>{
        document.getElementById("container").innerHTML = data;
    }

    closeShop = () =>{
        var msg = "<h1>shop will open 6:AM, Close 9:PM </h1>";
        this.printData(msg);
    }

    save = () =>{
        var newitem = document.getElementById("newitem").value;
        this.item.unshift(newitem); // to add new element at begning of array
        this.openShop();// to reload the item list
        document.getElementById("newitem").value="";
        document.getElementById("msg").innerText=newitem + "Added Successfully !";
    }
}
const object3 = new shop();
