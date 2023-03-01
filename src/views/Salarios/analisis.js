console.log(salarios);

const personaEnBusqueda = 'Bruce';

/* <===== Analisis Personal =====> */
function encontrarPersona(personaEnBusqueda){
    return salarios.find( persona => persona.name == personaEnBusqueda );
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map((elemento) => {
        return elemento.salario;
    });
    
    const medianaSalarios = funcionMediana(salarios);
    console.log(trabajos);
    console.log(salarios);
    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    console.log(porcentajesCrecimiento);

    const medianaPorcentajeCrecimiento = funcionMediana(porcentajesCrecimiento);

    console.log({medianaPorcentajeCrecimiento},{porcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const proyeccionDeAumento = ultimoSalario * medianaPorcentajeCrecimiento;

    const nuevoSalario = ultimoSalario + proyeccionDeAumento;

    console.log(nuevoSalario);
}


/* <===== Análisis Empresarial =====> */
const empresas = {};

for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn(`Empresa ${nombre} no existe`);
    } else if (!empresas[nombre][year]){
        console.warn(`La empresa ${nombre} no dio salario ese año`);
    } else {
        const medianaEmpresa = funcionMediana(empresas[nombre][year]);
        console.log(medianaEmpresa);
        return medianaEmpresa;
    }
}

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn(`Empresa ${nombre} no existe`);
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        console.log({listaMedianaYears});

        let porcentajesCrecimiento = [];

        for(let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento = crecimiento / salarioAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        console.log(porcentajesCrecimiento);

        const medianaPorcentajeCrecimiento = funcionMediana(porcentajesCrecimiento);

        console.log({medianaPorcentajeCrecimiento},{porcentajesCrecimiento});

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length-1];
        const proyeccionDeAumento = ultimaMediana * medianaPorcentajeCrecimiento;

        const nuevaMediana = ultimaMediana + proyeccionDeAumento;

        console.log(nuevaMediana);
    }
}


/* <===== Análisis General =====> */
function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    console.log({listaMedianas});

    const mediana = funcionMediana(listaMedianas);7

    return mediana;
}


function medianaTop10(){
    const listaMediana = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = listaMediana.sort((a,b)=> b - a);
    console.log(medianasOrdenadas);

    const limite = listaMediana.length * 0.10;
    const top10 = listaMediana.slice(0,limite);
    const medianaTop10 = funcionMediana(top10);

    console.log({top10});
    console.log({medianaTop10});

    return medianaTop10;
}