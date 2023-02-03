let $iconeAbrirMenu = document.querySelector("#icone-abrir-menu")
$iconeAbrirMenu.addEventListener("click", function() {
    console.log("abrir menu")
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})

let $iconeFecharMenu = document.querySelector("#icone-fechar-menu")
$iconeFecharMenu.addEventListener("click", function() {
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})