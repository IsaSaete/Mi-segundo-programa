const username = "isasaete";
const usernameMinimumLength = 5;
const isValidUsername = username.length >= usernameMinimumLength;

const password = "ProgrÁmÀ2";
const passwordMinimumLength = 8;
const isValidPasswordLength = password.length >= passwordMinimumLength;
const hasPasswordNumber = /\d/.test(password);
const hasPasswordUppercase = /[A-ZÁÉÍÓÚÑáéíóúñÀÈÌÒÙàèìòù]/.test(password);
const isValidPassword =
  isValidPasswordLength && hasPasswordNumber && hasPasswordUppercase;

const password2 = "ProgrÁmÀ2";
const isPasswordRepeat = password === password2;

const age = 34;
const minimumAdultAge = 18;
const isAdult = age >= minimumAdultAge;

console.log(`El nombre de usuario es válido: ${isValidUsername}`);
console.log(`La contraseña es válida: ${isValidPassword} `);
console.log(`La repetición de la contraseña es válida: ${isPasswordRepeat}`);
console.log(`Es mayor de edad: ${isAdult}`);
