function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a,b);
  } else {
    return "Error: Invalid input. Inputs must be numbers";
  }
}

let result1 = addSafe(1, 2); // Returns 3
let result2 = addSafe("hello", 2); // Returns "Error: Invalid input. Inputs must be numbers"
console.log(result1,result2); 