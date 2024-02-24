function login() {
    const user = document.querySelector(".user").value;
    const pw = document.querySelector(".password").value;
    const valid = document.querySelector(".valid");
    const form = document.querySelector("form");
    if (user === "Ardiona" && pw === "123_ABC") {
        window.open("pages.html");
    } else {
        alert("Incorect Password or Username");
    }
}

// show password
const password = document.querySelector(".password");
const show_pw = document.querySelector(".show_password");
const hide_pw = document.querySelector(".hide_password");

hide_pw.addEventListener("click", () => {
    show_pw.style.display = "inline";
    hide_pw.style.display = "none";
    password.type = "text";
});
show_pw.addEventListener("click", () => {
    show_pw.style.display = "none";
    hide_pw.style.display = "inline";
    password.type = "password";
});

const pw = document.querySelector(".retype_password");
const show_password = document.querySelector(".show_pw");
const hide_password = document.querySelector(".hide_pw");

hide_password.addEventListener("click", () => {
    show_password.style.display = "inline";
    hide_password.style.display = "none";
    pw.type = "text";
});
show_password.addEventListener("click", () => {
    show_password.style.display = "none";
    hide_password.style.display = "inline";
    pw.type = "password";
});

function validate() {
    const pw1 = document.querySelector(".password").value;
    const pw2 = document.querySelector(".retype_password").value;

    if (pw2 !== pw1) {
        alert("* Password doesn't match *");
    } else {
        window.open("index.html");
    }
}
