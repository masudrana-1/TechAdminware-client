import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const LogIn = () => {

    const { createUser } = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='shadow-2xl w-2/4 m-auto mt-20 p-6'>
                <h1 className='text-3xl'>Log In</h1>
                <div className='mt-4'>
                    <p className='text-left'>Email</p>
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className='btn mt-2'>LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;