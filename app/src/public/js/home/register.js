"use strict"

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    name = document.querySelector("#name"),
    confirmPwd = document.querySelector("#pwd-confirm"),
    registerBtn = document.querySelector("#button");
   


registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name:name.value,
        pwd: pwd.value,
        confirmPwd:confirmPwd.value,
    };


    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href="/login";
        }else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error("회원가입 중 에러 발생");
    });

}