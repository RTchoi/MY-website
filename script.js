document
.getElementById("signupButton")
.addEventListener("click", function () {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("https://f8a4-2001-e68-541b-f269-dd22-2220-2c05-ee8a.ngrok-free.app/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    .then(response => response.json())

    .then(data => {

        if (data.success) {

            alert("회원가입이 완료되었습니다.");

            // 입력창 비우기
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";

        } else {

            alert(data.message);

        }

    })

    .catch(error => {

        alert("서버와 연결할 수 없습니다.");

        console.log(error);

    });

});
