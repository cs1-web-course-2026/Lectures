console.log('Шукаю новий жарт...');

fetch('https://official-joke-api.appspot.com/random_joke')
  .then((response) => {
    // Перевіряємо, чи успішний запит
    if (!response.ok) {
      throw new Error("Не вдалося зв'язатися з сервером жартів!");
    }

    return response.json();
  })
  .then((jokeData) => {
    console.log('data - ', jokeData);

    const { setup = '', punchline = '' } = jokeData || {};

    console.log(`- ${setup}`);

    // Додамо трохи інтриги перед розв'язкою
    setTimeout(() => {
      console.log(`- ${punchline} 😂`);
    }, 3000);
  })
  .catch(({ error }) => {
    console.error(
      `💥 Сталася помилка: ${error?.message || 'Something went wrong!'}`,
    );
  });

// async await
try {
  console.log1();
} catch (error) {
  console.error(`💥 помилка: ${error.message}`);
}

console.log('working');

const films = ['Star Wars', 'Lord of the Rings'];

const [, lotr] = films;

console.log(films[1]);
console.log(lotr);
