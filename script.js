document
.getElementById("signupButton")
.addEventListener(
"click",
function(){

    let username =
    document
    .getElementById("username")
    .value;

    let password =
    document
    .getElementById("password")
    .value;

    fetch(
        "http://localhost:5000/signup",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username:username,

                password:password

            })

        }

    )

    .then(
        response=>response.json()
    )

    .then(
        data=>{

            alert(data.message);

        }

    );

}
);
