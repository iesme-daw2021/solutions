// The <div> DOM node:
const divOption1 = document.body.firstElementChild;
const divOption2 = document.body.children[0];
// (the first node is space, so we take 2nd)
const divOption3 = document.body.childNodes[1];

console.log(divOption1);
console.log(divOption2);
console.log(divOption3);

//The <ul> DOM node:
const ulOption2 = document.body.children[1];
const ulOption1 =
  document.body.lastElementChild.previousElementSibling.previousElementSibling;
console.log(ulOption1);
console.log(ulOption2);

// The second <li> (with Pete):
// get <ul>, and then get its last element child
const li =
  document.body.lastElementChild.previousElementSibling.previousElementSibling
    .lastElementChild;
console.log(li);
