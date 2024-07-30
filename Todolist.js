import React, { useState } from 'react'
import './Todolist.css'

export const Todolist = () => {
    let[inputvalue,setInputvalue]=useState('');
    let[arr,setArr]=useState([]);

    let handlechange=(e)=>{
        e.preventDefault();
        setArr([...arr,inputvalue]);

    }
    let Delete=(i)=>{
        const newarr=arr.filter((val,ind)=>{
            return i!==ind;

        })
        setArr(newarr);

    }
  return (
    <div className='main'>
    
        
            <h1>Todolist</h1>
            <form onSubmit={handlechange}>
                <input type='text'  placeholder='Enter the name' onChange={(e)=>setInputvalue(e.target.value)}/><br></br>
                <button>Submit</button>
            </form>
       

        

       <div>
            {
                arr.map((val,i)=>{
                    return(
                        <div className='div'>
                            
                        <li>{val}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button  type='btn'onClick={()=>Delete(i)}>Delete</button></li>
                        </div>
                    )
                })
            }
        </div>


        </div>
    
        )


}
