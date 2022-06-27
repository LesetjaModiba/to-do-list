import Add from "./add";
import { useState } from "react";
import Display from "./display";
import './home.css'

const Home = () => {

    const [activity,setActivity]=useState([])

    const addActivity= (( activityType,priorityType)=>
    {
      setActivity((activities)=> [ ...activities, { 
        activityType:activityType,
        priorityType:priorityType
      }])
 
    })

    const arrActivity=[]
    arrActivity.push(JSON.parse(localStorage.getItem('activity')))
 
    
  
    return (  
    
        <div className="activity-container">
        <h1>To-do List</h1>
            <div>
              <Add add={addActivity}/>  
            </div>
            <div>
              <Display list={activity} />  
            </div>
        </div>
    );
}
 
export default Home;