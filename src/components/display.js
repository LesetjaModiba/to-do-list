import React from "react";
import './display.css'
<script src="https://kit.fontawesome.com/be361c6523.js" crossorigin="anonymous"></script> 


const Display = (props) => {
let arrActivity=[];
arrActivity.push(JSON.parse(localStorage.getItem('activity')))
console.log(arrActivity);

    return ( 
        <div className="container">
            {props.list.map((item,id)=>
                    {
                    if(item.priorityType==="High")
                    {
                        return(<div key={id} className="activity-high">
                        <p id="text">{item.activityType}</p>
                        {/* <p>{item.priorityType}</p> */}
                        </div>)
                    }
                    else if(item.priorityType==="Medium")
                    {
                        return(<div key={id} className="activity-medium">
                        <p>{item.activityType}</p>
                        {/* <p>{item.priorityType}</p> */}
                        </div>)
                    }
                    else if(item.priorityType==="Low")
                    {
                        return(<div key={id} className="activity-low">
                        <p>{item.activityType}</p>
                        {/* <p>{item.priorityType}</p> */}
                        </div>)
                    }
                    }             
            )}
     </div>
     );
     
}
 
export default Display;