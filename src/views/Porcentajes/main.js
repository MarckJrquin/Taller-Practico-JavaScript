const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector(".btn");

const resultCard = document.querySelector(".result-card")
const spanResult = document.querySelector(".result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento(){

    resultCard.innerText = "";

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    resultCard.classList.remove('inactive');

    if(!price || !discount){
        resultCard.innerText = 'Por favor, llena el formulario';
        return
    }

    if(discount > 100){
        resultCard.innerText = 'No invente';
        return
    }

    const newPrice = (price * (100-discount)) / 100;

    resultCard.innerText = 'El precio con descuento es ';
    const spanResult = document.createElement('span');
    spanResult.classList.add("result");
    spanResult.innerText = newPrice;
    resultCard.append(spanResult)
}