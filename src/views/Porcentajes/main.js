/* <========== Data ==========> */
/* Coupons */
const voucher = [
    {codigo: 'PLATZI', porcentaje: 10},
    {codigo: 'XMAS', porcentaje: 35},
    {codigo: 'HALLOWEEN', porcentaje: 25},
    {codigo: 'BLACKFRIDAY', porcentaje: 50}
]

/* <========== Descuento con Porcentaje ==========> */
/* Inputs */
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector(".btn");

/* Input & Content Tabs */
const inputRadioContent1 = document.querySelector("#tab1");
const inputRadioContent2 = document.querySelector("#tab2");
const tabContent1 = document.querySelector("#content1");
const tabContent2 = document.querySelector("#content2");

/* Result cards */
const resultCard = document.querySelector(".result-card")
const spanResult = document.querySelector(".result");


/* Functions */
inputRadioContent1.addEventListener("click", () =>{
    tabContent1.classList.remove("inactive");
    tabContent2.classList.add("inactive");
});

inputRadioContent2.addEventListener("click", () =>{
    tabContent2.classList.remove("inactive");
    tabContent1.classList.add("inactive");
    
});

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento(){

    resultCard.innerText = "";
    resultCard.classList.remove('inactive');
    const price = Number(inputPrice.value);
    let newPrice;

    if(tabContent2.classList.contains("inactive")){
     
        const discount = Number(inputDiscount.value);
        if(!price || !discount){
            resultCard.innerText = 'Por favor, llena el formulario';
            return
        }

        if(discount > 100){
            resultCard.innerText = 'No invente';
            return
        }

        newPrice = (price * (100-discount)) / 100;

    } else {
        const coupon = inputCoupon.value;

        if(!coupon) {
            resultCard.innerText = 'Por favor, llena el formulario';
            return;
        }

        const discount = voucher.find( e => e.codigo === coupon );

        if(!discount){
            resultCard.innerText = 'Cupón invalido';
            return;
        }

        newPrice = (price * (100-discount.porcentaje)) / 100;
    }

    resultCard.innerText = 'El precio con descuento es ';
    const spanResult = document.createElement('span');
    spanResult.classList.add("result");
    spanResult.innerText = newPrice;
    resultCard.append(spanResult);
}




