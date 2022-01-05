import React from 'react'


function Modal({setIsModalOpen, changeHanldler, submitHandler, loginDetails }) {


    const handleClick = () => {
        setIsModalOpen(false)
    }



    return (
        <div>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={handleClick}>X</button>
                    </div>
                    <div className="title">
                        <h1>User Authorization</h1>
                    </div>
                    <form onSubmit={submitHandler} className="body">
                        <div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <input className="login-input" value={loginDetails.email} placeholder="dimitri2@dimitri.com" onChange={changeHanldler} name="email" type="email" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label >Password</label>
                            <div>
                                <input className="login-input" onChange={changeHanldler} value={loginDetails.password} type="password" name="password" />
                            </div>
                        </div>
                        <button id="login-btn">Login</button>
                    </form>

                    <div id="not-a-member-yet">
                        <p>Not a member yet?</p>
                        <a id="sign-up-now-link" href="http://localhost:4000/signup">Sign Up Now!</a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Modal
