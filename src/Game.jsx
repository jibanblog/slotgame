import React from 'react';






const Machinegame = () =>{

    let human = document.getElementById("sl").value;
    let animal = document.getElementById("slo").value;
    let robot = document.getElementById("slot").value;
    let regular_expression = /^[A-Za-z0-9]+$/;

    
    if((human.match(regular_expression)) && (animal.match(regular_expression)) && (robot.match(regular_expression))){

        return(
            
            document.getElementById("message").innerHTML = "Sorry! only emoji/special characters are allowed"

        )
        
    
    }else{

        return true;
        
    
        
        
    }
}

export default Machinegame;