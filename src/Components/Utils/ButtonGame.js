import React, { useEffect } from 'react';
const ButtonGame =()=>{
        useEffect(()=>{
            const chest = document.querySelector('#btnmover');
            chest.onmouseover = move;
            chest.onclick = move;
        },[])

       function move(){
        const chest = document.querySelector('#btnmover');
        chest.style.top = Math.floor(Math.random()*200)+'px';
        chest.style.left =  Math.floor(Math.random()*200)+'px';
       }
      
      return(
        <div id='btnmover' class="btnStyle" style={{backgroundColor:'#508096', color:'white', borderRadius:'10px', padding:'20px'}}>
            Click me!
        </div>
      )

}

export default ButtonGame;