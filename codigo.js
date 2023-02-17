"use strict"

// $(function() {
// 	$(".toggle").on("click", function(){
// 		if ($(".item".hasClass("active"))){
// 			$(".item").removeClass("active");
// 			$(this).find("a").html("<i class='fa-solid fa-bars'>");
// 		} else{
// 			$(".item").addClass("active");
// 			$(this).find("a").html("<i class='fa-solid fa-times'></i>");
// 		}
// 	})
// })

const toggle = document.querySelector(".toggle")
const item = document.querySelectorAll(".item")

for (let i = 0; i < item.length; i++) {
     toggle.addEventListener("click", function() {
       item[i].classList.toggle("active");
     });
 }


const sidebar = document.querySelector(".sidebar")
const body = document.querySelector(".body")
const miTienda = document.querySelector(".mi-tienda")
sidebar.addEventListener("mouseover", ()=>{
	body.style.cssText = "Background: #ababab;"
	miTienda.style.cssText = "Background: #ababab;"
})
sidebar.addEventListener("mouseout", ()=>{
	body.style.cssText = "background: #cdcdcd;"
	miTienda.style.cssText = "background: #cdcdcd;"
})

const inputLogIn = document.querySelector(".input-log-in")
const logIn = document.getElementById('log-in')
const enviarLogIn = document.querySelector(".enviar-log-in")

logIn.addEventListener("click", ()=>{
	inputLogIn.classList.add("true")
	body.style.cssText = "Background: #ababab;"
	miTienda.style.cssText = "Background: #ababab;"
})

enviarLogIn.addEventListener("click", ()=>{
	inputLogIn.classList.remove("true")
	logIn.style.cssText = "Display: none;"
	body.style.cssText = "Background: #cdcdcd;"
	miTienda.style.cssText = "Background: #cdcdcd;"
})

const inputSignUp = document.querySelector(".input-sign-up")
const signUp = document.getElementById('sign-up')
const confirmarSignUp = document.querySelector(".confirmar-sign-up")
const miCuenta = document.querySelector(".mi-cuenta")

signUp.addEventListener("click", ()=>{
	inputSignUp.classList.add("true")
	body.style.cssText = "Background: #ababab;"
	miTienda.style.cssText = "Background: #ababab;"
})

confirmarSignUp.addEventListener("click", ()=>{
	inputSignUp.classList.remove("true")
	signUp.style.cssText = "Display: none;"
	body.style.cssText = "Background: #cdcdcd;"
	miTienda.style.cssText = "Background: #cdcdcd;"

	if (miCuenta.classList.contains("active")) {
		miCuenta.style.css = "Display: block;"
	}

})

