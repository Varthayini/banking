import React from 'react'
import './login.css'
import pic from './delta.jpeg'
function App () {
  return (
    
    <>
    <div className='header'> <div className='pic'><img src={pic} width='80px' height='80px' alt=''/></div>
    <div className='App'>
     
      <h1> Login to your account</h1>
      <h3> Customer ID</h3>
      <input type="text" name="Username" placeholder="Enter your email_id" size="50"></input>
      <h3>Password</h3>
      <input type="text" name="password" placeholder="Enter your password" size="50"></input>
      <br>
      </br>
      <br>
      </br>
      <button  type="submit" value="submit" size="20"><span submit="align-middle">SUBMIT</span></button>
      <br/>
      <br/>
      <br/>
    </div>
    </div>
 </>
  );
}
export default App;