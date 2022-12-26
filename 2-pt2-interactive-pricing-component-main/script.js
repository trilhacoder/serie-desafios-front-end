/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

let pageviewsPrice = [
    { views: 0, price: 0 },
    { views: 10, price: 8 },
    { views: 50, price: 12 },
    { views: 100, price: 16 },
    { views: 500, price: 24 },
    { views: 1000, price: 36 }
]

let rangeInput = document.querySelector("#range-pageviews")
rangeInput.addEventListener("input", function() {
    atualizaInputRange(rangeInput)
})

atualizaInputRange(rangeInput)

function atualizaInputRange(rangeInput) {
    let index = rangeInput.value
    let max = rangeInput.max
    let views = pageviewsPrice[index].views
    let price = pageviewsPrice[index].price
    
    console.log(index)
    console.log(pageviewsPrice[index])
    rangeInput.style.backgroundSize = index/max*100 + "% 100%"

    document.querySelector("#views").textContent = views

    let checkboxInput = document.querySelector("#tipoPagamento")
    let tipoPagamentoEhAnual = checkboxInput.checked

    document.querySelector("#price").textContent = price

    if (tipoPagamentoEhAnual) {
        let precoMensal = document.querySelector("#price").textContent
        let precoAnual = precoMensal * 12 * 0.75
        document.querySelector("#price").textContent = precoAnual
        document.querySelector("#pagamentoRotulo").textContent = "year"        
    }    
}

let checkboxInput = document.querySelector("#tipoPagamento")
checkboxInput.addEventListener("change", function() {
    let tipoPagamentoEhAnual = checkboxInput.checked
    console.log(tipoPagamentoEhAnual)
    if (tipoPagamentoEhAnual) {
        let precoMensal = document.querySelector("#price").textContent
        let precoAnual = precoMensal * 12 * 0.75
        document.querySelector("#price").textContent = precoAnual
        document.querySelector("#pagamentoRotulo").textContent = "year"        
    } else {
        let precoAnual = document.querySelector("#price").textContent
        let precoMensal = precoAnual / 12
        document.querySelector("#price").textContent = precoMensal
        document.querySelector("#pagamentoRotulo").textContent = "month"
    }
})

