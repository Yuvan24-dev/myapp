import React from 'react';
import {useState} from "react";

function Useingstate() {
const [color,setColor]=useState("red");

return(
<>
<h1>My fav color is {color}!</h1>
<button
  type="button"
  onClick={()=>setColor("blue")}>
  blue!
</button>
</>
)
}
export default Useingstate;

