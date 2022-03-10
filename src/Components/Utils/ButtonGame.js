import React, { useEffect } from 'react';
const ButtonGame =()=>{
        let chest; 
        useEffect(()=>{
          moving();
        },[])
        function move(){
          chest.style.top = Math.floor(Math.random()*20)+'px';
          chest.style.left =  Math.floor(Math.random()*100)+'px';
        }
        
        const moving = ()=>{
          chest = document.querySelector('#btnmover');
          setInterval(()=>{
            move();
          },1000)
          
        }
        window.onload = moving;
      return(
        <div id='btnmover' class="btnStyle" style={{backgroundColor:'#508096', color:'white', borderRadius:'10px', padding:'20px'}}>
            I can move!
        </div>
      )

}

export default ButtonGame;