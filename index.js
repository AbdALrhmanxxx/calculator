const display=document.querySelector('.display')

function appendToDisplay(input){
display.value +=input
}

function ClearDisplay(){
display.value = ""
}

function calculate(){
  try{
display.value = eval(display.value)
  }
catch(error){
  display.value  = "Error !"
  }
}
function deleteOneElemnt(){
let string = display.value;
string = string.substring(0,string.length-1);
display.value = string
}