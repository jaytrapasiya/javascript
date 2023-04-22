function printData(data){
    document.getElementById("ajaxdata").innerHTML = data;
}

function gethome(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             printData(this.responseText);
          }
        };
        xmlhttp.open("GET","home.html");
        xmlhttp.send();
}

function getabout(){
    var xmlhttp = new XMLHttpRequest(); // a built in class name
    // it creating object of class
    xmlhttp.open("GET","about.html"); // it setup url using get methode
    xmlhttp.send(); // itsend request to above generated url 


        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             printData(this.responseText);
          }
        };
       
}

function getcontact(){
  var xmlhttp = new XMLHttpRequest(); // a built in class name
  // it creating object of class
  xmlhttp.open("GET","contact.html"); // it setup url using get methode
  xmlhttp.send(); // itsend request to above generated url 


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           printData(this.responseText);
        }
      };
     
}

function json1(){
  var data="";
  fetch("http://localhost:1234/userlist")
  .then(response=>response.json())
  .then(userArray =>{
   userArray.map((user, index)=>{
    data +="<div class='myuser'>";
    data +="<p>" + user.id + "</p>"
    data +="<p>" + user.name + "</p>"
    data +="</div>"
   })
   printData(data);
  })
}

function json2(){
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:1234/citylist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var cityArray = JSON.parse(this.responseText); // jsone to Array

          console.log(cityArray);
          var data ="";
          cityArray.forEach((city, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + city.id +"</p>";
            data +="<p>" + city.cityname +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}

function json3(){
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:1234/productlist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var productArray = JSON.parse(this.responseText); // jsone to Array

          console.log(productArray);
          var data ="";
          productArray.forEach((product, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + product.id +"</p>";
            data +="<p>" + product.pname +"</p>";
            data +="<p>" + product.price +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}

function json4(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var dataArray = JSON.parse(this.responseText);
       var data = "";
       dataArray.map((company, index)=>{
        data += "<tr>";
        data += "<td>" + company.id + "</td>";
        data += "<td>" + company.name + "</td>";
        data += "<td>" + company.emp + "</td>";
        data += "<td>" + company.city + "</td>";
        data += "<td>" + company.location + "</td>";
        data += "<td>" + company.sale + "</td>";
        data += "</tr>";
       })// end of map()
       var thead = "<table align='center' cellpadding='10' border='1'>";
       thead +="<tr> <th>id</th> <th>name</th> <th>employee</th> <th>city</th> <th>location</th> <th>sales</th> </tr>"
       var finaltable = thead + data + "</table>"
       printData (finaltable);
    }
  };
  xmlhttp.open("GET","http://localhost:1234/companylist");
  xmlhttp.send();
}