// const rating = 9;
const movieTitle = 'Star Wars 3';
console.log('movieTitle -', movieTitle);
console.log('movieTitle -', typeof movieTitle);

hasTitle = true;
console.log('movieTitle2 -', movieTitle);
console.log('movieTitle2 -', typeof movieTitle);

// movieTitle = 1
// console.log('movieTitle3 -', movieTitle)
// console.log('movieTitle3 -', typeof movieTitle)

// console.log('1 -', cinemaPlaces); // undefined

// getTickets1(); //

const cinemaPlacesCount = '52';
console.log(Number(cinemaPlacesCount));
console.log('---', Number(cinemaPlacesCount) - 2); // 3
console.log('+++', Number(cinemaPlacesCount) + 2); //

function getTickets1() {
  console.log('Getting tickets...');
}
const getTickets2 = () => {
  console.log('Getting tickets... 2');
};
const getTickets3 = function () {
  console.log('Getting tickets... 3');
};

const movie = {
  // [key]: value
  id: Symbol('id'),
  rating: 9,
  title: 'Star Wars III',
  length: '1.46',
  year: '2005',
  isLast: false,
  critics: null,
  previous: {
    rating: 8,
    title: 'Star Wars II',
    length: '2.35',
  },
  next: {
    rating: 10000,
    title: 'Star Wars IV',
    length: '2.35',
  },
  publicationMonth: null,
};

console.log(movie);
console.log('hasOwnProperty asdfasf -', movie.hasOwnProperty('asdfasf'));
console.log('hasOwnProperty title -', movie.hasOwnProperty('title'));
console.log(movie.rating);

const ratingFieldKey = 'rating';
console.log("movie['ratingFieldKey']", movie[ratingFieldKey]);

console.log(movie.length);
console.log(movie.title);
console.log('publicationMonth -', movie.publicationMonth); //

// console.log(typeof getTickets1 === typeof getTickets2); //
// console.log(typeof getTickets2); //
// console.log(typeof getTickets3); //

// console.log(getTickets1()); //
// console.log(getTickets2()); //
// console.log(getTickets3()); //

const a = Symbol('id');
const b = Symbol('id');
console.log(a === b); // false

console.log('id' === 'id'); // true

var cinemaPlaces = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
];

// console.log('2 -', cinemaPlaces); //
// console.log(cinemaPlaces[1][2]); // "B3"
// console.log(`Movie: ${movieTitle}`);
// console.log(`Rating: ${rating}`);
