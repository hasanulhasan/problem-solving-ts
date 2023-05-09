
const reverseStr = <T>(...arr: T[]) => {
  const reverseArr = arr.reverse();
  return reverseArr
}

const result100 = reverseStr('Prianka', 'Karina', 'Dipika')
console.log(result100);

const result200 = reverseStr(1, 3, 6)
console.log(result200);