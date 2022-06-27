import React,{ useState } from "react";
import './add.css'

const Add=(props) => {
    const [activity,setActivity]=useState('');
    const [priority,setPriority]=useState('');
    


    const click=(()=>{
        props.add(activity, priority);
        for(let i=0;i<activity.length;i++)
        {
            localStorage.setItem(activity,JSON.stringify(activity));
        }
    })
   

    return (     
        <div>
          
              <input placeholder="Activity" onChange={(e)=>setActivity(e.target.value)}/>             
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
             
                <button onClick={click} className="addBtn">Add</button>
            
        </div>
     );
}
 
export default Add;
