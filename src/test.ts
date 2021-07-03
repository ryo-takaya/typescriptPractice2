interface Dog {
  bark:() => 'kkk'
}

interface Bird {
    fly:()=>'fly'
}

type Animal = Dog | Bird

const ani: Animal = {
    bark:()=>'kkk',
    fly:()=>'fly'
}
