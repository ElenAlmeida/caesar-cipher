const encode = document.getElementById('encode');
encode.addEventListener('click', cipherCode);

const decode = document.getElementById('decode');
decode.addEventListener('click', cipherDecrypted);

function cipherEncode(message, displacement){
  let result='';
	let msgs= message.split('');

  let turnsIntoCode = msgs.map(elem => elem.charCodeAt());
  
	turnsIntoCode.map(elem =>{
		if(elem>=65 && elem<=90){
			result+= String.fromCharCode(((elem-65+(displacement %26)+26)%26)+65);
		}else if( elem>=97 && elem<=122){
			result+= String.fromCharCode(((elem-97+(displacement %26)+26)%26)+97);
		}else{
			result+= String.fromCharCode(elem);
		}
  });
  return result;		
};

function cipherDecode(message, displacement){
  let result='';
	let msgs= message.split('');

  let turnsIntoCode = msgs.map(elem => elem.charCodeAt());
  
	turnsIntoCode.map(elem =>{
		if(elem>=65 && elem<=90){
			result+= String.fromCharCode(((elem-65-(displacement %26)+26)%26)+65);
		}else if( elem>=97 && elem<=122){
			result+= String.fromCharCode(((elem-97-(displacement %26)+26)%26)+97);
		}else{
			result+= String.fromCharCode(elem);
		}
  });
  return result;		
};

function cipherCode(){
  let message= document.getElementById('string').value;   
  let move= parseInt(document.getElementById('offset').value);
   
  document.getElementById('codedMessage').innerHTML=cipherEncode(message, move);
}

function cipherDecrypted(){
  let message= document.getElementById('string').value;
  let move= parseInt(document.getElementById('offset').value);
   
  document.getElementById('decryptedMessage').innerHTML=cipherDecode(message, move);
}
