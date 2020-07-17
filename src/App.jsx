import React, { useState } from 'react';
import Slot from './Slot.jsx';




const App = () =>{ 


    
  const [name, setName] = useState();
  const [value, setValue] = useState();
  const [iteam, setIteam] = useState();
  const [fullName, setFullName] = useState();
  const [fullValue, setFullValue] = useState();
  const [fullIteam, setFullIteam] = useState();

  const inputEvent = (event) =>{
    setName(event.target.value);
  }

  const inputValue = (event) =>{
    setValue(event.target.value);
  }

  const inputIteam = (event) =>{
    setIteam(event.target.value);
  }

  
  const onSubmit = () => {
    setFullName(name);
    setFullValue(value);
    setFullIteam(iteam);
    
  };
    
    
    return(
    <>
    <div className="main_div">
    <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight: "bold"}}> Slot Game </span> 🎰 </h1>
      
      <h1 className="emoji">Enter emoji/texts in the slots:</h1>

      <input type='text' id="sl" onChange={inputEvent} value = {name}   />
      <input type='text' id="slo" onChange={inputValue} value = {value}  />
      <input type='text' id="slot"  onChange={inputIteam} value = {iteam} />
      <input type="submit" id="button" value="Click Me 👍" onClick = {onSubmit} />
      <span className="message" > {name} </span>
      <span className="message"> {value} </span>
      <span className="message"> {iteam} </span>
      
      
  

    <div className="slotmachine">
    <Slot x = {fullName} y = {fullValue} z={fullIteam}> </Slot>
        <Slot x = '😄' y = '😄' z = '😄'> </Slot>
        <Slot x = '👨' y = '🎅' z = '👨'> </Slot>
        <Slot x = '🍎' y = '🍓' z = '🍊'> </Slot>
        <Slot x = '❤️' y = '❤️' z = '❤️'> </Slot>
        
    </div>
     
     </div>
    


    </>);

}


export default App;