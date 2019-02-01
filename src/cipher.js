function cipherencode(messenger, move){ 
  let cod="";
  let codAsc=[];
  for(let i=0; i<messenger.length; i++){
        codAsc=messenger[i].charCodeAt();        
    if(codAsc>=65 && codAsc<=90){
      cod+=String.fromCharCode(((codAsc-65+(move %26)+26)%26)+65);
    }
    else if(codAsc>=97 && codAsc<=122){
      cod+=String.fromCharCode(((codAsc-97+(move %26)+26)%26)+97);      
    }else{
      cod+=String.fromCharCode(codAsc);
    }
  }
 return cod;
}

function cipherdecode(messenger2, move2){ 
  let cod2="";
  let codAsc2=[];
  for(let i=0; i<messenger2.length; i++){
      codAsc2=messenger2[i].charCodeAt();             
    if(codAsc2>=65 && codAsc2<=90){
      cod2+=String.fromCharCode(((codAsc2-65-(move2 %26)+26)%26)+65);
    }
    else if(codAsc2>=97 && codAsc2<=122){
      cod2+=String.fromCharCode(((codAsc2-97-(move2 %26)+26)%26)+97);      
    }else{
      cod2+=String.fromCharCode(codAsc2);
    }
  }
 return cod2;
}

function cipher(){
  let messenger= document.getElementById('string').value;   
  let move= parseInt(document.getElementById('offset').value);
   
  document.getElementById('msgcodificada').innerHTML=cipherencode(messenger, move);
}
function cipher2(){
  let messenger2= document.getElementById('string').value;
  let move2= parseInt(document.getElementById('offset').value);
   
  document.getElementById('msgdescod').innerHTML=cipherdecode(messenger2, move2);
}
