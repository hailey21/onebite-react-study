import {
  getRandomName,
  getRandomEmail,
  getRandomBirthday,
  getRandomAnimal,
} from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3);

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();

console.log(email1, email2, email3);

const birthday1 = getRandomBirthday();

console.log(birthday1);

const animal = getRandomAnimal();
const oceanAnimal = getRandomAnimal("ocean");
const desertAnimal = getRandomAnimal("desert");

console.log(animal, oceanAnimal, desertAnimal);
