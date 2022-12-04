let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
let score = 0;
for(var i = 0; i<input.length; i++){
	if(!input[i])
		continue;
	let a = input[i].charCodeAt(0)-64;
	let b = input[i].charCodeAt(2)-87-1;
	let sign = 0;
	let pointReward = 0;
	switch(b){
		case 0:
			pointReward = 0;
			sign = (a+2)%3 + (!((a+2)%3))*3;
			break;
		case 1:
			pointReward = 3;
			sign = a;
			break;
		case 2:
			pointReward = 6;
			sign = (a+1)%3 + (!((a+1)%3))*3;
			break;
		default:
			console.log('err?\n\tat i='+i+',\n\ta='+a+',\n\tb='+b+',\n\tresult='+result);
			break;
	}
	score += sign + pointReward;

}
console.log(score);
