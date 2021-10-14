'use strict';

export default function ask(number, yes, no) {
  // Convert isPositiveNumber to arrow function
  if (((num) => num >= 0)(number)) yes();
  else no();
}
