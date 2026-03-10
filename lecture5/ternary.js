let age = 17;

let access = age >= 18 ? 'Доступ дозволено ✅' : 'Доступ заборонено ❌';
console.log(access);

const getAccessStatusByAge = (age) => {
  const result = age >= 18 ? 'Доступ дозволено ✅' : 'Доступ заборонено ❌';

  console.log(result);
};

getAccessStatusByAge(27);

const locale = 'fr';

const greeting = locale === 'fr' ? 'Bonjour!' : 'Hello!';
console.log(greeting);

let greeting2;
if (locale === 'fr') {
  greeting2 = 'Bonjour!';
} else {
  greeting2 = 'Hello!';
}
console.log(greeting2);
