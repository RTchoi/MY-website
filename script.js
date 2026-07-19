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
        "https://f8a4-2001-e68-541b-f269-dd22-2220-2c05-ee8a.ngrok-free.app/signup",
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
