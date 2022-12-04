let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
let chars = "";
let sumOfValues = 0;
for(var i = 0; i<input.length-1; i+=3){
	let len = input[i].length;
	let a = input[i].split("");
	let b = input[i+1].split("");
	let c = input[i+2].split("");
	let char = a.filter(
	valuea => b.filter(
	valueb => c.includes(valueb)
	).includes(valuea)
	)[0];
	if(!char)
		continue;
	chars += char.toString();
	if(char.charCodeAt()>96)
		sumOfValues += char.charCodeAt()-96;
	else
		sumOfValues += char.charCodeAt()-38;

}
console.log(chars);
console.log(sumOfValues);
