const userName = "isasaete";
const user1Name = userName.length >= 5;

const password = "Programa2";
const passwordLength = password.length >= 8;
const passwordNumber = /\d/.test(password);
const passwordMayus = /[A-Z]/.test(password);
const passwordValidation = passwordLength && passwordNumber && passwordMayus;

const password2 = "Programa2";
const passwordsEqual = password === password2;

const age = 34;
const isAdult = age >= 18;

console.log(`El nombre de usuario es válido: ${user1Name}`);
console.log(`La contraseña es válida: ${passwordValidation} `);
console.log(`La repetición de la contraseña es válida: ${passwordsEqual}`);
console.log(`Es mayor de edad: ${isAdult}`);
