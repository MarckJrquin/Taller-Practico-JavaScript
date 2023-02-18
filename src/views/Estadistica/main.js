/* <===== Data & Variables =====> */
//const data = [91, 88, 78, 90, 100, 61, 75, 40];
const resultContent = document.querySelector('.results');


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


/* <===== Dynamic Inputs =====> */
const input_fields = document.querySelector('#input_fields');
const add_more_fields = document.querySelector('#add_more_fields');
const remove_fields = document.querySelector('#remove_fields');

add_more_fields.onclick = function(){
  const newField = document.createElement('input');
  newField.setAttribute('type','number');
  newField.setAttribute('name','inputs[]');
  newField.setAttribute('class','input_field');
  newField.setAttribute('placeholder','69');
  input_fields.appendChild(newField);
}

remove_fields.onclick = function(){
  const input_tags = input_fields.getElementsByTagName('input');
  if(input_tags.length > 2) {
    input_fields.removeChild(input_tags[(input_tags.length) - 1]);
  }
}


/* <===== Button functionality =====> */
const btn = document.querySelector('#btn');

btn.addEventListener('click', printResult);

function printResult() {
    // obtenemos los elementos por Name
    resultContent.innerText = "";
    resultContent.classList.remove('inactive');
    const arrInputs = document.getElementsByName('inputs[]');
    const arrInputsValues = [];

    // obteniendo los datos de los input en un arreglo
    for(let i = 0; i < arrInputs.length; i++){
        if(!arrInputs[i].value){
            // validamos si existe algun input vacio
            resultContent.innerText = 'Por favor, rellene todo los campos';
            return;
        } else {
            arrInputsValues.push(Number(arrInputs[i].value));
        }
    }

    // Promedio con Reduce
    const promedio = arrInputsValues.reduce(funcionPromedioReduce) / arrInputsValues.length;
    dataMapping(promedio.toFixed(2), 'Promedio');

    // Mediana
    const mediana = funcionMediana(arrInputsValues);
    dataMapping(mediana.toFixed(2), 'Mediana');

    // Moda
    const moda = funcionModa(arrInputsValues);
    // si hay moda se imprime el resultado, en caso de no ser asi pus no se imprime :v
    if(moda){
        dataMapping(moda, 'Moda');
    }

    resultContent.classList.remove('inactive');
}

function dataMapping(value, type){
    let view = `
        <div class="result_${type}">
            ${type} <span>${value}</span>
        </div>
    `;
    resultContent.innerHTML += view;
}




