import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    // for terms 
    const [accepted, setAccepted] = useState(false);

    const { createUser, googleProviderLogin, githubProviderLogin, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError('');
                form.reset();

                handleUpdateUserProfile(name, photoURL);

                handleEmailVerification();

                // for toast 
                toast.success('Successfully Register')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    // google auth
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error', error))
    }

    // github auth 
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    // profile update 
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // terms event handler 
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <form onSubmit={handleRegister} className='lg:shadow-2xl lg:w-2/4 lg:m-auto mt-2 p-6 text-center'>
                <h1 className='text-5xl text-success text-center'>REGISTER</h1>
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
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3 text-red-600'>
                    {error}
                </div>
                <div>
                    <span>You have an accout. <Link className='text-teal-500' to='/login'>Please Login</Link></span>
                </div>
                <button className='btn mt-2 shadow-md shadow-red-500/50 w-44'>Register</button>
                <br />
                <button onClick={handleGoogleSignIn} className='btn mt-2 shadow-md shadow-cyan-500/50 w-44'>SignIn with Google</button>
                <br />
                <button onClick={handleGithubSignIn} className='btn mt-2 shadow-md shadow-blue-500/50 w-44'>SignIn with Github</button>
            </form>
        </div>
    );
};

export default Register;