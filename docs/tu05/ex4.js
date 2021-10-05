'use strict';

let isPositive = (num) => num >= 0;

function ask(number, yes, no) {
  if (isPositive(number)) yes();
  else no();
}

ask(
  23,
  () => {
    console.info('Is positive');
  },
  () => {
    console.error('Is negative');
  }
);
