let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");

mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})

document.getElementById("buttonSubmit")
    .addEventListener("click", function () {
        pushBoodschappen()
    });


function pushBoodschappen()
{
    //Neem waarde van het inputField
    let inputText = document.getElementById('input').value;

    //maak de div met opmaak van class "element"
    let blokElement = document.createElement("div");
    blokElement.className = "element";
    blokElement.innerText = inputText;

    //voeg div toe
    document.getElementById("output").appendChild(blokElement);
}
