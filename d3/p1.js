let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
let chars = "";
let sumOfValues = 0;
for(var i = 0; i<input.length; i++){
	let len = input[i].length;
	let a = (input[i].slice(len/2)).split("");
	let b = (input[i].slice(0, len/2)).split("");
	let char = a.filter(value => b.includes(value))[0];
	if(!char)
		continue;
	chars += char.toString();
	if(char.charCodeAt()>96)
		sumOfValues += char.charCodeAt()-96;
	else
		sumOfValues += char.charCodeAt()-38;

}
console.log(chars);
console.log(sumOfValues)
