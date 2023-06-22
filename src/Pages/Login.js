import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className=' container-fluid Login bg-dark w-[80%]'>
        <div className=" container form">
            <h1 className='text-center'>Login</h1>
        <form>
  <div class="form-group">
    <label for="formGroupExampleInput">UserName:</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email:</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
</form>
</div>
      
    </div>
  );
}

export default Login;
