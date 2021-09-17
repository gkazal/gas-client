import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './Login.css'
import { Link } from 'react-router-dom';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


const Login = ({ modalIsOpen, closeModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const [newUser, setNewUser] = useState(false);

    return (
        <div className="loginForm">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="text-center">
                    {newUser &&
                        <h3>Register</h3>}
                    {!newUser &&
                        <h3>Login</h3>}
                    <div className="loginBottomColor">
                        <hr style={{ width: '20%', border: '2px solid #1EAE98' }} />
                    </div>
                </div>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">

                        <input type="text" {...register("Email", { required: true })} placeholder="Email" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <input type="password" {...register("Password", { required: true })} placeholder="Password" className="form-control"  />
                    </div>

                    {newUser &&
                        <div className="form-group">
                            <input type="password" {...register("Password", { required: true })} placeholder="Retype Password" className="form-control"  />
                        </div>}


                    <div className="inputButton">
                        {newUser && 
                            <input className="loginButton" type="submit" value="Register" />
                        }
                        {!newUser && 
                            <input className="loginButton" type="submit" value="Login" />
                        }
                    </div>
                </form>


                <div className="text-center">
                    <p >Forget Password..?</p>
                    {!newUser &&
                        <p onClick={() => setNewUser(!newUser)}>Don't Have an Account? Create New</p>
                    }
                    {newUser &&
                        <p onClick={() => setNewUser(!newUser)}>Already Have an Account? Login </p>
                    }

                </div>

            </Modal>

        </div>
    );
};

export default Login;