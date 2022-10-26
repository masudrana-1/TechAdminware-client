import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {

    const { createUser, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error', error))
    }

    return (
        <div>
            <form onSubmit={handleRegister} className='shadow-2xl w-2/4 m-auto mt-20 p-6'>
                <h1 className='text-3xl'>Register</h1>
                <div className='mt-4'>
                    <p className=''>Name</p>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-4'>
                    <p className=''>Photo URL</p>
                    <input type="text" name='photoURL' placeholder="Your PhotoURL" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-4'>
                    <p className=''>Email</p>
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className='btn mt-2'>Register</button>
                <br />
                <button onClick={handleGoogleSignIn} className='btn mt-2'>SignIn with Google</button>
            </form>
        </div>
    );
};

export default Register;