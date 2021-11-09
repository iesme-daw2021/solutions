export function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

export function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
