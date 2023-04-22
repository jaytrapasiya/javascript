
	class Customer{
		
		getUser = () =>{
			var data = "";
			fetch("https://jsonplaceholder.typicode.com/users")
			.then(response=>response.json())
			.then(userArray =>{
				userArray.map((user, index)=>{
					data +="<div class='four'>";
					data +="<h3>"+ user.name + "</h3>";
					data +="<p>"+ user.email + "</p>";
					data +="<p>"+ user.address.city + "</p>";
					data +="<p>"+ user.company.name + "</p>";
					data +="</div>";
				})
				document.getElementById("container").innerHTML = data;
			})

		}

		save = () =>{
			fetch("https://jsonplaceholder.typicode.com/users")
			.then(response=>response.json())
			.then(userArray =>{
				var jsondata = JSON.stringify(userArray); // array to json
				localStorage.setItem("alluser", jsondata); // storing under localStorage
				alert("Data sent to local Storage");
				window.location.href="localstorage.html";
			})
		}
	}
	
	const object5 = new Customer();