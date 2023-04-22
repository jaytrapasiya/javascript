class website{
 
    printdata = (data) =>{
        document.getElementById("container").innerHTML=data;
    }
    
    home = () =>{
        var data = "<h1>Welcome Home</h1> <p>is working</p>";
        this.printdata(data);
    }
    about = () =>{
        var data = "<h1>Abbout Us</h1> <p>is working</p>";
        this.printdata(data);
    }
    contact = () =>{
        var data = "<h1>Contact Us</h1> <p>is working</p>";
        this.printdata(data);
    }
}
var object2 = new website();