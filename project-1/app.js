
/*Binary code 8 number (010*****) => (A-Z)
(011*****) => (a-z)*/ 
/*const binaryCode = [0,1,0];
const num = [2,3,4,5,6,7,8,9];
let x = [];
for (let i = 0; i < 2; i++) {
	for (let j = 3; j < 8; j++) {
	binaryCode[j] = i;
	console.log(binaryCode);
}}*/

const binaryCode = {
	A: '01000001', a:'01100001',
	B: '01000010', b:'01100010',
	C: '01000011', c:'01100011',
	D: '01000100', d:'01100100',
	E: '01000101', e:'01100101',
	F: '01000110', f:'01100110',
	G: '01000111', g:'01100111',
	H: '01001000', h:'01101000',
	I: '01001001', i:'01101001',
	J: '01001010', j:'01101010',
	K: '01001011', k:'01101011',
	L: '01001100', l:'01101100',
	M: '01001101', m:'01101101',
	N: '01001110', n:'01101110',
	O: '01001111', o:'01101111',
	P: '01010000', p:'01110000',
	Q: '01010001', q:'01110001',
	R: '01010010', r:'01110010',
	S: '01010011', s:'01110011',
	T: '01010100', t:'01110100',
	U: '01010101', u:'01110101',
	V: '01010110', v:'01110110',
	W: '01010111', w:'01110111',
	X: '01011000', x:'01111000',
	Y: '01011001', y:'01111001',
	Z: '01011010', z:'01111010'

};
//console.log(typeof binaryCode);

	const input = process.argv[2];
	let character = input.split('');
	console.log(character);
	let result = [];
	let arr1 = [];
	let x;

	for (let arr of character){
		x = Number(arr);
	}
	console.log(x);
try{
	if (isNaN(x)){
		for (let arr of character){
			result.push(binaryCode[arr])}
	} else{
		for (let i = 0; i <= character.length; i += 8){
			//let eightnum = 
			arr1.push(character.splice(i, i += 7));
		}
		console.log(arr1);
		for (let key in binaryCode){
			//console.log(binaryCode[key]);
			if (eightnum === binaryCode[key]){
				result.push(key);
				//console.log(result);
			}
	};	}
	let binaryChange = result.join('');
	console.log(binaryChange);
} catch (error) {
	console.log(error)
};

