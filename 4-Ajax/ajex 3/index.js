
        var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length1").innerHTML = officedataArray[0].software.length;
            })



        var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length2").innerHTML = officedataArray[0].customer.length;
            })

            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length3").innerHTML = officedataArray[0].product.length;
            })

            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length4").innerHTML = officedataArray[0].seo.length;
            })
        

            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length5").innerHTML = officedataArray[0].user.length;
            })

            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length6").innerHTML = officedataArray[0].billing.length;
            })

            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length7").innerHTML = officedataArray[0].content.length;
            })


            var data = "";
        fetch(" http://localhost:1234/officedata")
            .then(response => response.json())
            .then(officedataArray => {
                // alert(userArray.length);
                console.log(officedataArray);

                officedataArray.map((officedata, index) => {
                    data += "<p class='mydata'>" + officedata.product + "</p>";
                })
                document.getElementById("length8").innerHTML = officedataArray[0].client.length;
            })
