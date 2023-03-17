let upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet="abcdefghijklmnoprstuvwxyz";
let numberSet="01234566789";
let specialSet="!@#$%^&*()_+/*";


function pass(set){
      let random=set[Math.floor(Math.random()*set.length)];
      return random;

}
let upper=document.getElementById("upper");
let lower=document.getElementById("lower");
let special=document.getElementById("special");
let digit=document.getElementById("number");
let button=document.getElementById("btn");
let PasswordG=document.getElementById("pass");
let no_digit=document.getElementById("txt");


function checked(password=""){ 
if(upper.checked){
     password+= pass(upperSet)
}
if(lower.checked)
{
      password+= pass(lowerSet)
}
if(digit.checked){
      password+= pass(numberSet)
}
if(special.checked){
      password+= pass(specialSet);
}
if(password.length<no_digit.value){
     return checked(password);
}
PasswordG.value=truncate(password,no_digit.value);
}
button.addEventListener("click" ,function(){
checked();
});
function truncate(str,num){ 
      if(str.length>num){
         let substr=str.substring(0,num);  
         return substr; 
      } else{
            return str;
      }
}