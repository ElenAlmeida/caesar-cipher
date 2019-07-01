
const resposta= cipherEncode('abcdefghijklmnopqrstuvxz',1);
if(resposta==='bcdefghijklmnopqrstuvwya'){
  console.log('Se deu bem')
}else{
  console.log('Se deu mal, resposta correta bcdefghijklmnopqrstuvwya')
}
const resposta1= cipherDecode('bcdefghijklmnopqrstuvwya',1);
if(resposta1==='abcdefghijklmnopqrstuvxz'){
  console.log('Positive')
}else{
  console.log('Error')
}

const resposta02=cipherEncode('ABCabc wxyzWXYZ @#$%12345678', 48);
if(resposta02==='WXYwxy stuvSTUV @#$%12345678'){
  console.log('Positivo')
}else{
  console.log('Error caracter')
}

const resposta03=cipherDecode('WXYwxy stuvSTUV @#$%12345678', 48);
if(resposta03==='ABCabc wxyzWXYZ @#$%12345678'){
  console.log("Positivo")
}else{
  console.log('Error caracter')
}

const resposta04=cipherDecode('PQRpqr lmnoLMNO @#$%12345678', -63);
if(resposta04==='ABCabc wxyzWXYZ @#$%12345678'){
  console.log("Positivo")
}else{
  console.log('Error caracter')
}

const resposta05=cipherEncode('ABCabc wxyzWXYZ @#$%12345678', -63);
if(resposta05==='PQRpqr lmnoLMNO @#$%12345678'){
  console.log('Positivo')
}else{
  console.log('Error caracter')
}



