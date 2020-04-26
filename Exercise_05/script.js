"use strict";

document.getElementById("car_button").addEventListener("click", createCar);
document.getElementById("cars_make").addEventListener("change", onMakeChange);

function createCar(){
  let  carsMake = document.getElementById("cars_make");
  let  selectedMake = carsMake.options[carsMake.selectedIndex].value;

  let radioButtons = document.getElementsByName("choice_"+selectedMake);
  let selectModel=null;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectModel = radioButtons[i].value;
      break;
    }
  }
  
  let maxSpeed = document.getElementById("max_speed").value;
  let color = document.getElementById("color").value;
  let makeDate = document.getElementById("make_date").value;

  let checkboxes = document.querySelectorAll('input[type=checkbox][name=extras]');
  let extras=[];
  console.log(checkboxes);
  for(let i=0; i<checkboxes.length; i++){
    console.log(i);
    if(checkboxes[i]!=null && checkboxes[i].checked){   
      extras.push(checkboxes[i].value);
      continue;
    }
  }


  var car=new Car(selectModel,selectedMake,maxSpeed,color,makeDate,extras);
  document.getElementById("div_output").innerText=JSON.stringify(car);
}

function onMakeChange(){
  console.log("onMakeChange")
  let  carsMake = document.getElementById("cars_make");
  let  selectedMake = carsMake.options[carsMake.selectedIndex].value;
  let notSelectedModels= document.querySelectorAll("#container_models > div:not(#container_"+selectedMake+")");
  for (let index = 0; index < notSelectedModels.length; index++) {
    console.log(notSelectedModels[index].getAttribute("id"));
    notSelectedModels[index].setAttribute("style", "display:none");
  }
  
  document.getElementById("container_"+selectedMake).setAttribute("style", "display:block");
}


class Car {

  constructor(model, make, maxSpeed, color, makeDate, extras) {
    this.model=model
    this.make=make
    this.maxSpeed=maxSpeed
    this.color=color
    this.makeDate=makeDate
    this.extras=extras;
  }

  //   toString() {
  //     return `Car ${model} and my age is ${this.make}.`
  //  }
}