//Selecteurs
const button = document.querySelector("#btn");
const buttonNuit = document.querySelector("#btnnuit");
const buttonJour = document.querySelector("#btnjour");
const paragraphs = document.querySelector("p");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const boite = document.querySelector("#boite");
const footer = document.querySelector("footer");
const matches = document.querySelectorAll("iframe[data-src]");
const Barre = document.querySelector("Barre");
for (let i = 0; i < 4; i++) {
    console.log("Hello world" + i);
}

console.log(buttonNuit)
//Evenements
buttonNuit.addEventListener("click", function() {
    console.log('ok')
    body.style.backgroundColor = "grey";
    paragraphs.style.color = "white";
    h1.style.color = "white";
    h2.style.color = "white";
    Barre.style.backgroundColor = "Gainsboro";
    Barre.style.color = "white";

})

buttonJour.addEventListener("click", function() {
    console.log('ok')
    body.style.backgroundColor = "#e4ecc6"
    paragraphs.style.color = "black";
    h1.style.color = "grey";
    h2.style.color = "grey";
})


