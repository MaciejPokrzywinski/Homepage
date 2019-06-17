console.log('Name:  ${Test}')
console.log('Hello there')

console.log('General Kennobi!')
//console.image("https://i.pinimg.com/originals/40/74/60/407460925c9e419d82b93313f0b42f71.jpg");

const heading = document.querySelector('#headerLogo');
const paragraphs = document.querySelectorAll('p');

console.log(heading);
console.log(paragraphs);
console.log(paragraphs[1]);
console.log(paragraphs[1].innerHTML);
paragraphs[1].innerHTML = '<b>Pozdro</b> JS!';
