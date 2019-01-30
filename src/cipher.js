function cipherencode(variavel, setup){ 
  let cod="";
  let codAsc=[];
  for(let i=0; i<variavel.length; i++){
        codAsc=variavel[i].charCodeAt();
        console.log('result', codAsc)
    if(codAsc>=65 && codAsc<=90){
      cod+=String.fromCharCode(((codAsc-65+(setup %26)+26)%26)+65);
    }
    else if(codAsc>=97 && codAsc<=122){
      cod+=String.fromCharCode(((codAsc-97+(setup %26)+26)%26)+97);
      console.log('ver', cod)
    }else{
      cod+=String.fromCharCode(codAsc);
    }
  }
 return cod;
}

function cipherdecode(variavel2, setup2){ 
  let cod2="";
  let codAsc2=[];
  for(let i=0; i<variavel2.length; i++){
        codAsc2=variavel2[i].charCodeAt();
        console.log('result',codAsc2)
    if(codAsc2>=65 && codAsc2<=90){
      cod2+=String.fromCharCode(((codAsc2-65-(setup2 %26)+26)%26)+65);
    }
    else if(codAsc2>=97 && codAsc2<=122){
      cod2+=String.fromCharCode(((codAsc2-97-(setup2 %26)+26)%26)+97);
      console.log('ver',cod2)
    }else{
      cod2+=String.fromCharCode(codAsc2);
    }
  }
 return cod2;
}

function cipher(){
  let variavel= document.getElementById('string').value;
 console.log('ver', variavel)
  let stu=document.getElementById('offset').value; 
  let setup= parseInt(stu);
  console.log('ver', setup);
  document.getElementById('msgcodificada').innerHTML=cipherencode(variavel, setup);
}
function cipher2(){
  const variavel2= document.getElementById('string').value;
  const sut=document.getElementById('offset').value; 
  const setup2= parseInt(sut);
  console.log('ver', setup2)
  document.getElementById('msgdescod').innerHTML=cipherdecode(variavel2, setup2);
}
