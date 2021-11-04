/*
	Student Name: Robert Luke Stallard
	File Name: script.js
	Date: 11/04/2021
*/

// Mobile hamburger menu open function
function openMobileMenu() {
    var menu = document.getElementById("mobile-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
