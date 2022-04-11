"use strict";

const phrases = [
  "Възможността да научите нещо не бива да се пропуска.",
  "Обръщайки се към миналото, ние обръщаме гръб към бъдещето.",
  "Човекът е всемогъщ, стига да не е зает с нищо.",
  "Смисълът на успеха е да се движиш към него. Няма крайна точка.",
  "Който побеждава себе си, не се страхува от нищо.",
];

const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

const robotCreator = (name, color, type, message) => {
  return {
    name: name,
    typeOfColor: color,
    type: type,
    message: message,
  };
};

const robot1 = robotCreator("Harry", "Red", "Male", "");

setTimeout(() => alert(`"${randomPhrase}" from ${robot1.name}`), 5000);

const robot2 = robotCreator("Jenny", "Gray", "Female", "");

robot2.message = `Hello ${robot2.name} from ${robot1.name}`;

console.log(robot1);
console.log(robot2);
