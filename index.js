
let bmi = () =>{

    /* Getting input from user into weight variable.*/

    let weight = document.querySelector(".weight").value;

    /* Getting input from user into height variable.*/

    let height = document.querySelector(".height").value;
    

    if (height === "" || isNaN(height)) {
    document.querySelector("p").innerHTML = "Provide a valid Height!";

     } else if (weight === "" || isNaN(weight)){ 

    document.querySelector("p").innerHTML = "Provide a valid Weight!";
    
// If both input is valid, calculate the bmi
     }else {

          let result = Math.round((weight / Math.pow(height, 2)));

          if (result < 18.5){
             document.querySelector("p").innerHTML = `Your BMI is ${result}, so you are underweight`;
           }
   
         else if (result >= 18.5 && result < 24.9) {
            document.querySelector("p").innerHTML = `Your BMI is ${result}, so you are normal weight`;
          }

          else if (result >= 25 && result < 29.9) {
            document.querySelector("p").innerHTML = `Your BMI is ${result}, so you are overweight`;
          }

          else if (result >= 30 && result < 34.9) {
            document.querySelector("p").innerHTML = `Your BMI is ${result}, so you are obses`;
          }

        else{
           document.querySelector("p").innerHTML = `Your BMI is ${result}, so you are extremely obess `;
         }
     
     }
}

  // Function for calculating bmi
    document.querySelector(".btn").addEventListener("click", bmi);

