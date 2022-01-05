import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SignupForm({newUserSubmitHandler, newUserChangeHanldler, newUser}) {
    return (
        <div className="sign-up-form">
            <AccountCircleIcon id="user-icon"/>
            <h1>Sign Up <br /><span id="fill-out-form">Please fill this form to create an account</span></h1>
            <form onSubmit={newUserSubmitHandler} >
                <input type="name" className="input-box" placeholder="Username" name="name" value={newUser.name} onChange={newUserChangeHanldler}/>
                <input type="email" className="input-box" placeholder="email" name="email" value={newUser.email} onChange={newUserChangeHanldler}/>
                <input type="password" className="input-box" placeholder="Password" name="password" value={newUser.password} onChange={newUserChangeHanldler}/>
                <p> <span><input type="checkbox"/></span> I accept terms and conditions</p>
                <button className="sign-btn">Sign up</button>
                {/* <p> <span><input type="checkbox"  onChange={newUserChangeHanldler}/></span>Car owner</p>  */}
                <p>Do you have an account? <a href="#" className="sign-in-btn">Sign in</a></p>
            </form>
        </div>
    )
}
export default SignupForm
                

