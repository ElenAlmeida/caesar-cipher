
var resposta= cipherencode('abcdefghijklmnopqrstuvxz',1);
if(resposta=='bcdefghijklmnopqrstuvwya'){
  console.log('Se deu bem');
}else{
  console.log('Se deu mal, resposta correta bcdefghijklmnopqrstuvwya');
}
var resposta1= cipherdecode('bcdefghijklmnopqrstuvwya',1);
if(resposta1=='abcdefghijklmnopqrstuvxz'){
  console.log('Positive');
}else{
  console.log('Error')
}

var resposta02=cipherencode('ABCabc wxyzWXYZ @#$%12345678', 48);
if(resposta02=='WXYwxy stuvSTUV @#$%12345678'){
  console.log('Positivo')
}else{
  console.log('Error caracter')
}

var resposta03=cipherdecode('WXYwxy stuvSTUV @#$%12345678', 48);
if(resposta03=='ABCabc wxyzWXYZ @#$%12345678'){
  console.log("Positivo")
}else{
  console.log('Error caracter')
}

var resposta04=cipherdecode('PQRpqr lmnoLMNO @#$%12345678', -63);
if(resposta04=='ABCabc wxyzWXYZ @#$%12345678'){
  console.log("Positivo")
}else{
  console.log('Error caracter')
}

var resposta05=cipherencode('ABCabc wxyzWXYZ @#$%12345678', -63);
if(resposta05=='PQRpqr lmnoLMNO @#$%12345678'){
  console.log('Positivo')
}else{
  console.log('Error caracter')
}



