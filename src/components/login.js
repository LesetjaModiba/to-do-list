import './login.css'
import { useHistory,Link } from 'react-router-dom';

const Login = () => {
    let history=useHistory();
    const login=()=>
    {
        if(document.getElementById('pwd').value==="")
        {
            alert("Password cannot be empty")
        }
        else if(document.getElementById('pwd').value!==document.getElementById('cpwd').value)
        {
            alert('Passwords do not match')
        }
        else
        {
            history.push('/home');
        }

    }
    return ( 
        <div className="form-container">
            <h2>Log in</h2>
            <input className='inputs' id="name" placeholder="Username"/>
            <input className='inputs' id="pwd" placeholder="password"/>
            <input className='inputs' id="cpwd" placeholder="Confirm password"/>
            <br></br>
            <Link className='link' to='/signup'>Don't have an account? Sign up here</Link>
            <br></br><br></br>
            <button className='login' onClick={login}>Log in</button>
        </div>
     );
}
 
export default Login;