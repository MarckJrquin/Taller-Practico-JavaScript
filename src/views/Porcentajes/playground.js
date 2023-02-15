const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });


function solution(users, id) {
    const user = users.find( e => e.id === id );
    if(user){
        return user.name;
    } else {
        return false;
    }
}

console.log(solution(users, 456));
console.log(solution(users, 999));