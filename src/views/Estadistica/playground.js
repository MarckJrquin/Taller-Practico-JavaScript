function solution(obj) {

    return Object.entries(obj).map(obj => {
        return {id: obj[0], name: obj[1]}
    });
}

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};
  
console.log(solution(obj));