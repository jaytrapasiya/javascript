
class Test{
    constructor(){
        this.mobile=9999999999;
        this.email="help@xyz.com";
        this.contactName = "Alex";
    }

    home(){
        console.log("Welcome Home");
        console.log("Help Line : ", this.mobile);
        console.log("\n");
    }

    about(){
        console.log("About Us");
        console.log("e-maile Us  - ", this.email);
        console.log("Help Line : ", this.mobile);
        console.log("\n");
    }
    contact(){
        console.log("Contact Us ");
        console.log("e-maile Us  - ", this.email);
        console.log("Help Line : ", this.mobile);
        console.log("contact person : ",this.contactName);
        console.log("-------------------------")
        this.home();
    }
}

var object1 = new Test();

object1.home();
object1.about();
object1.contact();

console.log(object1.mobile);

/*
    class : it Is collection of member Variable and member method
    member variable : those variables, get defined constructor "this" opretor
                        the member variable can user inside and outside of class too.

    member  methode / function - All the user defaid function of a class is class is called
                        member function.

    constructor - it is called life cycle function of javascript. 
                it is pre-defined function.
                it use defind member variable ofcurrent class. 

    this - it called object of curect class.
        if use to call any assets of a class but inside currect class.
        
    object of a class - it is intance of a class. 
                it is to access the assets of a class.
    exatends - it use to inherit the feature of 1 class to other class.
    inheritance - it give feature to inherit one class feature to another class using
                    extends keyeord
*/