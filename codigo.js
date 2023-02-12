"use strict"

const sidebar = document.querySelector(".sidebar")
const body = document.querySelector(".body")
sidebar.addEventListener("mouseover", ()=>{
	body.style.cssText = "Background: #ababab;"
})
sidebar.addEventListener("mouseout", ()=>{
	body.style.cssText = "background: #ededed;"
	
})



$(function() {
	$(".toggle").on("click", function(){
		if ($(".item".hasClass("active"))){
			$(".item").removeClass("active");
			$(this).find("a").html("<i class='fa-solid fa-bars'>");
		} else{
			$(".item").addClass("active");
			$(this).find("a").html("<i class='fa-solid fa-times'></i>");
		}
	})
})





$(document).ready(function(){

	const publicaciones = document.querySelector("wrapper")



