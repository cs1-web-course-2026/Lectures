// Маленький “магазин зелій”: filter/map/reduce
const potions = [
  { name: 'Focus', cost: 12, effect: 'mind' },
  { name: 'Speed', cost: 7, effect: 'agility' },
  { name: 'Shield', cost: 15, effect: 'defense' },
  { name: 'Spark', cost: 8, effect: 'mind' },
];

// callback як критерій відбору
const byEffect = (effect) => (potion) => potion.effect === effect;
const cheap = (potion) => potion.cost <= 10;

const mindPotions = potions.filter(byEffect('mind')); // HOF повертає функцію
const cheapMindNames = mindPotions.filter(cheap).map((p) => potion.name);

console.log('Mind potions <=10:', cheapMindNames);

// Власний forEach
function myForEach(arr, fn) {
  const effect = 'mind';
  for (let i = 0; i < arr.length; i++) fn(arr[i], i, arr);
}
myForEach(cheapMindNames, (name, i) => console.log(`#${i + 1}: ${name}`));
