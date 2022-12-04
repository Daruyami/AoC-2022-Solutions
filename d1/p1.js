let input = document.getElementsByTagName('pre')[0];
let lines = input.textContent.split('\n');
let highestSum = 0;
let sum = 0;
for(var i = 0;i < lines.length;i++){
	if(!!parseInt(lines[i])){
		sum += parseInt(lines[i]);
	}
	else{
		if(sum>highestSum){
			highestSum = sum;
		}
		sum = 0;
	}
}
console.log(highestSum)
