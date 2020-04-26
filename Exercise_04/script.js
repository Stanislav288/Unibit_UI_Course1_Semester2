"use strict";
//var testString = "";

document.getElementById("string_form_button").addEventListener("click", textOperationSubmit);

document.getElementById("text_search").addEventListener("click", textOperation);
document.getElementById("text_upper_case").addEventListener("click", textOperation);
document.getElementById("text_lower_case").addEventListener("click", textOperation);

function textOperationSubmit() {
  let radioButtons = document.getElementsByName("string_operation") ;
  let operation = null;
  for (var i = 0, length = radioButtons.length; i < length; i++) {
    if (radioButtons[i].checked) {
      operation = radioButtons[i].value;
      break;
    }
  }

  let elementValue = document.getElementById("element_value").value ;
  let operationValue = document.getElementById("operation_value").value  ;
  if(operation=="search"){
    document.getElementById("output_string").innerText = elementValue.search(operationValue); 
  }else if(operation=="upper_case"){
    document.getElementById("output_string").innerText = elementValue.toUpperCase(); 
  }else if(operation=="lower_case"){
    document.getElementById("output_string").innerText = elementValue.toLowerCase(); 
  }

}

function textOperation(event){
  console.log("textOperation event "+event.target.value);
  if(event.target.value!=="search"){
    document.getElementById("operation_value").style.display="none";
    document.getElementById("operation_value_label").style.display="none";
  }else{
    document.getElementById("operation_value").style.display="inline";
    document.getElementById("operation_value_label").style.display="inline";
  }
}








//This are the operation for the array
var testArray = [];

document.getElementById("array_form_button").addEventListener("click", arrayOperationSubmit);

// document.getElementById("array_pop").addEventListener("click", arrayOperation);
// document.getElementById("array_push").addEventListener("click", arrayOperation);
// document.getElementById("array_get_by_index").addEventListener("click", arrayOperation);

function arrayOperationSubmit() {
  let radioButtons = document.getElementsByName("array_operation") ;
  let operation = null;
  for (var i = 0, length = radioButtons.length; i < length; i++) {
    if (radioButtons[i].checked) {
      operation = radioButtons[i].value;
      break;
    }
  }

  //let elementValue = document.getElementById("array_element_value").value ;
  let operationValue = document.getElementById("array_operation_value").value;
  if(operation=="array_pop"){
    testArray.pop(operationValue)
    document.getElementById("output_array").innerText = testArray; 
  }else if(operation=="array_push"){
    testArray.push(operationValue)
    document.getElementById("output_array").innerText = testArray; 
  }else if(operation=="array_get_by_index"){
    document.getElementById("output_array").innerText =  testArray[operationValue]; 
  }

  document.getElementById("array_operation_value").innerText=[];
}

// function arrayOperation(event){
//   if(event.target.value!=="array_get_by_index"){
//     document.getElementById("array_operation_value").style.display="none";
//     document.getElementById("array_operation_value_label").style.display="none";
//   }else{
//     document.getElementById("array_operation_value").style.display="inline";
//     document.getElementById("array_operation_value_label").style.display="inline";
//   }
// }