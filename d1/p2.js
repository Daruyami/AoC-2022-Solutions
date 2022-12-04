let input = document.getElementsByTagName('pre')[0];
let lines = input.textContent.split('\n');
let highestSum = [0, 0, 0];
let sum = 0;
for(var i = 0;i < lines.length;i++){
	if(!!parseInt(lines[i])){
		sum += parseInt(lines[i]);
	}
	else{
		if(sum>highestSum[0]){
			highestSum[2] = highestSum[1];
			highestSum[1] = highestSum[0];
			highestSum[0] = sum;
		}
		else if(sum>highestSum[1]){
			highestSum[2] = highestSum[1];
			highestSum[1] = sum;
		}
		else if(sum>highestSum[2]){
			highestSum[2] = sum;
		}
		sum = 0;
	}
}
totalTopHighestSum = highestSum[0]+highestSum[1]+highestSum[2];
console.log(totalTopHighestSum)
