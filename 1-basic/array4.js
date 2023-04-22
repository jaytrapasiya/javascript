 var item = {
    name:"Apple",
    price:300,
    qty:10,
    about:"It is imported apple"
 };
 /*
    object = {
        property:value,
        property:value,
    }
 */

    console.log(item.name);
    console.log(item.price);
    console.log(item.qty);
    console.log(item.about);

    var itemlist = [
        {name:"Apple", price:300, qty:10, about:"Good"},
        {name:"Mango", price:100, qty:30, about:" Very Good"},
        {name:"Orange", price:80, qty:70, about:"Good"},
        {name:"Banana", price:40, qty:20, about:"Very Good"},
        {name:"Grapes", price:80, qty:60, about:"Ok"},
        {name:"Milk", price:40, qty:90, about:"Best"}
    ];

    console.log(itemlist.length);
    itemlist.map((eachitem, index)=>{
        console.log(eachitem.name , eachitem.price, eachitem.qty, eachitem.about);
        console.log(".........");
    })