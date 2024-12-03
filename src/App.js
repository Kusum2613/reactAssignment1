
import './App.css';
import React,{useState} from 'react';

function App() {
 // let login=false;
 const[num,setNum]= useState(0)
 function inc(){
  setNum(num+1)
 }
 
 function dec(){
  setNum(num-1)
 }
 function res(){
  setNum(0)
 }



  return (
    <div className="App">
     {
//        login == false ? <h1 style={{color:'black'}}>hkjhkhk</h1>:<div style={{color:'pink'}}>Kusum</div>
      }
      
      
      <div className='main'>
      <h1 className='heading'>{num}</h1>
      <div className='buttons'>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
      </div>
      <div className='reset'>
      <button className='btn2' onClick={res}>Reset</button>
      </div>
      </div>




      
    </div>
  );
}

export default App;
