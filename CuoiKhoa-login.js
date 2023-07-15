let email = "ngokhoinguyen29.04.2007@gmail.com"
let password = "Cornycorn@2904"
let inputEmail = document.getElementById("email")
console.log(inputEmail.value)
let inputPassword = document.getElementById("password")
console.log(inputPassword.value)

$(document).on("click", "button", function(e){
    e.preventDefault();
    if(inputEmail.value == "" || inputPassword.value == ""){
        alert("Bạn chưa nhập đủ thông tin");
        return;
    }
    if( inputEmail.value == email && inputPassword.value == password){
        alert("Email và mật khẩu hợp lệ")
    } else {
        alert("Email hoặc mật khẩu không hợp lệ")
    }
})


document.getElementById("close-button").onclick = function () {
     location.href = "./Cuoikhoa.html";
}
  

