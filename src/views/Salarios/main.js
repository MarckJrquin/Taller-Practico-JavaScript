/* <===== Promedio con for =====> */
function funcionPromedio(array){
    let acum = 0;
    for (let i = 0; i < array.length; i++) {
        acum += array[i];
    }

    const promedio = (acum / array.length);
    return promedio.toFixed(2);
}


/* <===== Promedio con Reduce =====> */
function funcionPromedioReduce(valorAcumulado, nuevoValor){
    return (valorAcumulado + nuevoValor);
}


/* <===== Mediana =====> */
function esPar(list){
    // si es par retorna false debido a que el resultado da 0 y js interpreta el 0 como false
    return !(list.length % 2);
}

function esImpar(list){
    // si es impar retorna true
    return (list.length % 2);
}

function funcionMediana(array){

    // ordenamos el arreglo
    array.sort((a, b) => a-b);

    // validamos si es par o impar
    // Math.round() Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)
    // Math.floor() Obtiene el numero entero anterior mas cercano (redondear hacia abajo).
    // Math.ceil() obtiene el numero entero siguiente mas cercano (redondear hacia arriba)
    if(esPar(array)){
        const posMediana = Math.ceil(array.length/2);
        const Mediana = (array[posMediana-1] + array[posMediana])/2;
        return Mediana;
    } else {
        const posMediana = Math.ceil(array.length/2);
        const Mediana = array[posMediana-1];
        return Mediana;
    }
}


/* <===== Moda =====> */
function funcionModa(array){

    // const listCount = {};
    // for (let i=0; i<array.length; i++){
    //     const elemento = array[i];
    //     if(listCount[elemento]){
    //         listCount[elemento] += 1;
    //     } else {
    //         listCount[elemento] = 1;
    //     }
    // }

    const obj = new Object();
    array.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++);

    // convertimos el objeto en un arreglo de arreglos con Object.entries
    const listArray = Object.entries(obj);

    // ordenamos el arreglo de arreglos
    listArray.sort((a, b) => b[1]-a[1]);

    
    if(listArray.length > 1){
        //en caso de haber 2 o mas valores con la misma frecuencia no existe moda. 
        // ejemplo: [[12,1],[5,1],[9,1],[7,1]]
        // ejemplo: [[12,3],[5,3],[9,2],[7,1],[8,1]]
        if( (listArray[0][1]===listArray[1][1]) ){
            console.log("false");
            return false;
        }
    }

    console.log(listArray[0][0]);
    const moda = listArray[0][0];
    return moda;
}




