interface User {
    name:string |number
    age: number | string
}


const test = (user:User) => {
     
}

const tes = {
    name:'kjkjk',
    age:33,
    gender:'man'
}

const l:User = {
    name:'kkk',
    age:88,
    gender:'kjkj'
}
const jjj:User = tes
test(tes)