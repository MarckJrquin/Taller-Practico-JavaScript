/* <==========  Cuadrado  ==========>*/
const inputLadoCuadrado = document.querySelector("#input-cuadrado");
const calcularCuadradoBtn = document.querySelector("#cuadrado-btn");
const resultadoAreaCuadrado = document.querySelector(".result-card__area-result");
const resultadoPerimetroCuadrado = document.querySelector(".result-card__perimeter-result");

calcularCuadradoBtn.addEventListener("click", calcularCuadrado);

function calcularCuadrado(){
    const lado = Number(inputLadoCuadrado.value);
    const areaCuadrado = lado * lado;
    const perimetroCuadrado = lado * 4;

    resultadoAreaCuadrado.innerText = areaCuadrado;
    resultadoPerimetroCuadrado.innerText = perimetroCuadrado;
}



/* <==========  Circulo  ==========>*/
const inputRadioCirculo = document.querySelector("#input-circulo");
const calcularCirculoBtn = document.querySelector("#circulo-btn");
const resultadoAreaCirculo = document.querySelector(".circle__area-result");
const resultadoCircunferenciaCirculo = document.querySelector(".circle__circumference-result");
const resultadoDiametroCirculo = document.querySelector(".circle__diameter-result");

calcularCirculoBtn.addEventListener("click", calcularCirculo);

function calcularCirculo(){
    const radio = Number(inputRadioCirculo.value);
    
    const diametro = radio * 2;
    const circunferencia = (radio * 2).toFixed(2) * Math.PI.toFixed(2);
    const area = Math.PI.toFixed(2) * (radio ** 2).toFixed(2);

    resultadoAreaCirculo.innerText = area;
    resultadoCircunferenciaCirculo.innerText = circunferencia;
    resultadoDiametroCirculo.innerText = diametro; 
}



/* <==========  Triangulo  ==========>*/
const inputLado1Triangulo = document.querySelector("#input-triangulo-l1");
const inputLado2Triangulo = document.querySelector("#input-triangulo-l2");
const inputLadoBaseTriangulo = document.querySelector("#input-triangulo-l3b");
const calcularTrianguloBtn = document.querySelector('#triangulo-btn');
const resultadoAreaTriangulo = document.querySelector(".triangle__area-result");
const resultadoPerimetroTriangulo = document.querySelector(".triangle__perimeter-result");

calcularTrianguloBtn.addEventListener("click", calcularTriangulo);

function calcularTriangulo() {

    a = Number(inputLado1Triangulo.value);
    b = Number(inputLado2Triangulo.value);
    c = Number(inputLadoBaseTriangulo.value);
    
    const perimetro = (a + b + c);
    const semiperimetro = (perimetro / 2);
    const s = semiperimetro;
    const area = (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2);
    //const area = (base * altura) / 2;
    console.log(area);
    resultadoAreaTriangulo.innerText = area;
    resultadoPerimetroTriangulo.innerText = perimetro;
}

// Triangulo Isosceles -> Altura
function alturaTrianguloIsosceles(lado, base){
    if ( lado != base) {
        const altura = Math.sqrt( (lado ** 2) + ((base ** 2)/4) );
        return {altura: altura}
    } else {
        return "Este no es un triangulo isosceles";
    }    
}
// console.log(alturaTrianguloIsosceles(6, 4));

// Triangulo Escaleno -> Altura
function alturaTrianguloEscaleno(a, b, c){
    // a = lado1 y base   |   b = lado2   |   c = lado3
    if ( (a != b) && (a != c) && (b != c) ) {
        // semiperimetro
        const s = ((a + b + c)/2);
        // altura -> con fórmula que es derivada de la fórmula de Herón
        const h = ( (2/a) * (Math.sqrt(s*(s-a)*(s-b)*(s-c))) );
        return {altura: parseInt(h)};
    } else {
        return "Este no es un triangulo Escaleno";
    }    
}
// console.log(alturaTrianguloEscaleno(16, 8, 10));
// console.log(alturaTrianguloEscaleno(7, 8, 7));


