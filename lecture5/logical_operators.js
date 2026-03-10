const isAdmin = false;

let isLoggedIn = true;
isLoggedIn && console.log('Відкрити профіль 👤');

// if (isLoggedIn) {
//   console.log('Відкрити профіль 👤');
// }

console.log('hasRights -', isLoggedIn && isAdmin);

let nickname = 'R';
console.log(Boolean(nickname));
console.log(nickname || 'Анонім 🕵️');

let score = null;
console.log(Boolean(score));
console.log(score ?? 1); // 0 як значення за замовчуванням
console.log(score || 1); // 0 як значення за замовчуванням
console.log(score ? score : 1); // 0 як значення за замовчуванням
