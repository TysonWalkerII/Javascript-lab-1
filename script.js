const name = "Tyson Walker II";
let age = 18;
const birthday = "January 24";
let pineapplePizza = false;
const lifeEvents = [
  "I made Nutella pancakes",
  "I graduated from Highschool",
  "I played Undertale",
  "I made a breakfast burrito",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and i like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am not intro pineapples on pizza. I am currently ${age} years old and my biethday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else if (randomNumber === 5) {
    console.log(`${randomNumber} ===5`);
    break;
  }
}
