//console.log(`${casual.safe_color_name} ${casual.country_code}`);
//console.log(`${casual.address}, ${casual.city}, ${casual.country}`);
const casual = require("casual");

//console.log(`Random City: ${casual.city}`);

console.log(`Random Number between 1 and 10: ${Math.floor(Math.random() * 10) + 1}`)

const suffix =casual.random_element(["Mr", "Mrs", "Miss"]);
const firstName = casual.first_name;
const lastName = casual.last_name;
console.log(`${suffix} ${firstName} ${lastName}`);