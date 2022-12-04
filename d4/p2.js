function range(start, end) {
	let size = end-start;
	return [...Array(size+1).keys()].map(i => i + start);
}
let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
let redundantPairs = 0;
for(var i = 0; i<input.length-1; i++){
	let pair = input[i].split(',');
	let elfa = pair[0].split('-');
	let elfb = pair[1].split('-');
	let a = range(parseInt(elfa[0]), parseInt(elfa[1]));
	let b = range(parseInt(elfb[0]), parseInt(elfb[1]));
	redundantPairs += a.some(e => b.includes(e)) | b.some(e => a.includes(e));
}
console.log(redundantPairs)
