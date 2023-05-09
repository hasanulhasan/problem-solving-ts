interface IObj {
  name: string,
  age: number
}

const takeArray = (a: IObj[]): object => {
  return a.filter(n => n.age >= 18)
}

const persons = [
  { name: 'hasan', age: 25 },
  { name: 'rakib', age: 22 },
  { name: 'rakib', age: 18 },
  { name: 'sami', age: 16 }
]

const filteredObj = takeArray(persons)
console.log(filteredObj)