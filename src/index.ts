import "./customIdElement";
console.log("customIdElement test");
const testCustomIdElement = document.getElementById("divCustomId");
testCustomIdElement?.setCustomId();
console.log(testCustomIdElement?.getCustomId());
