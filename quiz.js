// Use require package to access js files containing constructors
var BasicCard = require("./basic-card.js");
var ClozeCard = require("./cloze-card.js");

// Calling BasicCard and ClozeCard constructors
var firstPresident = new BasicCard("Who was the first President of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("-----------------");

var clozeFirstPresident = new ClozeCard("George Washington was the first President of the United States.", "George Washington");

console.log(clozeFirstPresident.partial);
console.log(clozeFirstPresident.cloze);
console.log(clozeFirstPresident.fullText);
console.log("-----------------");

// Calling BasicCard and ClozeCard constructors without using the "new" keyword
var capital = BasicCard("Where is the capital of California", "Sacramento");
console.log(capital.front);
console.log(capital.back);
console.log("-----------------");

var clozeCapital = ClozeCard("Sacramento is the capital of California", "Sacramento");
console.log(clozeCapital.partial);
console.log(clozeCapital.cloze);
console.log(clozeCapital.fullText);
console.log("-----------------");

// ClozeCard instance that logs an error
var error = ClozeCard("Thomas Edison invented the light bulb", "Albert Einstein");
console.log("-----------------");