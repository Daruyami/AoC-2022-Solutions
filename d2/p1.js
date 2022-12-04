let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
let score = 0;
for(var i = 0; i<input.length; i++){
	if(!input[i])
		continue;
	let a = input[i].charCodeAt(0)-64;
	let b = input[i].charCodeAt(2)-87;
	let result = (3+(b-a))%3;
	let pointReward = 0;
	switch(result){
		case 0:
			pointReward = 3;
			break;
		case 1:
			pointReward = 6;
			break;
		case 2:
			pointReward = 0;
			break;
		default:
			console.log('err?\n\tat i='+i+',\n\ta='+a+',\n\tb='+b+',\n\tresult='+result);
			break;
	}
	score += b + pointReward;

}
console.log(score);
