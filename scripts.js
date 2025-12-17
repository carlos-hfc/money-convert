const EUR = 5.32
const USD = 4.87
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = event => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(USD)
      break;
    case "GBP":
      convertCurrency(GBP)
      break;
    case "EUR":
      convertCurrency(EUR)
      break;

    default:
      break;
  }
}

function convertCurrency(price) {
  try {    
    description.textContent = `${Intl.NumberFormat("pt-BR", { style: "currency", currency: currency.value }).format(1)} = ${Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}`

    result.textContent = Intl.NumberFormat("pt-BR", { style:"currency",currency:"BRL"}).format(amount.value * price)
    
    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}