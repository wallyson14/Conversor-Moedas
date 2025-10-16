const USD = 5.25;
const EUR = 5.53;
const GBP = 6.23;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener('input', function (e) {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
    });

form.onsubmit =  (event) => {
    event.preventDefault();

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

function convertCurrency(amount , price, symbol) {
 try{
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `;

    let total = (amount * price).toFixed(2);
    result.textContent = ` ${formatCurrencyBRL (total)} `;

    if (isNaN(total)){
        return alert("Por favor, insira um valor válido.");
    };

    footer.classList.add("show-result"); 

}catch(error){
     
     footer.classList.remove("show-result");
     console.log(error);  
     alert("Ocorreu um erro, tente novamente mais tarde.");
   
    }
}
function formatCurrencyBRL(value){
    return Number(value).toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL' });

}
