function cipherencode(){ 
  const variavel= document.getElementById('string').value;
  const set=document.getElementById('offset').value; 
  const setup= parseInt(set);
  console.log('ver', setup)
  let cod="";
  let codAsc=[];
  for(let i=0; i<variavel.length; i++){
        codAsc=variavel[i].charCodeAt();
        console.log('result', codAsc)
    if(codAsc>=65 && codAsc<=90){
      cod+=String.fromCharCode(((codAsc-65+setup)%26)+65);
    }
    if(codAsc>=97 && codAsc<=122){
      cod+=String.fromCharCode(((codAsc-97+setup)%26)+97);
      console.log('ver', cod)
    }
  }
  document.getElementById('msgcodificada').innerHTML=(cod);
}

function cipherdecode(){ 
  const variavel2= document.getElementById('string').value;
  const set2=document.getElementById('offset').value;
  const setup2=parseInt(set2);
  let cod2="";
  let codAsc2=[];
  for(let i=0; i<variavel2.length; i++){
        codAsc2=variavel2[i].charCodeAt();
        console.log('result', codAsc2)
    if(codAsc2>=65 && codAsc2<=90){
      cod2+= String.fromCharCode(((codAsc2-65-setup2)%26)+65);
    }
    if(codAsc2>=97 && codAsc2<=122){
      cod2+= String.fromCharCode(((codAsc2-97-setup2)%26)+97);
    }
  }
  document.getElementById("msgdescod").innerHTML=(cod2);
}