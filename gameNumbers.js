function game() {
  let randomNumber = Math.round(Math.random() * 100);
  let beginStep = 0;
  let endStep = 100;
  let newNumber = 50;
  console.log(`Первый компьютер: загадал число`);
  while (randomNumber != newNumber) {
    console.log(`Второй компьютер:  пробую  число ${newNumber}`);
    if (newNumber > randomNumber) {
      console.log('Первый компьютер: загаданное число меньше');
        endStep = newNumber;
    } else if (newNumber < randomNumber) {
      console.log('Первый компьютер: загаданное число больше');
 
         beginStep = newNumber;
    }
    newNumber = Math.round((beginStep + endStep) / 2);
  }
  console.log(`Второй компьютер: загаданное число - ${randomNumber}?`);
  console.log(`Первый компьютер: Число угадано!`);
}

game();
