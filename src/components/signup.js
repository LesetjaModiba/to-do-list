import './signup.css'
import { useHistory, Link } from "react-router-dom";
const SignUp = () => {
    let history=useHistory();
    const register=()=>
    {
        if(document.getElementById('spwd').value==="")
        {
            alert("Password cannot be empty")
        }
        else if(document.getElementById('spwd').value!==document.getElementById('scpwd').value)
        {
            alert('Passwords do not match')
        }
        else{
            history.push('/home');
        }

    }
    return ( 
        <div className="form-container1">
        <h2>Sign Up</h2>
        <input className='inputs' placeholder="Email"/>
        <input  className='inputs' placeholder="Phone"/>
        <input className='inputs' id='spwd'  placeholder="password"/>
        <input className='inputs' id='scpwd' placeholder="Confirm password"/>
        <br></br>
            <Link className='link' to='/'>Already have an account? Sign in here</Link>
            <br></br><br></br>
        <button className='login' onClick={register}>Sign up</button>
    </div>
    );
    }
 
export default SignUp;