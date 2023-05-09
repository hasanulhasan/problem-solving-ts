const checkStr = (a: unknown) => {
  if (typeof a == 'string') {
    console.log(`${a} is a string`)
  }
  if (typeof a == 'number') {
    console.log(`Oops! This is not a string `)
  }
}

checkStr('1545461')
