// Cuadrado
function calcularCuadrado(lado){
    return {
        perimetroCuadrado: lado * 4,
        areaCuadrado: lado * lado
    }
}

console.log(calcularCuadrado(5));


// Triangulo
function calcularTriangulo (lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log(calcularTriangulo(6, 6, 4, 5.5));


// Triangulo Isosceles -> Altura
function alturaTrianguloIsosceles(lado, base){
    if ( lado != base) {
        const altura = Math.sqrt( (lado ** 2) + ((base ** 2)/4) );
        return {altura: altura}
    } else {
        return "Este no es un triangulo isosceles";
    }    
}

console.log(alturaTrianguloIsosceles(6, 4));


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

console.log(alturaTrianguloEscaleno(16, 8, 10));
console.log(alturaTrianguloEscaleno(7, 8, 7));


// Circulo
function calcularCirculo(radio){
    return {
        radio: radio,
        diametro: radio * 2,
        circunferencia: (radio * 2).toFixed(2) * Math.PI.toFixed(2),
        area: Math.PI.toFixed(2) * (radio ** 2).toFixed(2)
    }
}

console.log(calcularCirculo(3));

