import React from 'react'
import '../css/birinchi.css'

function yarat(){
  var div3 = document.getElementById('q3');
  var inp1 = document.getElementById('inp1');
 var h1 = document.createElement("h1");
 h1.innerText = inp1.value;
  h1.style.fontSize = "10pt"
  var div = document.createElement('div');
  div.style.width ="100px"
  div.style.height ="30px"
  div.style.backgroundColor ="red"
  div.style.float ="right"
  div.style.borderRadius ="10px 10px 0px 10px"
  div.style.marginTop ="20px"

  div.appendChild(h1);

  div3.appendChild(div);
}
export default function firstpages() {
  return (
    <div className='header'>              
      <div className='q1'>
        <h1>CHat with us!</h1> <i class="fa-regular fa-comments"></i>
      </div>
      
      <div className='q3' id='q3'> 
     
      </div>
     



      <div className='q4'> 
      <div className='a5'>
      <input className='s1' id='inp1' type="text" placeholder='Tap Enetel to send a message'/>
      <i class="fa-solid fa-heart" ></i>

      <button onClick={yarat}>
      <i class="fa-brands fa-telegram"></i>
      </button>


      </div>
            </div>
    </div>
  )
}
