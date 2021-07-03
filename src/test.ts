interface Dog {
    type:'dog'
  bark:() => 'kkk'
}

interface Bird {
    type:'bird'
    fly:()=>'fly'
}

interface Monky {
    type:'Monky'
    punch:()=>'asdf'
}

type Animal = Dog | Bird |Monky

const func = (animal:Animal) =>{
  if(animal.type === 'bird'){
    animal.fly()
  } else if(animal.type === 'dog'){
     animal.bark()
  } else {
      const defa:never = animal
  }
}
