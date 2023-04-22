// switch case
var url = "enquiry";

switch(url){
    case "home":
    console.log("display Home.html File");
    break;

    case "signup":
    console.log("display Register.html File");
    break;
 
    case "login":
    console.log("disply Vogin.gtml File");
    break;

    case "contact":
    case "enquiry":
    console.log("Display Contact.html File");
    break;

    default:
        console.log("Display Welcome.html File")
 }