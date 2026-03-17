// Ситуація з “бортовим журналом” зорельота
const starship = {
  name: 'Enterprise',
  logs: [],
  log(msg) {
    // звичайний метод: this === starship

    this.logs.push(`[${this.name}] ${msg}`);

    // console.log(this.name);
    // localStorage.setItem('lastLog', msg);
  },
  logLater(msg, delay = 0) {
    // setTimeout викликає колбек “поза контекстом”
    // Використаймо стрілку, щоб this наслідувався зі scope методу
    setTimeout(() => {
      this.log(`(later) ${msg}`);
    }, delay);
  },
  logLater2(msg, delay = 0) {
    setTimeout(function () {
      this.log(`(later) ${msg}`);
    }, delay);
  },
  journal: {
    time: '',
    date: '',
  },
};

console.log('global this -', this);
console.log('window -', window);
console.log('globalThis -', globalThis);

starship.log('Engines online');
console.log(starship);

const starship2 = { ...starship };
starship.name = 'null';
starship.journal.time = '11:00';

starship2.log('Engines online 2');
console.log(starship);
console.log(starship2);

starship.name = 'Skywalker';

starship.log('Name changed');
starship.logLater('Plotting to the new horizons...', 0);
starship.log('Discover new stars...');

setTimeout(() => console.log(starship.logs), 0);

class Starship {
  constructor(name) {
    this.name = name;
    this.logs = []; // ✅ each instance gets its OWN array
  }

  log(msg) {
    this.logs.push(`[${this.name}] ${msg}`);
  }
}

const enterpriseO = new Starship('Enterprise');
const novaO = new Starship('Nova');

// What if we assign to a new variable?
// const enterprise = structuredClone(starship);
// const nova = structuredClone(starship);
// starship = null; // original reference gone!

console.log(enterpriseO);
console.log(novaO);
console.log('+++++++++');
enterpriseO.log('Hull breach!');
novaO.log('Nova!');
// console.log('+++++++++');
console.log(enterpriseO);
console.log(novaO);
// ❌ ReferenceError or logs to a null object — starship is gone!
