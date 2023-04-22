



function clk1() {
  function printData(data) {
  document.getElementById("userlist").innerHTML = data;
}
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:2222/userlist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var userArray = JSON.parse(this.responseText); // jsone to Array

          console.log(userArray);
          var data ="";
          userArray.forEach((user, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + user.id +"</p>";
            data +="<p>" + user.name +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}

function clk2() {
  function printData(data) {
  document.getElementById("booklist").innerHTML = data;
}
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:1111/booklist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var bookArray = JSON.parse(this.responseText); // jsone to Array

          console.log(bookArray);
          var data ="";
          bookArray.forEach((book, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + book.id +"</p>";
            data +="<p>" + book.name +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}



function clk3() {
  function printData(data) {
  document.getElementById("company").innerHTML = data;
}
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:3333/companylist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var bookArray = JSON.parse(this.responseText); // jsone to Array

          console.log(bookArray);
          var data ="";
          bookArray.forEach((book, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + book.id +"</p>";
            data +="<p>" + book.name +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}

function clk4() {
  function printData(data) {
  document.getElementById("emp").innerHTML = data;
}
  var xmlhttp = new XMLHttpRequest(); 
  xmlhttp.open("GET","http://localhost:4444/emplist"); 
  xmlhttp.send();  


      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var empArray = JSON.parse(this.responseText); // jsone to Array

          console.log(empArray);
          var data ="";
          empArray.forEach((emp, index)=>{
            data +="<div class='myuser'>";
            data +="<p>" + emp.id +"</p>";
            data +="<p>" + emp.name +"</p>";
            data +="</div>";
          })
          printData(data);
        }
      };
}
function save(){
  var itemname = document.getElementById("newitem").value;
  item.push(itemname);
  getitem();// reload the list after adding the item
  document.getElementById("newitem").value="";
}
